import { NavLink } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { BiStats } from 'react-icons/bi';
import { FaDollarSign } from 'react-icons/fa';
import styled from 'styled-components';

export const NavigationStyled = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 28px;
  }
`;

export const IconField = styled.div`
  width: 38px;
  height: 38px;
  background-color: #6e78e8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
    margin-right: 20px;
    border-radius: 2px;
  }
`;

export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: inherit;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  &.active {
    ${IconField} {
      background-color: #4a56e2;
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
  &:not(:last-child) {
    margin-right: 40px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 12px;
    }
    &.active {
      ${Text} {
        font-weight: 700;
      }
    }
  }
`;

export const IoMdHomeStyled = styled(IoMdHome)`
  width: 28px;
  height: 28px;
  color: #fff;
  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const BiStatsStyled = styled(BiStats)`
  width: 28px;
  height: 28px;
  color: #fff;
  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const FaDollarSignStyled = styled(FaDollarSign)`
  width: 28px;
  height: 28px;
  color: #fff;
  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

// .Active .IconField {
//   background-color: #4a56e2;
//   filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
// }
