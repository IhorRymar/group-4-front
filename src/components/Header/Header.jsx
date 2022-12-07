import { StyledHeader } from './Header.styled';
import Logo from './Logo/Logo';
import UserMenu from './UserMenu/UserMenu';
import Logout from './Logout/Logout';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <UserMenu />
    </StyledHeader>
  );
};

export default Header;
