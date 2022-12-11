import { StyledHeader, Container } from './Header.styled';
import Logo from './Logo/Logo';
import UserMenu from './UserMenu/UserMenu';
// import Logout from './Logout/Logout';


const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <UserMenu />
      </Container>
    </StyledHeader>
  );
};

export default Header;
