import React, { FC, useEffect, useState } from "react";
import "./Form.scss";
import { useGetUsersQuery } from "../../store";
import {
	selectCurrentUsers,
	setCurrentUsers,
	Users,
} from '../../store/currentUsersSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Loader } from "../Loader";

export const Form: FC = () => {	
	const dispatch = useAppDispatch();

	return (
		<section className="form">
			<h2 className="form__title">
				Working with POST request
			</h2>
			
		</section>
	);
};
