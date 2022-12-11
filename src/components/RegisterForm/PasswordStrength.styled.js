import styled from 'styled-components';

export const Progress = styled.div`
  background-color: rgb(224, 224, 224);
  width: 100%;
  height: 4px;
  border-radius: 15px;
  transition: all 0.5s linear;
`;
export const ProgressBar = styled.div`
  margin-bottom: auto;
  @media screen and(max - width: 767px) {
    margin-left: 10px;
  }
`;
export const Text = styled.p`
  font-size: 12px;
  text-align: end;
  color: #ff6596;
`;
