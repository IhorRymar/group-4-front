import styled from 'styled-components';
import baseVars from '../../../stylesheet/vars';

export const StyledLogout = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0;
  border: none;
  height: 18px;
  cursor: pointer;

  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    height: 30px;
    padding-left: 12px;
    border-left: 1px solid ${baseVars.colors.fourthText};

    ::after {
      content: 'Exit';
      margin-top: 2px;
      margin-left: 8px;
      font-family: 'Circe';
      font-weight: 400;
      font-size: 18px;
      line-height: calc(27 / 18);
      color: ${baseVars.colors.fourthText};
    }
  }
`;
