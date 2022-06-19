import React, { FC } from "react";
import "./Header.scss";
import { Logo } from "../Logo";
import { Menu } from "../Menu";

export const Header: FC = () => {
	return (
		<header className="header ">
			<Logo />
      <Menu />
		</header>
	);
};
