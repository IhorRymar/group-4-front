import styled from 'styled-components';
import { RiCalendar2Fill } from 'react-icons/ri';
import Datetime from 'react-datetime';

export const CalendarIcon = styled(RiCalendar2Fill)`
  color: #4a56e2;
  position: absolute;
  right: 10px;
  top: 75px;
  @media screen and (min-width: 767px) {
    right: 20px;
    top: 6px;
  }
`;

export const StyledDateTime = styled(Datetime)`
  position: relative;
  display: flex;
`;
