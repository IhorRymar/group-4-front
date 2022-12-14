import styled from 'styled-components';
import purpleEllipse from '../../../images/svg/ellipse-purple.svg';
import peachEllipse from '../../../images/svg/ellipse-peach.svg';

export const BackgroundImage = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  background-color: #e7eaf2;
  @media (min-width: 768px) {
    background-image: url(${purpleEllipse}), url(${peachEllipse});
    background-repeat: no-repeat, no-repeat;
    background-position: left bottom, top right;
  }
`;