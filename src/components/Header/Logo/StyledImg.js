import styled from 'styled-components';
import baseVars from '../../../stylesheet/vars';

export const StyledLogoImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 16px;

  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;
