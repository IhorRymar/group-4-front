import styled from 'styled-components';
import purpleEllipse from '../../images/svg/ellipse-purple.svg';
import peachEllipse from '../../images/svg/ellipse-peach.svg';

export const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #e7eaf2;
  @media (min-width: 768px) {
    background-image: url(${purpleEllipse}), url(${peachEllipse});
    background-repeat: no-repeat, no-repeat;
    background-position: left bottom, top right;
  }
`;

export const Backdrop = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px);
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 18px;
  }
`;