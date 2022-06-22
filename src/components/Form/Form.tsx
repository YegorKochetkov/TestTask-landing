import React, { FC } from "react";
import "./Form.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormikField } from "../FormikField";
import { FormikOption } from "../FormikOption/FormikOption";

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

const mailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const phoneRegex = /^[\+]{0,1}380([0-9]{9})$/;
const maxFileSize = 5000000;
const supportedFiles = ["jpg", "jpeg"];

const SignUpSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(2, "Too short!")
    .max(60, "Too long!")
    .required("Name is required"),
  mail: Yup
    .string()
    .matches(mailRegex, "Invalid email")
    .min(2, "Too short!")
    .max(100, "Too long!")
    .required("Mail is required"),
  phone: Yup
    .string()
    .matches(phoneRegex, "Invalid phone")
    .required("Phone is required"),
  position: Yup
    .string()
    .required("Please, choose a position"),
  photo: Yup
    .string()
    // .mixed()
    // .test("fileSize", "File is too large", (files) => {
    //   const size = files[0].size / 1024 / 1024;
    //   console.log(size)
    //   return size < 5;
    // })
    // .test("fileFormat", "We support only jpeg/jpg", (files) => {
    //   return supportedFiles.includes(files[0].type);
    // })
    .required("Please, upload your photo"),
});

export const AddNewUserForm: FC = () => {	
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
        validationSchema={SignUpSchema}
			>
				{({ dirty, isValid, errors, touched }) => {
					return (
            <>
              <Form className="form__field">
                <FormikField
                  label="Your name"
                  name="name"
                  errors={errors}
                  touched={touched}
                />
              </Form>
              <Form className="form__field">
                <FormikField
                  label="Email"
                  name="mail"
                  errors={errors}
                  touched={touched}
                />
              </Form>
              <Form className="form__field">
                <FormikField
                  label="Phone"
                  name="phone"
                  errors={errors}
                  touched={touched}
                />
              </Form>
              
              <Form className="form__field">
                <label className="form__label">
                  Select your position
                </label>
                <FormikOption
                  name="position"
                />
                <ErrorMessage name="position" />
              </Form>

              <Form className="form__field">
                <Field
                  name="photo"
                  type="file"
                />
                <ErrorMessage name="photo" />

                <button
                  type="submit"
                  id="signUp"
                  disabled={!dirty || !isValid}
                >
                  Sign up
                </button>
              </Form>
            </>
					);
				}}
			</Formik>
		</section>
	);
};
