import { MainButton } from './StyledButton.styled';

export const StyledButton = ({ type, children }) => {
  return <MainButton type={type}>{children}</MainButton>;
};
