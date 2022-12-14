import { styled, Select, MenuItem } from '@mui/material';

export const StyledSelect = styled(Select)`
  font-family: 'Circe';
  border-radius: 30px;
  border-color: #4a56e2;

  & .MuiOutlinedInput-notchedOutline {
    border-color: #000;
  }
  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #4a56e2;
  }
  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid #4a56e2;
    outline: none;
  }
  & .MuiSelect-outlined {
    padding: 13px 20px;
    color: #000;
  }
  & .MuiSelect-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  & .MuiMenu-list {
    background-color: red;
  }
  & .MuiInput-input {
    :focus {
      background-color: transparent;
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  font-family: 'Circe';

  &:hover {
    color: #ff6596;
    background-color: #fff;
  }
  &.Mui-selected {
    color: #ff6596;
    background-color: #fff;
  }
  &.MuiMenu-list {
    border-radius: 0;
  }
`;

export const dropdownIcon = props => (
  <svg
    {...props}
    width="20"
    height="11"
    viewBox="0 0 20 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L10 10L19 1" stroke="black" />
  </svg>
);

export const MenuProps = {
  PaperProps: {
    style: {
      background: 'rgba(255, 255, 255, 0.7)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(25px)',
      borderRadius: '20px',
    },
  },
};
