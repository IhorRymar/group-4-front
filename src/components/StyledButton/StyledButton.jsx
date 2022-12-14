import { MainButton } from './StyledButton.styled';

export const StyledButton = ({ type, children, onClick }) => {
  return (
    <MainButton type={type} onClick={onClick}>
      {children}
    </MainButton>
  );
};
