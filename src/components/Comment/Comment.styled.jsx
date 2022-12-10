import styled from "styled-components";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export const StyledComment = styled(TextareaAutosize)`
  width: 100%;
  border: none;
  border-bottom: ${(p) => p.theme.radii.borderBottom};
  margin-bottom: 40px;
`;
