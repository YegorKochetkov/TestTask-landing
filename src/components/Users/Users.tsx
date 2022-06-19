import React, { FC } from "react";
import "./Users.scss";
import { useGetUsersQuery } from "../../store";
import { selectCurrentUsers } from '../../store/currentUsersSlice';
import { useAppSelector } from '../../store/hooks';
import { Loader } from "../Loader";

export const Users: FC = () => {
	const currentUsers = useAppSelector(selectCurrentUsers);
  const { data, isLoading } = useGetUsersQuery(currentUsers);

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
						<p className="card__info">
							<span>{user.position}</span>
							<br />
							<span>{user.email}</span>
							<br />
							<span>{user.phone}</span>
							<br />
						</p>
          </li>
        ))}
			</ul>
			
			<button
				className="button"
				type="button"
				name="showUsers"
			>
				Show more
			</button>
		</section>
	);
};
