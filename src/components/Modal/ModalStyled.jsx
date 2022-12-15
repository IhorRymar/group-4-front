import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${p => p.theme.color.overlayBg};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`;

export const ModalWindow = styled.div`
  min-height: 350px;
  position: relative;
  width: 540px;
  border-radius: ${p => p.theme.radii.modalWindow};
  padding: 73px;
  background-color: ${p => p.theme.color.modalWindowBg};
  animation: growBox 150ms ease-in-out;
  @media screen and (max-width: 767px) {
    min-height: 350px;
    width: 320px;
    padding: 20px;
    background-color: ${p => p.theme.color.modalWindowBg};
  }

  @keyframes growBox {
    0% {
      scale: 0.2;
      opacity: 0.2;
    }
    25% {
      scale: 0.4;
      opacity: 0.4;
    }

    50% {
      scale: 0.6;
      opacity: 0.6;
    }

    75% {
      scale: 0.8;
      opacity: 0.8;
    }
    100% {
      scale: 1;
      opacity: 1;
    }
  }
`;

export const Heading = styled.h1`
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.heading};
  text-align: center;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
