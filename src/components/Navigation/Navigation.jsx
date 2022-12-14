import React from 'react';

import { useNavigate } from 'react-router-dom';
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

  const isCorectlyWidth = () =>
    width >= 768 && path === '/group-4-front/currency' ? nav('/statistics') : null;
  
  return (
    <NavigationStyled>
      <NavLinkStyled to={'/home'}>
        <IconField>
          <IoMdHomeStyled />
        </IconField>
        {width >= 768 ? <Text>Home</Text> : null}
      </NavLinkStyled>
      <NavLinkStyled to={'/statistics'}>
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
