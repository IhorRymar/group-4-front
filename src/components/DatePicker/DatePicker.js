import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "dayjs/locale/ru";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useField, useFormikContext } from "formik";
import { useState } from "react";
import dateTraform from "../../helpers/dateTransform";

export default function BasicDatePicker({ name }) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);
  const [dateData, setDateData] = useState(Date.now());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <DatePicker
          onChange={(newValue) => {
            const newDate = dateTraform(newValue);
            setDateData(newValue);
            setFieldValue(name, newDate);
          }}
          value={dateData}
          renderInput={(params) => (
            <TextField {...params} {...field} type="date" fullWidth />
          )}
        />
      </Box>
    </LocalizationProvider>
  );
}
