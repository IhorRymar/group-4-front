import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const CloseButton = styled.button`
  display: none;
  background-color: transparent;
  border: ${p => p.theme.borders.borderNone};
  outline: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

export const StyledCloseIcon = styled(AiOutlineClose)`
  width: 16px;
  height: 16px;
`;
