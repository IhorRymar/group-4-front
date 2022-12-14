import logoutIcon from './logoutIcon.png';
import { StyledLogout } from './Logout.styled';
import { useDispatch } from 'react-redux';
// import { toggleModal } from 'redux/logout-modal/logout-modal';
import { isLogOutModalOpen } from 'redux/modal/modal-sclice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(isLogOutModalOpen(true));
  };

  return (
    <StyledLogout onClick={handleClick}>
      <img src={logoutIcon} alt="logout" />
    </StyledLogout>
  );
};

export default Logout;
