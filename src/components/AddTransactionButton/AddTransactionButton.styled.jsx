import styled from "styled-components";

export const AddButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  background-color: ${(p) => p.theme.buttons.primary.bg};
  color: white;
  cursor: pointer;
  border: none;
`;
