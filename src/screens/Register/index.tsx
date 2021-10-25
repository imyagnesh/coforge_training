import Form from '@components/Form';
import Typography from '@components/Typography';
import React from 'react';
import {View, Text} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {initialValues, registerFields} from './fields';

interface Props {}

const Register = (props: Props) => {
  const headerHeight = useHeaderHeight();

  return (
    <View style={{flex: 1, marginHorizontal: 10, marginTop: headerHeight}}>
      <Typography variant="h2">Register</Typography>
      <Form
        initialValues={initialValues}
        fields={registerFields}
        btnProps={{
          title: 'Register',
        }}
        onSubmit={values => {
          console.warn(values);
        }}
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
