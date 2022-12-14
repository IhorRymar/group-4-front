import React , { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { Btn, Button, Container, Logotype, Icon, FormaRegistration, Label, Error} from "./LoginForm.styled";
import {login} from '../../redux/auth/auth-operations'
import { loginSchema } from '../../utils/validationsSchemas'
import sprite from '../../images/svg/sprite.svg'
import { Visibility, VisibilityOff, Lock } from '@mui/icons-material';
import { HiEnvelope } from "react-icons/hi2";
import { styled, IconButton, TextField } from '@mui/material';



const LoginForm = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
   const handleSubmit = ({ email, password }) => {
     dispatch(login({ email, password }));
   };
  // const tooglePassword = () => { setShowPassword(!showPassword) }

  const tooglePassword = useCallback(() => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }, []);
  const handleMouseDownPassword = e => {
    e.preventDefault();
  }

  return (
    <div>
      <Container>
        <Logotype>
          <Icon>
            <use href={`${sprite}#icon-logo`}></use>
          </Icon>
        </Logotype>

        <Formik
         initialValues={{
          password: "",
          email: "",
        }}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={loginSchema}
      >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <FormaRegistration>
              <Label>
                {touched.email && errors.email && (
                <Error>{errors.email}</Error>
              )}
                <StyledTextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  placeholder="E-mail"
                  type={`email`}
                  name={`email`}
                  size="small"
                  autoComplete="email"
                  color="primary"
                  autoFocus
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  InputProps={{ disableUnderline: true }}
                />
                <HiEnvelope
                  style={{ position: 'absolute', left: '15px', bottom: '48px', color: '#E0E0E0', }}
                  size="23px"
                />
              </Label>

              <Label>
                {touched.password && errors.password && (
                <Error>{errors.password}</Error>
              )}
                <StyledTextField
                  type={showPassword ? 'text' : 'password'}
                  name={`password`}
                  placeholder="Password"
                  required
                  fullWidth
                  variant="filled"
                  margin="normal"
                  size="small"
                  autoComplete="current-password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  InputProps={{disableUnderline: true }}
                />
                <Lock
                  sx={{ position: 'absolute', left: '15px', bottom: '48px', color: '#E0E0E0', }}
                />
                <IconButton
                  aria-label="toggle password visibility"
                  sx={{ position: 'absolute', right: '0', color: '#E0E0E0', }}
                  onClick={tooglePassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </Label>
              <Btn
                disabled={!isValid || !dirty}
                type={`submit`}>
                LOG IN
              </Btn>
            
              <Button
                to="/register"
                style={{ textDecoration: "none" }}>
                REGISTER
              </Button>
            </FormaRegistration>
          )}
        </Formik>
      </Container>
    </div>
  )
}

const StyledTextField = styled(TextField)({
  width: '280px',
  margin: '0 0 40px',

  '@media screen and (min-width: 768px)': {
    width: '100%',
  },

  '& .MuiFilledInput-root': {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottom: '1px solid #E0E0E0',
    padding: '0',
  },

  '& .Mui-focused .MuiFilledInput-root': {
    backgroundColor: '#fff',
  },

  '& .MuiFilledInput-input': {
    padding: '8px 40px 8px 54px',
  },
});

export default LoginForm










