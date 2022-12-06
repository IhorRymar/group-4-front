import { React } from 'react'
import { useDispatch } from 'react-redux'
import PasswordStrength from './PasswordStrength'
import { Btn, Button , Container, Logotype, Icon, FormaRegistration, Label, Inputicon,Error, Input} from "../LoginForm/LoginForm.styled";
import { signup } from '../../redux/auth/auth-operations'
import { Formik } from 'formik'
import { singupSchema } from '../../utils'
import sprite from '../../images/svg/sprite.svg'

const RegisterForm = () => {
  const initialValues = {
    name: "",
          password: "",
           confirmPassword: "",
           email: "",
  }
  //const [password, setPassword] = useState('')
  const dispatch = useDispatch();
    const handleSubmit = ({ name, email, password }) => {
    
     dispatch(signup({ name, email, password }));
    };
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
              <Input
                placeholder="E-mail"
                type="email"
                name="email"
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
                type="password"
                name="password"
                error={errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              ></Input>
              <Inputicon width="24" height="24">
                <use href={`${sprite}#icon-password`}></use>
              </Inputicon>
            </Label>

            <Label>
              {touched.confirmPassword && errors.confirmPassword && (
                 <Error>{errors.confirmPassword}</Error>
              )}
              <Input
                placeholder="Confirm password"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                style={{ marginBottom: "5px" }}
              ></Input>
              <Inputicon width="24" height="24" >
                <use href={`${sprite}#icon-password`}></use>
              </Inputicon>
            </Label>

            <PasswordStrength password={values.password} />
            <Label>
              {touched.name && errors.name && (
                <Error >{errors.name}</Error>
              )}
              <Input
                placeholder="First name"
                type="text"
                 name="name"
                 onChange={handleChange}
                 onBlur={handleBlur}
                value={values.name}
              ></Input>
              <Inputicon width="24" height="24">
                <use href={`${sprite}#icon-account`}></use>
              </Inputicon>
            </Label>
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





























 