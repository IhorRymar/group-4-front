import styled from 'styled-components';
import { Heading } from '../ModalAddTransaction/ModalAddTransaction.styled';
import baseVars from '../../stylesheet/vars';

export const StyledHeadingLogout = styled(Heading)`
  margin-bottom: 20px;

  @media screen and (min-width: ${baseVars.sizeScreen.tablet}) {
    margin-bottom: 40px;
  }
`;
