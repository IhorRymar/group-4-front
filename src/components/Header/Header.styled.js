import styled from 'styled-components';
import baseVars from '../../stylesheet/vars';

export const StyledHeader = styled.div`
  display: flex;
  min-height: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  margin: 0;

  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    min-height: 80px;
    /* width: calc(100% - 64px); */
    padding: 20px 32px;
  }

  @media screen and (min-width: ${baseVars.sizeScreen.desktop}) {
    /* width: calc(100% - 32px); */
    padding: 20px 16px;
  }
`;
