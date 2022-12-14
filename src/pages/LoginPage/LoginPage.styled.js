import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 768px;
    height: 100%;
    background-color: transparent;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0;
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

export const Img = styled.img`
  @media screen and (min-width: 768px) {
    width: 260px;
    /* margin-right: 40px; */
  }
  @media screen and (min-width: 1280px) {
    width: 435px;
    margin-right: 0;
  }
`;

export const WrapperImg = styled.div`
  height: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 60px 0 50px 0;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin: 0;
    padding: 40px 38px 0 76px;
  }
`;

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 1280px) {
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: auto;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(50px);
    padding: 0 91px 0 107px;
  }
`;
