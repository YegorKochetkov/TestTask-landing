import React, { FC } from "react";
import { UsersList } from "../UsersList";
import "./Main.scss";

export const Main: FC = () => {
	return (
		<main>
			<section className="info">
				<article className="info__article">
					<h1 className="info__title">
						Test assignment for front-end developer
					</h1>
					<p className="info__paragraph">
						What defines a good front-end developer is one that has skilled
						knowledge of HTML, CSS, JS with a vast understanding of User design
						thinking as they&apos;ll be building web interfaces with accessibility
						in mind. They should also be excited to learn, as the world of
						Front-End Development keeps evolving.
					</p>
				</article>
				<a
					className="button"
					href="#signUp"
				>
					Sign up
				</a>
			</section>
			<UsersList />
		</main>
	);
};
