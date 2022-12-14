import styled from 'styled-components';

export const Progress = styled.div`
  background-color: rgb(224, 224, 224);
  width: 280px;
  height: 4px;
  border-radius: 15px;
  transition: all 0.5s linear;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const ProgressBar = styled.div`
  width: 280px;
  /* margin-bottom: 32px; */
  @media screen and (min-width: 768px) {
    /* margin-left: 10px; */
    width: 100%;
  }
`;

export const Text = styled.p`
  width: 280px;
  font-size: 12px;
  text-align: end;
  color: #ff6596;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
