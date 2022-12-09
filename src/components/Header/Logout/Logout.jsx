import logoutIcon from './logoutIcon.png';
import { StyledLogout } from './Logout.styled';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';

const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <StyledLogout onClick={handleClick}>
      <img src={logoutIcon} alt="logout" />
    </StyledLogout>
  );
};

export default Logout;
