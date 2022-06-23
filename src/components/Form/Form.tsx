import React, { FC, useMemo, useState } from "react";
import "./Form.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormikField } from "../FormikField";
import { FormikOption } from "../FormikOption/FormikOption";
import { SignUpSchema } from "./SingUpSchema";
import { CustomTooltip } from "../Form/CustomTooltip";
import classNames from "classnames";

interface FormValues {
	name: string,
	mail: string,
	phone: string,
	position: string,
  photo: string,
}

type UploadEvent = {
  currentTarget: { files: { name: React.SetStateAction<string>; }[]; };
};

const initialValues: FormValues = {
	name: "",
	mail: "",
	phone: "",
	position: "",
  photo: "",
};

export const AddNewUserForm: FC = () => {	
  const [uploadText, setUploadText] = useState("Upload your photo");

  const isTouchedUploadField = useMemo(() => {
    return uploadText !== "Upload your photo";
  }, [uploadText]);

	const handleSubmit = (values: FormValues): void => {
		console.log(JSON.stringify(values));
	};

  const handleUpload = (event: UploadEvent): void => {
    setUploadText(event.currentTarget.files[0].name);
  };

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
				{({ dirty, isValid, errors, touched, setFieldValue }) => {
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

              <Form
                className={classNames(
                  "form__field form__field--upload",
                  {"form__field--error":
                    isTouchedUploadField && errors.photo},
                )}
              >
                <label>
                  <Field
                    name="photo"
                    type="file"
                    value={undefined}
                    onChange={(event: UploadEvent) => {
                      setFieldValue("photo", event.currentTarget.files[0]);
                      handleUpload(event);
                    }}
                    hidden
                  />

                  <CustomTooltip title={uploadText}>
                    <div>
                      <p
                        className={classNames(
                          "form__upload-button",
                          {"form__upload-button--error":
                            isTouchedUploadField && errors.photo},
                        )}
                      >
                        Upload
                      </p>
                      <p className="form__upload-text">
                        {uploadText}
                      </p>
                    </div>
                  </CustomTooltip>
                </label>
                <p className="form__error-message">
                  {isTouchedUploadField && errors.photo}
                </p>
              </Form>

              
              <button
                type="submit"
                id="signUp"
                disabled={!dirty || !isValid}
                className="button"
              >
                Sign up
              </button>
            </>
					);
				}}
			</Formik>
		</section>
	);
};
