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
`;

export const ModalWindow = styled.div`
  @media screen and (max-width: 767px) {
    width: 320px;
    padding: 20px;
    background-color: ${p => p.theme.color.modalWindowBg};
  }
  position: relative;
  width: 540px;
  border-radius: ${p => p.theme.radii.modalWindow};
  padding: 73px;
  background-color: ${p => p.theme.color.modalWindowBg};
`;
