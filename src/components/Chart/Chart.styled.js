import styled from 'styled-components';
// import baseVars from '../../stylesheet/vars';

export const Container = styled.div`
  position: relative;
  width: 280px;
  height: 280px;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;

export const Balance = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: 700;
`;