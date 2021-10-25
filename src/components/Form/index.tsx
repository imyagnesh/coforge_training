import Button, {ButtonProps} from '@components/Button';
import {Field, Formik, FormikProps} from 'formik';
import React from 'react';
import {Keyboard} from 'react-native';

interface Props {
  btnProps: ButtonProps;
}

const Form = ({fields, btnProps, ...rest}: Props) => {
  return (
    <Formik {...rest}>
      {({handleSubmit}) => {
        const submitForm = () => {
          handleSubmit();
          Keyboard.dismiss();
        };
        return (
          <>
            {fields.map(x => {
              const fieldProps = x;
              if (fieldProps.returnKeyType === 'go') {
                fieldProps.onSubmitEditing = submitForm;
              }
              return <Field key={x.name} {...fieldProps} />;
            })}
            <Button onPress={submitForm} {...btnProps} />
          </>
        );
      }}
    </Formik>
  );
};

export default Form;
