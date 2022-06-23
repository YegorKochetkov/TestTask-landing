import React, { FC } from "react";
import "./Registered.scss";
import happyUser from "../../../src/images/success-image.svg";

export const Registered: FC = () => {
	return (
    <section className="registered">
      <h2 className="registered__title">
        User successfully registered
      </h2>
      <img
        src={happyUser}
        alt="picture with happy user"
        className="registerd__picture"
      />
    </section>

	);
};
