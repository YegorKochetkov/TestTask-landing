import React, { FC } from "react";
import "./Main.scss";

export const Main: FC = () => {
	return (
		<main className="main">
			<article className="main__article">
				<h1 className="main__title">
					Test assignment for front-end developer
				</h1>
				<p className="main__paragraph">
					What defines a good front-end developer is one that has skilled
					knowledge of HTML, CSS, JS with a vast understanding of User design
					thinking as they&apos;ll be building web interfaces with accessibility
					in mind. They should also be excited to learn, as the world of
					Front-End Development keeps evolving.
				</p>
			</article>
			<a
				className="menu__link button"
				href="#signUp"
			>
				Sign up
			</a>
		</main>
	);
};
