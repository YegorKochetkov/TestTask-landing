import React, { FC } from "react";
import "./Menu.scss";

export const Menu: FC = () => {
	return (
		<nav className="menu">
			<a
				className="menu__link button"
				href="#users"
			>
				Users
			</a>
			<a
				className="menu__link button"
				href="#signUp"
			>
				Sign up
			</a>
		</nav>
	);
};
