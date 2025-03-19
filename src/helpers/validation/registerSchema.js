import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Min number of characters is 6')
    .max(15, 'Max number of characters is 35')
    .required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Min number of characters is 8')
    .required('Password is required'),
});
