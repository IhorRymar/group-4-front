import moment from 'moment';
import 'moment/locale/uk';
import 'react-datetime/css/react-datetime.css';
import { useFormikContext } from 'formik';
import { StyledDateTime } from './DatePicker.styled';

export const DatePicker = ({ name }) => {
  const { setFieldValue, values } = useFormikContext();
  const hadnleChange = value => {
    setFieldValue(name, moment(value).utc());
  };
  const configDatePicker = {
    locale: 'uk',

    name,
    value: values.date,
  };

  const inpuProps = {
    style: {
      display: 'block',
      width: '100%',
      border: 'none',
      outline: 'none',
      marginBottom: 40,
      paddingLeft: 14,
      paddingBottom: 0,
      borderBottom: '1px solid #E0E0E0',
      fontFamily: 'Circe',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '27px',
    },
  };

  return (
    <StyledDateTime
      {...configDatePicker}
      inputProps={inpuProps}
      onChange={value => hadnleChange(value)}
      dateFormat="DD.MM.YYYY"
      timeFormat={false}
      closeOnSelect={true}
    />
  );
};
