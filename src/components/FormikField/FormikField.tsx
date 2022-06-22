import React from "react";
import TextField from '@mui/material/TextField';
import {
  Field,
  ErrorMessage,
  FormikErrors,
  FormikValues,
  FormikTouched,
} from "formik";
import "./FormikField.scss";

interface FormikFieldProps {
  label: string,
  name: string,
  errors: FormikErrors<FormikValues>,
  touched: FormikTouched<FormikValues>,
}

export const FormikField: React.FC<FormikFieldProps> = ({
  label,
  name,
  errors,
  touched,
}) => {
  return (
    <Field
      as={TextField}
      name={name}
      label={label}
      fullWidth
      autoComplete="off"
      helperText={name === "phone"
        ? "+38 (XXX) XXX - XX - XX"
        : <ErrorMessage name={name} />}
      error={errors[name] && touched[name]}
    />
  );
};