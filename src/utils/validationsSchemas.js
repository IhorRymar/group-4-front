import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must e at least 6 characters')
    .max(16, 'The password must contain no more than 16 characters')
    .required('Password is required'),
});

export const singupSchema = Yup.object({
  name: Yup.string()
    .typeError('It should be long')
    .min(2, 'Name should be of minimum 2 character length')
    .max(12, 'Name should be of maximum 12 characters length')
    .required('Name is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/,
      'password contains uppercase, lowercase latin letters,number'
    )
    .min(6, 'The password must be 6 characters long')
    .max(16, 'The password must contain no more than 16 characters')
    .typeError('It should be long')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm is required')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
  email: Yup.string()
    .email('Please enter a valid email')
    .matches(
      /(^[a-zA-Z0-9._-]{2,63}@[a-zA-Z0-9.]+\.[a-zA-Z0-9.]{2,}$)/,
      'Incorrect email'
    )
    .typeError('It should be long')
    .required('Email is required'),
});
