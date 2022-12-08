import { useSelector } from 'react-redux';
import { userName } from '../../../redux/auth/auth-selectors';
import { StyledName } from './StyledName';
import { StyledUserMenu } from './StyledUserMenu';
import Logout from '../Logout/Logout';

const UserMenu = ({ handleClick2 }) => {
  const name = useSelector(userName);
  return (
    <StyledUserMenu>
      <StyledName>{name}</StyledName>
      <Logout handleClick={handleClick2} />
    </StyledUserMenu>
  );
};

export default UserMenu;
