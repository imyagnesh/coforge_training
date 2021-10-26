import Button, {ButtonProps} from '@components/Button';
import Typography from '@components/Typography';
import Toast from 'react-native-toast-message';
import {Field, Formik, FormikProps} from 'formik';
import React, {useRef} from 'react';
import {Keyboard} from 'react-native';

interface Props {
  btnProps: ButtonProps;
}

const Form = ({fields, btnProps, ...rest}: Props) => {
  const toastRef = useRef(null);
  return (
    <Formik {...rest}>
      {({handleSubmit, isSubmitting, errors}) => {
        const submitForm = () => {
          handleSubmit();
          Keyboard.dismiss();
        };
        // if (!!errors.serverError) {
        //   toastRef?.current?.show({
        //     type: 'error',
        //     text1: errors.serverError,
        //   });
        // } else {
        //   toastRef?.current?.hide();
        // }

        return (
          <>
            {/* <Toast ref={toastRef} /> */}
            {!!errors.serverError && (
              <Typography variant="error">{errors.serverError}</Typography>
            )}
            {fields.map(x => {
              const fieldProps = x;
              if (fieldProps.returnKeyType === 'go') {
                fieldProps.onSubmitEditing = submitForm;
              }
              return <Field key={x.name} {...fieldProps} />;
            })}
            <Button disable={isSubmitting} onPress={submitForm} {...btnProps} />
          </>
        );
      }}
    </Formik>
  );
};

export default Form;
