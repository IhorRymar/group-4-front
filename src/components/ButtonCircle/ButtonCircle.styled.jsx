import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 32px;
  right: 32px;
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
