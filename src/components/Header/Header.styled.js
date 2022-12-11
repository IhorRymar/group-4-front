import styled from 'styled-components';
import baseVars from '../../stylesheet/vars';

export const StyledHeader = styled.div`
  min-height: 60px;
  width: 100%;
  background-color: #fff;
  padding: 15px 0;
  margin: 0;

  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    min-height: 80px;
    /* width: calc(100% - 64px); */
    padding: 20px 0;
  }

  @media screen and (min-width: ${baseVars.sizeScreen.desktop}) {
    /* width: calc(100% - 32px); */
    padding: 20px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 18px;
  }
`;
