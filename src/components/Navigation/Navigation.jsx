import React from 'react';
// import css from './Navigation.module.css';

import { useNavigate } from 'react-router-dom';
// import { IoMdHome } from 'react-icons/io';
// import { BiStats } from 'react-icons/bi';
// import { FaDollarSign } from 'react-icons/fa';

import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import {
  BiStatsStyled,
  FaDollarSignStyled,
  IconField,
  IoMdHomeStyled,
  NavLinkStyled,
  Text,
  NavigationStyled,
} from './Navigation.styled';

export const Navigation = () => {
  const { width } = useWindowDimensions();
  const nav = useNavigate();
  const path = window.location.pathname;
  // console.log(path);

  const isCorectlyWidth = () =>
    width >= 768 && path === '/currency' ? nav('/diagram') : null;

  return (
    <NavigationStyled>
      <NavLinkStyled to={'/'}>
        <IconField>
          <IoMdHomeStyled />
        </IconField>
        {width >= 768 ? <Text>Home</Text> : null}
      </NavLinkStyled>
      <NavLinkStyled to={'/diagram'}>
        <IconField>
          <BiStatsStyled />
        </IconField>
        {width >= 768 ? <Text>Statistics</Text> : null}
      </NavLinkStyled>
      {width < 768 ? (
        <NavLinkStyled to={'/currency'}>
          <IconField>
            <FaDollarSignStyled />
          </IconField>
        </NavLinkStyled>
      ) : (
        isCorectlyWidth()
      )}
    </NavigationStyled>
  );
};
