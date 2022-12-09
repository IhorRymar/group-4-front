import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  max-width: 480px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 38px 0;
    max-width: none;
    height: 100%;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    padding: 0;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  color: #000000;
`;

export const Img = styled.img`
  @media screen and (min-width: 768px) {
    margin-right: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 66px;
    margin-bottom: 32px;
  }
`;

export const WrapperImg = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 50px;
    width: 274px;
    height: 250px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 452px;
    height: 419px;
  }
`;

export const FormLogin = styled.div`
  width: 100%;
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: auto;
    backdrop-filter: blur(50px);
    padding: 52px 91px 52px 107px;
  }
`;
