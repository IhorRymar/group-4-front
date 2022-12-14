import styled from 'styled-components';

export const RegisterImg = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0 50px 0;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 30px 30px 0 66px;
  }
`;

export const Title = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  color: #000000;

  @media screen and (min-width: 768px) {
    margin: 0 71px 0 0;
  }

  @media screen and (min-width: 1280px) {
    margin: 30px 0 0 0;
  }
`;
