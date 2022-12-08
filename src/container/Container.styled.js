import styled from 'styled-components';

export const Backdrop = styled.div`
  backdrop-filter: blur(50px);
  min-height: 100vh;
  @media (min-width: 768px) {
    width: 100%;
    min-height: 100vh;
    background-color: #e7eaf2;
    background-repeat: no-repeat, no-repeat;
    background-position: left bottom, right top;
  }
`;
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
@media (min-width: 480px) {
    width: 480px;
  }
@media (min-width: 768px) {
  width: 768px;
}
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
