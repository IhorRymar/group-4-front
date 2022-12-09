import { StyledHeader } from './Header.styled';
import Logo from './Logo/Logo';
import UserMenu from './UserMenu/UserMenu';

const Header = ({ handleClick3 }) => {
  return (
    <StyledHeader>
      <Logo />
      <UserMenu handleClick2={handleClick3} />
    </StyledHeader>
  );
};

export default Header;
