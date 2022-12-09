import { StyledHeader } from './Header.styled';
import Logo from './Logo/Logo';
import UserMenu from './UserMenu/UserMenu';
import Logout from './Logout/Logout';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Logo />
        <UserMenu />
      </StyledHeader>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
