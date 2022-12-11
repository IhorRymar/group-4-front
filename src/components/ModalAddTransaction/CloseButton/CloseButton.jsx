import { CloseButton } from './CloseButton.styled';
import { StyledCloseIcon } from './CloseButton.styled';

export const StyledCloseButton = ({ type, onClick }) => {
  return (
    <CloseButton type={type} onClick={onClick}>
      <StyledCloseIcon />
    </CloseButton>
  );
};
