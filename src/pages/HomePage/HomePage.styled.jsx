import styled from 'styled-components';
// import baseVars from '../../stylesheet/vars';

export const MainWrapper = styled.div`
  margin-bottom: 28px;
  
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-right: 69px;
    border-right: 1px solid #DCDCDF;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.6);
  }
`;

export const NavBalanceWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    padding-bottom: 32px;
  }
`;