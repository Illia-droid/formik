import * as Yup from "yup";

const EMAIL_SCHEMA = Yup.string()
  .trim()
  .email()
  .required("Не має бути порожнім");

const NAME_SCHEMA = Yup.string("value must be string")
  .trim("Не має містити пробіли")
  .required("Не має бути порожнім")
  .matches(/^[A-Z][a-z]{1,31}$/, "перша буква повинна бути великою");

const PASSWORD_SCHEMA = Yup.string()
  .trim()
  .matches(/.{8,64}/)
  .required("Не має бути порожнім");

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  confirmPassword: Yup.string()
    .trim()
    .required()
    .oneOf([Yup.ref("password")]),
  role: Yup.string().oneOf(["buyer", "creative"]).required(),
});
