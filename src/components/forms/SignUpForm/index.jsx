import React from "react";
import { ErrorMessage, Form, Formik } from "formik";

import { SIGN_UP_SCHEMA } from "../../../utils/validatorSchemas";

import InputText from "../../InputText";
import InputRadioWrapper from "../../InputRadioWrapper";
import styles from "./SignUpForm.module.scss";

const initialValues = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
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
          <InputText name="firstName" id="up" placeholder="First Name" />
          <InputText name="lastName" id="up" placeholder="Last Name" />
        </div>
        <div className={styles.pairWrapper}>
          <InputText name="displayName" id="up" placeholder="Display Name" />
          <InputText type="email" name="email" id="up" placeholder="Email address" />
        </div>
        <div className={styles.pairWrapper}>
          <InputText
            type="password"
            name="password"
            id="up"
            placeholder="Password"
          />
          <InputText
            type="password"
            name="confirmPassword"
            id="up"
            placeholder="Password confirmation"
          />
        </div>

        <InputRadioWrapper name="role" type="radio" value="buyer">
          <div className={styles.describeWrapper}>
            <h3>Join As a Buyer</h3>
            <p>
              I am looking for a Name, Logo or Tagline for my business, brand of
              product.
            </p>
          </div>
        </InputRadioWrapper>

        <ErrorMessage name="role" component="div" className={styles.error}/>
        <InputRadioWrapper name="role" type="radio" value="creative">
          <div className={styles.describeWrapper}>
            <h3>Join As a Creative or Marketplace seller</h3>
            <p>
              I am looking for a Name, Logo or Tagline for my business, brand of
              product.
            </p>
          </div>
        </InputRadioWrapper>

        <button type="submit" className={styles.btn}>
          Creative account
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
