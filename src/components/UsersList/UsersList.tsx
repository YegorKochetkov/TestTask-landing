import React, { FC, useEffect, useState } from "react";
import "./UsersList.scss";
import { useGetUsersQuery } from "../../store";
import {
	selectCurrentUsers,
	setCurrentUsers,
	Users,
} from '../../store/currentUsersSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Loader } from "../Loader";

export const UsersList: FC = () => {
	const [isLastUsers, setIsLastUsers] = useState(true);

	const dispatch = useAppDispatch();
	const currentUsers: Users = useAppSelector(selectCurrentUsers);
  const { data, isLoading } = useGetUsersQuery(currentUsers);

	const handleShowMore = () => {
		if (data && data?.links.next_url !== null) {
			dispatch(setCurrentUsers(data));
		}
	};

	useEffect(() => {
		if (data) {
			setIsLastUsers(false);
		}

		if (data?.links.next_url === null) {
			setIsLastUsers(true);
		} 
	}, [data]);

	return (
		<section className="cards">
			<h1 className="cards__title">
				Working with GET request
			</h1>

			{isLoading && <Loader />}

			<ul className="cards__list">
				{data?.users.map((user) => (
          <li key={user.id} className="card">
            <img
							src={user.photo}
							alt="user
							avatar"
							className="card__avatar"
						/>
						<p className="card__name">
							{user.name}
						</p>
						<p className="card__position">
							{user.position}
						</p>
						<p className="card__email">
							{user.email}
						</p>
						<p className="card__phone">
							{user.phone}
						</p>
          </li>
        ))}
			</ul>

			<button
				className="button"
				type="button"
				name="showUsers"
				onClick={() => handleShowMore()}
				disabled={isLastUsers}
			>
				Show more
			</button>
		</section>
	);
};
