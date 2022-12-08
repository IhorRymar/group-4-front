import { styled, Select, MenuItem } from "@mui/material"

export const StyledSelect = styled(Select)({
  width: '280px',
  color: '#000',
  fontFamily: 'Circe',
  borderRadius: '30px',
  marginBottom: '20px',
  borderColor: '#4A56E2',

  '@media screen and (min-width: 768px)': {
    width: '160px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#000',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#4A56E2',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #4A56E2',
    outline: 'none',
  },
  '& .MuiSelect-outlined': {
    padding: '13px 20px',
    color: '#000',
  },
  '& .MuiSelect-icon': {
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '& .MuiMenu-list': {
    backgroundColor: 'red,'
  }
});

export const MenuProps = {
  anchorPosition: { top: 200, left: 400 },
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  }, 
  PaperProps: {
    style: {
      background: 'rgba(255, 255, 255, 0.7)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(25px)',
      borderRadius: '20px', 
      maxHeight: '232px',
    }
  }
};

export const StyledMenuItem = styled(MenuItem)({
  fontFamily: 'Circe',

  '&:hover': {
    color: '#ff6596',
    backgroundColor: '#fff',
  },
  '&.Mui-selected': {
    color: '#ff6596',
    backgroundColor: '#fff'
  },
  '&.MuiMenu-list': {
    borderRadius: '0',
  },
});

export const dropdownIcon = (props) => (
  <svg {...props} width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L10 10L19 1" stroke="black"/>
  </svg>
);
