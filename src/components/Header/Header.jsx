import { StyledHeader } from './Header.styled';
import Logo from './Logo/Logo';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <UserMenu />
    </StyledHeader>
  );
};

export default Header;
