import styled from 'styled-components';
// import baseVars from '../../stylesheet/vars';

export const Container = styled.div`
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 32px;
  }
`;

export const ChartWrapper = styled.div`
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-right: 32px;
  }
  
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