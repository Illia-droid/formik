import React from "react";
import { Formik, Form } from "formik";
import { SIGN_IN_SCHEMA } from "../../../utils/validatorSchemas";
import InputText from "../../InputText";
import styles from './SignInForm.module.scss'

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_IN_SCHEMA}
    >
      <Form className={styles.formWrapper}>
        <InputText type="email" name="email" id='in' placeholder="Email address" className={styles.inputText}/>
        <InputText type="password" name="password" id='in' placeholder="Password" className={styles.inputText}/>
        <button type="submit" className={styles.btn}>login</button>
      </Form>
    </Formik>
  );
};

export default SignInForm;
