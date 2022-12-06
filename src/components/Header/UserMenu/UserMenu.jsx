import { StyledName } from './StyledName';
import { StyledUserMenu } from './StyledUserMenu';
import Logout from '../Logout/Logout';

const UserMenu = ({ handleClick2 }) => {
  return (
    <StyledUserMenu>
      <StyledName>Name</StyledName>
      <Logout handleClick={handleClick2} />
    </StyledUserMenu>
  );
};

export default UserMenu;
