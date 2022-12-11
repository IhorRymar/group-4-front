import React , { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { Btn, Button , Container, Logotype, Icon, FormaRegistration, Label,Error} from "./LoginForm.styled";
import {login} from '../../redux/auth/auth-operations'
import { loginSchema } from '../../utils/validationsSchemas'
import sprite from '../../images/svg/sprite.svg'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';



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
                <TextField
                 variant="filled"
              margin="normal"
              required
              fullWidth
              label="E-mail"
                type={`email`}
                  name={`email`}
                  size="small"
              autoComplete="email"
              color="primary"
              autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                />

                {/* <Inputicon width="24" height="24">
                  <use href={`${sprite}#icon-email`}></use>
                </Inputicon> */}
              </Label>

              <Label>
                {touched.password && errors.password && (
                <Error>{errors.password}</Error>
              )}
                <TextField
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                  name={`password`}
                  label="Password"
              required
              fullWidth
              variant="filled"
              margin="normal"
              size="small"
              autoComplete="current-password"
                onChange={handleChange}
                onBlur={handleBlur}
                  value={values.password}
                  InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={tooglePassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
                />

                {/* <Inputicon width="24" height="24">
                  <use href={`${sprite}#icon-password`}></use>
                </Inputicon> */}
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

export default LoginForm










