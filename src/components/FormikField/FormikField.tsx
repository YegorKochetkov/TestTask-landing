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
  const helperText = () => {
    if (name === "phone") {
      return "+38 (XXX) XXX - XX - XX";
    }

    if (errors[name] && touched[name]) {
      return <ErrorMessage name={name} />;
    }

    return " ";
  };

  return (
    <Field
      as={TextField}
      name={name}
      label={label}
      fullWidth
      autoComplete="off"
      helperText={helperText()}
      error={errors[name] && touched[name]}
    />
  );
};