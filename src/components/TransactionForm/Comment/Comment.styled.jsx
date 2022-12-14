import styled from 'styled-components';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export const StyledComment = styled(TextareaAutosize)`
  width: 100%;
  border: none;
  border-bottom: ${p => p.theme.borderStyles.underline};
  margin-bottom: 40px;
  font-family: ${p => p.theme.fonts.placeholder};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[1]};

  ::placeholder {
    font-family: ${p => p.theme.fonts.placeholder};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes[1]};
    line-height: ${p => p.theme.lineHeights.formField};
  }
`;
