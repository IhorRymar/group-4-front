import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${(props) => props.theme.buttons.primary.bg};
  width: 44px;
  height: 44px;
  border-radius: 50%;
  outline: none;
  border: none;
  color: ${(props) => props.theme.buttons.primary.color};
  font-size: 20px;
  cursor: pointer;
`;
