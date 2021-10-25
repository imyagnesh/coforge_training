import {createRef} from 'react';

import Input from '@components/Input';
import Checkbox from '@components/ Checkbox';
import Radio from '@components/Radio';

const emailRef = createRef();
const passwordRef = createRef();
const confirmPasswordRef = createRef();

const Required = (value: string, message: string) => (!value ? message : '');

export interface RegisterFormValues {
  name: string;
  gender: 'male' | 'female';
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
}

export const registerFields = [
  {
    name: 'name',
    component: Input,
    placeholder: 'Name',
    returnKeyType: 'next',
    autoComplete: 'name',
    textContentType: 'name',
    onSubmitEditing: () => {
      emailRef.current?.focus();
    },
    validate: value => {
      return Required(value, 'Password is Required.');
    },
  },
  {
    name: 'email',
    innerRef: emailRef,
    component: Input,
    placeholder: 'Email',
    keyboardType: 'email-address',
    returnKeyType: 'next',
    autoComplete: 'email',
    textContentType: 'emailAddress',
    validate: value => {
      return Required(value, 'Password is Required.');
    },
  },
  {
    name: 'age',
    innerRef: emailRef,
    component: Input,
    placeholder: 'Age',
    keyboardType: 'number-pad',
    returnKeyType: 'next',
    maxLength: 4,
    validate: value => {
      if (value < 18) {
        return 'Min age should be 18';
      }
      return Required(value, 'Password is Required.');
    },
  },
  {
    name: 'gender',
    component: Radio,
    data: [
      {
        text: 'Male',
        value: 'male',
        checked: false,
      },
      {
        text: 'Female',
        value: 'female',
        checked: false,
      },
    ],
    validate: value => {
      return Required(value, 'Gender is Required.');
    },
  },
  {
    name: 'password',
    component: Input,
    innerRef: passwordRef,
    placeholder: 'Password',
    autoComplete: 'password-new',
    textContentType: 'newPassword',
    returnKeyType: 'next',
    secureTextEntry: true,
    validate: value => {
      return Required(value, 'Password is Required.');
    },
    onSubmitEditing: () => {
      confirmPasswordRef.current?.focus();
    },
  },
  {
    name: 'confirmPassword',
    component: Input,
    innerRef: confirmPasswordRef,
    placeholder: 'Confirm Password',
    autoComplete: 'password-new',
    textContentType: 'newPassword',
    returnKeyType: 'go',
    secureTextEntry: true,
    validate: value => {
      return Required(value, 'Password is Required.');
    },
  },
];

export const initialValues: RegisterFormValues = {
  name: '',
  gender: 'male',
  email: '',
  password: '',
  confirmPassword: '',
  age: 0,
};
