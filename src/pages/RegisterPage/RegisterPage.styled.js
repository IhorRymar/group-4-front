import styled from 'styled-components';

export const RegisterImg = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

export const Title = styled.p`
  position: absolute;
  right: 30px;
  top: 163px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  color: #000000;
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 590px;
    left: 200px;
  }
`;

export const Tittle = styled.p`
  position: absolute;
  right: 60px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  color: #000000;
  display: inline-block;
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 585px;
    left: 200px;
  }
`;
