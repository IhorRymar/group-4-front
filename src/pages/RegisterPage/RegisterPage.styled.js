import styled from 'styled-components';

export const Content = styled.div`
  @media screen and (min-width: 1280px) {
    position: absolute;
    right: 0;
    width: 55vw;
    height: 100vh;
    background-color: #fff;
    opacity: 0.4;
  }
`;

export const Container = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  @media screen and (min-width: 768px) {
    position: relative;
    width: 768px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1280px;
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
    padding-top: 360px;
    padding-bottom: 48px;
    max-width: 768px;
    max-height: 1024px;
    background-repeat: no-repeat;
    background-position: left 114px top 60px;
  }
  @media screen and (min-width: 1280px) {
    position: relative;
    width: 560px;
    height: 720px;
    padding-left: 114px;
    padding-right: 114px;
    background-position: left 76px top 150px;
  }
`;

export const Title = styled.h1`
  position: absolute;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    right: 153px;
    top: 163px;
    width: 187px;
    height: 45px;
  }
  @media screen and (min-width: 1280px) {
    left: 200px;
    top: 597px;
  }
`;

export const ContentContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 960px;
  }
  @media screen and (min-width: 1280px) {
    position: relative;
    width: 720px;
    height: 720px;
    background-repeat: no-repeat;
    background-position: right 0;
  }
`;
