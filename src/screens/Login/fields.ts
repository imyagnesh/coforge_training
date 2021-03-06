import {createRef} from 'react';

import Input from '@components/Input';
import Checkbox from '@components/ Checkbox';
import Radio from '@components/Radio';

const passwordRef = createRef();

const Required = (value: string, message: string) => (!value ? message : '');

export interface LoginFormValues {
  email?: string;
  password?: string;
  rememberMe: false;
}

export const loginFields = [
  {
    name: 'email',
    component: Input,
    placeholder: 'Username',
    keyboardType: 'email-address',
    returnKeyType: 'next',
    autoComplete: 'email',
    autoCapitalize: 'none',
    textContentType: 'emailAddress',
    onSubmitEditing: () => {
      passwordRef.current?.focus();
    },
    validate: value => {
      return Required(value, 'Password is Required.');
    },
  },
  {
    name: 'password',
    component: Input,
    innerRef: passwordRef,
    placeholder: 'Password',
    autoComplete: 'tel',
    textContentType: 'password',
    returnKeyType: 'go',
    secureTextEntry: true,
    validate: value => {
      return Required(value, 'Password is Required.');
    },
  },
  {
    name: 'rememberMe',
    component: Checkbox,
    data: [
      {
        text: 'Remeber Me',
        value: false,
      },
    ],
  },
];

export const initialValues: LoginFormValues = {
  email: '',
  password: '',
  rememberMe: false,
};
