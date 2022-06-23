import React, { ReactNode } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import "./FormikOption.scss";
import { createTheme, FormHelperText, ThemeProvider } from "@mui/material";
import { Field, ErrorMessage, FieldInputProps } from "formik";
import { useGetPositionsQuery } from "../../store/positionsApi";
import { Loader } from "../Loader";

interface FormikOptionProps {
  name: string,
}

interface MaterialUIOptionFieldProps extends FieldInputProps<string> {
  children: ReactNode,
  error?: string,
  name: string,
};

const MaterialUIOptionField: React.FC<MaterialUIOptionFieldProps>
  = ({
    children,
    error,
    name,
    value,
    onChange,
  }) => {
    return (
      <FormControl>
        <RadioGroup name={name} onChange={onChange} value={value} >
          {children}
        </RadioGroup>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    );
  }

const theme = createTheme({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif"
    ].join(",")
  }
});  

export const FormikOption: React.FC<FormikOptionProps> = ({
  name,
}) => {
  const { data, isFetching } = useGetPositionsQuery();
  const positions = data?.positions;

  return (
    <>
      <div className="form__loader">
        {isFetching && <Loader />}
      </div>
      <Field
        name={name}
        as={MaterialUIOptionField}
        error={<ErrorMessage name={name} />}
      >
        <ThemeProvider theme={theme}>
          {positions?.map((position) => (
              <FormControlLabel
                control={<Radio />}
                value={position.id}
                label={position.name}
                labelPlacement="end"
                key={position.id}
                name={name}
              />
          ))}
        </ThemeProvider>
      </Field>
    </>
  );
};