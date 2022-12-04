import styled from 'styled-components';
import baseVars from '../../../stylesheet/vars';

const StyledLogo = styled.div`
  font-family: ${baseVars.fonts.second};
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;

  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    font-size: 30px;
  }
  display: flex;
  align-items: center;
`;

export default StyledLogo;
