import styled from 'styled-components';
// import { Number } from './Number/Number';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 30px;
  width: 336px;
  position: relative;
  padding: 8px 40px 8px;

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const Text = styled.p`
  font-family: 'Circe', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #a6a6a6;
  /* margin-bottom: 12px; */
`;

export const BalanceStyled = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  color: #000000;
  /* padding-left: 40px; */
  /* padding-bottom: 11px; */
`;

export const CurrencySymbol = styled.span`
  font-weight: 400;
  margin-right: 8px;
`;
