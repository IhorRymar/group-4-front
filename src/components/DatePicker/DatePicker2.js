import { TextField } from "@mui/material";
import React from "react";
import "dayjs/locale/ru";
import { useField } from "formik";

export const DatePicker = ({ name, otherProps }) => {
  const [field, meta] = useField(name);

  const configDatePicker = {
    ...field,
    ...otherProps,
    type: "date",
    variant: "standard",
    fullWidth: true,
    inputlabelprops: {
      shrink: true,
    },
    style: {
      marginBottom: "40px",
    },
  };

  if (meta && meta.touched && meta.error) {
    configDatePicker.error = true;
    configDatePicker.helperText = meta.error;
  }
  return <TextField {...configDatePicker} />;
};
