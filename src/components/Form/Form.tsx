import React, { FC, useMemo, useState } from "react";
import "./Form.scss";
import { Formik, Form, Field, ErrorMessage, FormikState, FormikHelpers } from "formik";
import { FormikField } from "../FormikField";
import { FormikOption } from "../FormikOption/FormikOption";
import { SignUpSchema } from "./SingUpSchema";
import { CustomTooltip } from "../Form/CustomTooltip";
import classNames from "classnames";
import { UpdateUser, useAddUserMutation, useGetTokenQuery } from "../../store/usersApi";
import { Registered } from "../Registered";
import { Loader } from "../Loader";
import { FormTextFields } from "./FormTextFields";

export interface FormValues {
	name: string,
	email : string,
	phone: string,
	position_id: number,
  photo: string,
}

type UploadEvent = {
  currentTarget: { files: { name: React.SetStateAction<string>; }[]; };
};

const initialValues: FormValues = {
	name: "",
	email : "",
	phone: "",
	position_id: 0,
  photo: "",
};

export const AddNewUserForm: FC = () => {	
  const [uploadText, setUploadText] = useState("Upload your photo");
  const { data } = useGetTokenQuery();
  const [addUser, { isError, isLoading }] = useAddUserMutation();

  const [isRegistered, setIsRegistered] = useState(false);

  const isTouchedUploadField = useMemo(() => {
    return uploadText !== "Upload your photo";
  }, [uploadText]);

	const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const formFields = Object.entries(values);
    const userForm = new FormData();

    for (const field of formFields) {
      userForm.append(field[0], field[1]);
    }

    if (data) {
      const newUser: UpdateUser = {
        newUser: userForm,
        token: data.token,
      };

      await addUser(newUser).unwrap();
      actions.resetForm();
      setIsRegistered(true);
    }
	};

  const handleUpload = (event: UploadEvent): void => {
    setUploadText(event.currentTarget.files[0]?.name);
  };

	return (
    <>
      <section className="form">
        <h2 className="form__title">
          Working with POST request
        </h2>

        <div className="form__loader">
          {isLoading && <Loader />}
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => handleSubmit(values, actions)}
          validationSchema={SignUpSchema}
        >
          {({ dirty, isValid, errors, touched, setFieldValue }) => {
            return (
              <>
                <FormTextFields errors={errors} touched={touched} />

                <Form className="form__field">
                  <label className="form__label">
                    Select your position
                  </label>
                  <FormikOption
                    name="position_id"
                  />
                  <ErrorMessage name="position_id" />
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

                <Form>
                  <button
                    type="submit"
                    id="signUp"
                    disabled={!dirty || !isValid || isLoading}
                    className="button"
                  >
                    Sign up
                  </button>
                </Form>
              </>
            );
          }}
        </Formik>
      </section>

      {isRegistered && <Registered />}
    </>
	);
};
