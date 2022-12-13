import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: ${props => props.theme.buttons.primary.bg};
  width: 44px;
  height: 44px;
  border-radius: 50%;
  outline: none;
  border: none;
  color: ${props => props.theme.buttons.primary.color};
  font-size: 20px;
  scale: 1;
  cursor: pointer;
  :hover {
    scale: 1.2;
    transition: scale 150ms linear;
  }
`;
