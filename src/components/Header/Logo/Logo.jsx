import logo from './Logo.png';
import StyledLogo from './StyledLogo';
import { StyledLogoImg } from './StyledImg';

const Logo = () => {
  return (
    <div>
      <StyledLogo>
        <StyledLogoImg src={logo} alt="Logo" />
        Wallet
      </StyledLogo>
    </div>
  );
};

export default Logo;
