import { StyledName } from './StyledName';
import { StyledUserMenu } from './StyledUserMenu';
import Logout from '../Logout/Logout';

const UserMenu = ({ name }) => {
  return (
    <StyledUserMenu>
      <StyledName>Name</StyledName>
      <Logout />
    </StyledUserMenu>
  );
};

export default UserMenu;
