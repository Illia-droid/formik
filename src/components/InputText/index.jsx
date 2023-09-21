import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";
import cx from "classnames";
import styles from "./InputText.module.scss";

const InputText = ({ name, id, ...options }) => {
  return (
    <label className={styles.label}>
      <Field name={name}>
        {({ field, meta }) => {
          let inputClass;
          if (id === 'in') {
            inputClass=styles.inputForSignIn
          } else if(id === 'up'){
            inputClass=styles.inputForSignUp
          }
          const classNames = cx(inputClass,styles.input, {
            [styles.invalid]: meta.touched && meta.error,
          });
          return <input {...options} {...field} className={classNames} />;
        }}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

InputText.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  titleLabel: PropTypes.string,
};

export default InputText;
