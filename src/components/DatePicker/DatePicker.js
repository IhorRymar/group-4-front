import Datetime from "react-datetime";
import moment from "moment";
import "moment/locale/uk";
import "react-datetime/css/react-datetime.css";
import { useFormikContext } from "formik";

export const DatePicker = ({ name }) => {
  const {
    setFieldValue,
    values: { date },
  } = useFormikContext();
  const hadnleChange = (value) => {
    setFieldValue(name, moment(value).format("DD.MM.YYYY"));
  };
  let configDatePicker = {
    locale: "uk",
    tomeFormat: false,
    name,
    value: { date },
  };

  let inpuProps = {
    style: {
      width: "100%",
      border: "none",
      outline: "none",
      marginBottom: 40,
      paddingLeft: 14,
      paddingBottom: "8px",
      borderBottom: "1px solid #E0E0E0",
    },
  };

  return (
    <Datetime
      {...configDatePicker}
      inputProps={inpuProps}
      onChange={(value) => hadnleChange(value)}
      dateFormat="DD.MM.YYYY"
      timeFormat={false}
      closeOnSelect={true}
    />
  );
};
