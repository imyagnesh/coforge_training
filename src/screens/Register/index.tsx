import Form from '@components/Form';
import Typography from '@components/Typography';
import React from 'react';
import {View, Text} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {initialValues, registerFields} from './fields';
import axios from 'axios';
import {authenticateUser} from '@utils/index';
import axiosInstance from '@utils/axiosInstance';

interface Props {}

const Register = ({navigation: {reset}}: Props) => {
  const headerHeight = useHeaderHeight();

  const onSubmit = async (values, actions) => {
    try {
      const {confirmPassword, ...rest} = values;
      const res = await axiosInstance.post('register', rest);
      await authenticateUser(res.data);
      actions.resetForm();
      reset({
        index: 0,
        routes: [{name: 'Main'}],
      });
    } catch (error) {
      actions.setErrors({
        serverError: error?.response?.data || error.message,
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
