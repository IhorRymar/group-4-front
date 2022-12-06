import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Incorrect email')
    .matches(
      /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
      'Incorrect email'
    )
    .required('Mandatory field'),
  password: Yup.string()
    .min(6, 'The password must contain 6 or more characters')
    .max(16, 'The password must contain no more than 16 characters')
    .required('Mandatory field'),
});

export const singupSchema = Yup.object({
  name: Yup.string().typeError('It should be long').required('Mandatory field'),
  password: Yup.string()
    .min(6, 'The password must be 6 characters long')
    .max(16, 'The password must contain no more than 16 characters')
    .typeError('It should be long')
    .required('Mandatory field'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords do not match'
  ),
  email: Yup.string()
    .email('Please enter a valid email')
    .typeError('It should be long')
    .required('Mandatory field'),
});
