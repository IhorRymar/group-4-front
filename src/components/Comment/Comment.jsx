import { StyledComment } from './Comment.styled';
import { useField } from 'formik';
export const Comment = ({ ...props }) => {
  const [field] = useField(props);
  return <StyledComment minRows={3} {...field} {...props} />;
};
