import styled from 'styled-components';
import baseVars from '../../stylesheet/vars';

export const Container = styled.div`
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color: ${baseVars.colors.secondBg};

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const ChartWrapper = styled.div`

`;

export const Title = styled.h2`
  align-content: flex-start;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 30px;
  margin: 0 0 8px;

  @media screen and (min-width: 768px) {
    margin: 0 0 20px;
  }
`;