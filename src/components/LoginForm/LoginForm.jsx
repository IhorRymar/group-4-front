import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { Btn, Button , Container, Logotype, Icon, FormaRegistration, Label, Inputicon,Error, Input} from "./LoginForm.styled";
import {login} from '../../redux/auth/auth-operations'
import { loginSchema } from '../../utils/validationsSchemas'
import sprite from '../../images/svg/sprite.svg'


const LoginForm = () => {

  const dispatch = useDispatch();
   const handleSubmit = ({ email, password }) => {
     dispatch(login({ email, password }));
   };
  
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
                <Input
                  placeholder="E-mail"
                type={`email`}
                name={`email`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                ></Input>

                <Inputicon width="24" height="24">
                  <use href={`${sprite}#icon-email`}></use>
                </Inputicon>
              </Label>

              <Label>
                {touched.password && errors.password && (
                <Error>{errors.password}</Error>
              )}
                <Input
                  placeholder="Password"
                type={`password`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                ></Input>

                <Inputicon width="24" height="24">
                  <use href={`${sprite}#icon-password`}></use>
                </Inputicon>
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















