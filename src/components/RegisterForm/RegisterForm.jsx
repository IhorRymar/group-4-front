import  React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import PasswordStrength from './PasswordStrength'
import { Btn, Button , Container, Logotype, Icon, FormaRegistration,Error,Label} from "../LoginForm/LoginForm.styled";
import { signup } from '../../redux/auth/auth-operations'
import { Formik } from 'formik'
import { singupSchema } from '../../utils'
import sprite from '../../images/svg/sprite.svg'
import Visibility from '@mui/icons-material/Visibility';
import  VisibilityOff  from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, TextField } from '@mui/material';



const RegisterForm = () => {
  const initialValues = {
    name: "",
          password: "",
           confirmPassword: "",
           email: "",
  }
  
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
    const handleSubmit = ({ name, email, password }) => {
    
     dispatch(signup({ name, email, password }));
    };
  //const tooglePassword = () => { setShowPassword(!showPassword) }
  const tooglePassword = useCallback(() => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }, []);
  const handleMouseDownPassword = e => {
    e.preventDefault();
  }
  
  return (
    <Container>
      <Logotype>
        <Icon>
          <use href={`${sprite}#icon-logo`}></use>
        </Icon>
      </Logotype>

      <Formik
        initialValues={initialValues}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={singupSchema}
        validateOnChange={false}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          dirty,
        }) => (
          <FormaRegistration>
            <Label>
               {touched.email && errors.email && (
                 <Error>{errors.email}</Error>
            )}
              <TextField
                type="email"
                name="email"
                variant="filled"
              margin="normal"
              required
              fullWidth
                label="E-mail"
                size="small"
              autoComplete="email"
              color="primary"
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
                type={showPassword ? 'text' : 'password'}
                label="Password"
                name="password"
                fullWidth
              variant="filled"
              margin="normal"
              size="small"
              autoComplete="current-password"
                color="primary"
                required
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

            <Label>
              {touched.confirmPassword && errors.confirmPassword && (
                 <Error>{errors.confirmPassword}</Error>
              )}
              <TextField
                label="Confirm password"
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                fullWidth
              variant="filled"
              margin="normal"
                size="small"
                required
              autoComplete="current-password"
              color="primary"
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.confirmPassword}
                style={{ marginBottom: "5px" }}
              />
              {/* <Inputicon width="24" height="24" >
                <use href={`${sprite}#icon-password`}></use>
              </Inputicon> */}
            </Label>

            <PasswordStrength password={values.password} />
            <label>
              {touched.name && errors.name && (
                <Error >{errors.name}</Error>
              )}
              <TextField
                label="First name"
                type="text"
                name="name"
                required
              fullWidth
              autoComplete="name"
              autoFocus
              variant="filled"
              margin="normal"
              color="primary"
              size="small"
                 onChange={handleChange}
                 onBlur={handleBlur}
                value={values.name}
              />
              {/* <Inputicon width="24" height="24">
                <use href={`${sprite}#icon-account`}></use>
              </Inputicon> */}
            </label>
            <Btn
              disabled={!isValid || !dirty}
              type="submit"
            >
              REGISTER
            </Btn>
            <Button
              to="/login"
              style={{ textDecoration: "none" }}
            >
              LOG IN
            </Button>
          </FormaRegistration>
        )}
      </Formik>
    </Container>
  )
}

export default RegisterForm





























 