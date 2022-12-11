import styled from 'styled-components';
import backgroundImg from '../../images/photo/backgroundcurr.png';

export const ContainerStyled = styled.div`
  padding-top: 20px;
  /* display: flex; */

  @media screen and (min-width: 1280px) {
    display: flex;
    padding-top: 40px;
    position: relative;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 728px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 37%;
    margin: 0;
    padding-left: 50px;
    height: 100vh;
    position: relative;
  }
`;

export const WrapperDashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 728px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 37%;
    margin: 0;
    padding-left: 50px;
    height: 100vh;
    position: relative;
  }
`


export const Item = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
    align-self: flex-start;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

export const ItemField = styled.div`
  @media screen and (min-width: 768px) {
    &:first-child {
      margin-bottom: 30px;
    }
  }
`;

export const Table = styled.div`
  border-radius: 30px;
  width: 280px;
  position: relative;
  @media screen and (min-width: 768px) {
    min-width: 336px;
  }
  @media screen and (min-width: 1280px) {
    min-width: 393px;
  }
`;

export const TitleList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6e78e8;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 12px 20px;

  @media screen and (min-width: 1280px) {
    padding: 17px 62px 17px 44px;
  }
`;

export const TitleItem = styled.li`
  font-family: 'Circe', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: #ffffff;
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const TextList = styled.ul`
  background-color: #4a56e2;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 12px 20px 16px;
  min-height: 127px;
  @media screen and (min-width: 1280px) {
    padding: 20px 61px 0 58px;
    min-height: 287px;
  }
`;

export const TextItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const TextItemText = styled.p`
  font-family: 'Circe', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: #ffffff;
`;

export const Background = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  @media screen and (min-width: 1280px) {
    height: 40%;
  }
`;

export const Line = styled.hr`
  @media screen and (min-width: 1280px) {
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
    background-color: #e7e5f2;
    height: calc(100% + 40px);
    width: 1px;
    top: -47px;
    right: 0;
    position: absolute;
    margin: 0;
    border: none;
  }
`;
