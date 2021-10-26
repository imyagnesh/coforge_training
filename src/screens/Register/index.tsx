import Form from '@components/Form';
import Typography from '@components/Typography';
import React from 'react';
import {View, Text} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {initialValues, registerFields} from './fields';
import axios from 'axios';

interface Props {}

const wait = time => new Promise(resolve => setTimeout(resolve, time));

const Register = (props: Props) => {
  const headerHeight = useHeaderHeight();

  const onSubmit = async (values, actions) => {
    try {
      const {confirmPassword, ...rest} = values;
      const res = await axios.post('http://localhost:3000/register', rest);
      await wait(3000);
      console.warn('res', res.data);
      actions.resetForm();
    } catch (error) {
      actions.setErrors({
        serverError: error?.response?.data,
      });
    }
  };

  return (
    <View style={{flex: 1, marginHorizontal: 10, marginTop: headerHeight}}>
      <Typography variant="h2">Register</Typography>
      <Form
        initialValues={initialValues}
        fields={registerFields}
        btnProps={{
          title: 'Register',
        }}
        onSubmit={onSubmit}
        validate={values => {
          const errors = {};
          if (values.password !== values.confirmPassword) {
            errors.confirmPassword =
              'Confirm Password should match with password';
          }
          return errors;
        }}
      />
    </View>
  );
};

export default Register;
