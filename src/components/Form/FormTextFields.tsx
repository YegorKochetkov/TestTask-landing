import React, { FC } from "react";
import "./Form.scss";
import { Form, FormikErrors, FormikTouched, FormikValues } from "formik";
import { FormikField } from "../FormikField";
import { ThemeProvider } from "@mui/material";
import { theme } from "../FormikOption/FormikOption";

type Props = {
  errors: FormikErrors<FormikValues>,
  touched: FormikTouched<FormikValues>,
};

export const FormTextFields: FC<Props> = ({ errors, touched }) => {	
	return (
    <ThemeProvider theme={theme}>
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
          name="email"
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
    </ThemeProvider>
	);
};
