import React, { FC, useEffect, useState } from "react";
import "./Form.scss";
import { useGetUsersQuery } from "../../store";
import {
	selectCurrentUsers,
	setCurrentUsers,
	Users,
} from "../../store/currentUsersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Loader } from "../Loader";
import { Formik, Form, Field } from "formik";

interface FormValues {
	name: string,
	mail: string,
	phone: string,
	position: string,
  photo: string,
}

const initialValues: FormValues = {
	name: "",
	mail: "",
	phone: "",
	position: "",
  photo: "",
};

export const AddNewUserForm: FC = () => {	
	const dispatch = useAppDispatch();
	const handleSubmit = (values: FormValues): void => {
		console.log(JSON.stringify(values));
	}

	return (
		<section className="form">
			<h2 className="form__title">
				Working with POST request
			</h2>

			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				{props => {
					return (
            <>
              <Form>
                <Field
                  autoComplete="off"
                  name="name"
                  as="input"
                  placeholder="Your name"
                />
              </Form>

              <Form>
                <Field
                  autoComplete="off"
                  name="mail"
                  as="input"
                  placeholder="Email"
                />
              </Form>

              <Form>
                <Field
                  autoComplete="off"
                  name="phone"
                  as="input"
                  placeholder="Phone"
                />
              </Form>

              <Form>
                <div role="group" aria-labelledby="position-radio-group">
                  <label>
                    <Field type="radio" name="position" value="One" />
                    One
                  </label>
                  <label>
                    <Field type="radio" name="position" value="Two" />
                    Two
                  </label>
                </div>

              </Form>

              <Form>
                <Field
                  autoComplete="off"
                  name="photo"
                  type="file"
                  placeholder="Upload your photo"
                />

                <button type="submit" id="signUp">Sign up</button>
              </Form>

            </>
					);
				}}

			</Formik>
		</section>
	);
};
