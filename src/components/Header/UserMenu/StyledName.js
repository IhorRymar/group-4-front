import styled from 'styled-components';
import baseVars from '../../../stylesheet/vars';

export const StyledName = styled.span`
  margin-right: 8px;
  font-weight: 400;
  font-size: 18px;
  color: ${baseVars.colors.fourthText};
  line-height: calc(27 / 18);

  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    margin-right: 12px;
  }
`;
