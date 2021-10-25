import {createRef} from 'react';

import Input from '@components/Input';
import Checkbox from '@components/ Checkbox';
import Radio from '@components/Radio';

const wait = time => new Promise(resolve => setTimeout(resolve, time));

const lastNameRef = createRef();
const emailRef = createRef();
const ageRef = createRef();
const passwordRef = createRef();
const confirmPasswordRef = createRef();

const Required = (value: string, message: string) => (!value ? message : '');

export interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  firstname: string;
  lastname: string;
  age: number;
}

export const registerFields = [
  {
    name: 'firstname',
    component: Input,
    placeholder: 'First Name',
    returnKeyType: 'next',
    autoComplete: 'name-given',
    textContentType: 'givenName',
    onSubmitEditing: () => {
      lastNameRef.current?.focus();
    },
    validate: value => {
      return Required(value, 'First Name is Required.');
    },
  },
  {
    name: 'lastname',
    innerRef: lastNameRef,
    component: Input,
    placeholder: 'Last Name',
    returnKeyType: 'next',
    autoComplete: 'name-family',
    textContentType: 'familyName',
    onSubmitEditing: () => {
      emailRef.current?.focus();
    },
    validate: value => {
      return Required(value, 'Last Name is Required.');
    },
  },
  {
    name: 'email',
    innerRef: emailRef,
    component: Input,
    autoCapitalize: 'none',
    placeholder: 'Email',
    keyboardType: 'email-address',
    returnKeyType: 'next',
    autoComplete: 'email',
    textContentType: 'emailAddress',
    onSubmitEditing: () => {
      ageRef.current?.focus();
    },
    validate: value => {
      return Required(value, 'Email is Required.');
    },
  },
  {
    name: 'age',
    innerRef: ageRef,
    component: Input,
    placeholder: 'Age',
    keyboardType: 'number-pad',
    returnKeyType: 'next',
    maxLength: 4,
    validate: value => {
      if (value < 18) {
        return 'Min age should be 18';
      }
      return Required(value, 'Age is Required.');
    },
    onSubmitEditing: () => {
      passwordRef.current?.focus();
    },
  },
  // {
  //   name: 'gender',
  //   component: Radio,
  //   data: [
  //     {
  //       text: 'Male',
  //       value: 'male',
  //       checked: false,
  //     },
  //     {
  //       text: 'Female',
  //       value: 'female',
  //       checked: false,
  //     },
  //   ],
  //   validate: value => {
  //     return Required(value, 'Gender is Required.');
  //   },
  // },
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
      return Required(value, 'Confirm Password is Required.');
    },
  },
];

export const initialValues: RegisterFormValues = {
  email: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
  age: 0,
};
