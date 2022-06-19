import React, { FC } from "react";
import "./Logo.scss";
import LogoImages from "../../images/logo.svg"

export const Logo: FC = () => {
	return (
		<a className="logo" href="#home">
			<img
				className="logo__image"
				src={LogoImages}
				alt="TestTask logo"
			/>
		</a>
	);
};
