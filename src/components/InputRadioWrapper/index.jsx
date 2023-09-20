import React from "react";
import { Field } from "formik";
import cx from "classnames";

import styles from "./InputRadioWrapper.module.scss";

const InputRadioWrapper = ({ name, value, children, ...options }) => {
  return (
    <Field name={name}>
      {({ field, meta, form }) => {
        const classnames = cx(styles.label, {
          [styles.invalid]: meta.error,
        });
        const isCheked = field.value === value;

        return (
          <label className={classnames}>
            <input {...field} {...options} value={value} checked={isCheked} />
            {children}
          </label>
        );
      }}
    </Field>
  );
};

export default InputRadioWrapper;
