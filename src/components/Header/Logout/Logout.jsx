import logoutIcon from './logoutIcon.png';
import { StyledLogout } from './Logout.styled';

const Logout = ({ handleClick }) => {
  return (
    <StyledLogout onClick={handleClick}>
      <img src={logoutIcon} alt="logout" />
    </StyledLogout>
  );
};

export default Logout;
