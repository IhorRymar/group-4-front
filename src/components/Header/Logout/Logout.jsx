import logoutIcon from './logoutIcon.png';
import { StyledLogout } from './Logout.styled';

const Logout = () => {
  return (
    <StyledLogout>
      <img src={logoutIcon} alt="logout" />
    </StyledLogout>
  );
};

export default Logout;
