import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWindow = styled.div`
  @media screen and (max-width: 767px) {
    width: 320px;
    padding: 20px;
    background-color: #fff;
  }
  width: 540px;
  border-radius: 20px;
  padding: 20px;
  background-color: #fff;
`;

export const Heading = styled.h1`
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.heading};
  text-align: center;
`;