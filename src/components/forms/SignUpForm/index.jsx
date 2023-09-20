import React from "react";
import { ErrorMessage, Form, Formik } from "formik";

import { SIGN_UP_SCHEMA } from "../../../utils/validatorSchemas";

import InputText from "../../InputText";
import InputRadioWrapper from "../../InputRadioWrapper";
import styles from "./SignUpForm.module.scss";

const initialValues = {
  firstName: "Ilya",
  lastName: "Chernyk",
  displayName: "Chernyk",
  email: "ilyachernykan@gmail.com",
  password: "12341234",
  confirmPassword: "12341234",
  role: "",
};

const SignUpForm = () => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_UP_SCHEMA}
    >
      <Form className={styles.formWrapper}>
        <div className={styles.pairWrapper}>
          <InputText name="firstName" placeholder="first Name" className={styles.inputText}/>
          <InputText name="lastName" placeholder="last Name" className={styles.inputText}/>
        </div>
        <div className={styles.pairWrapper}>
          <InputText name="displayName" placeholder="display Name" className={styles.inputText}/>
          <InputText type="email" name="email" placeholder="email" className={styles.inputText}/>
        </div>
        <div className={styles.pairWrapper}>
          <InputText type="password" name="password" placeholder="password" className={styles.inputText}/>
          <InputText
            type="password"
            name="confirmPassword"
            placeholder="confirmPassword"
            className={styles.inputText}
          />
        </div>

        <InputRadioWrapper name="role" type="radio" value="buyer" className={styles.radio}/>
        <h3 className={styles.heading3}>buyer</h3>
        <ErrorMessage name="role" />
        <InputRadioWrapper name="role" type="radio" value="creative" className={styles.radio}/>
        <h3 className={styles.heading3}>creative</h3>

        <button type="submit" className={styles.btn}>
          Creative account
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
