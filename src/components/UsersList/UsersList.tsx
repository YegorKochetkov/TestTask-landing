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
	const [isLoading, setIsLoading] = useState(true);
	
	const dispatch = useAppDispatch();
	const currentUsers: Users = useAppSelector(selectCurrentUsers);
  const { data } = useGetUsersQuery(currentUsers);

	const handleShowMore = () => {
		setIsLoading(true);
		
		if (data && data?.links.next_url !== null) {
			dispatch(setCurrentUsers(data));
		}
	};

	useEffect(() => {
		if (data) {
			setIsLastUsers(false);
			setIsLoading(false);
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

			<div className="cards__loader">
				{isLoading && <Loader />}
			</div>

			<ul className="cards__list">
				{data?.users.map((user) => (
          <li key={user.id} className="card">
            <img
							src={user.photo}
							alt={`${user.name} photo`}
							className="card__avatar"
						/>

						<p className="tooltip">
							<span className="card__name">
								{user.name}
							</span>


							<span className="tooltiptext">
								{user.name}
							</span>
						</p>

						<p className="tooltip">
							<span className="card__position">
								{user.position}
							</span>


							<span className="tooltiptext">
								{user.position}
							</span>
						</p>

						<p className="tooltip">
							<a className="card__email" href={`mailto: ${user.email}`}>
								{user.email}
							</a>

							<span className="tooltiptext">
								{user.email}
							</span>
						</p>
						
						<p className="tooltip">
							<a className="card__phone" href={`tel:${user.phone}`}>
								{user.phone}
							</a>		

							<span className="tooltiptext">
								{user.phone}
							</span>
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
