import * as Yup from "yup";

const EMAIL_SCHEMA = Yup.string()
  .trim("")
  .email("Please enter a valid email address")
  .required("Email address is required");

const NAME_SCHEMA = Yup.string()
  .trim("")
  .min(2, "Name must be at least 2 characters")
  .max(50, "Name must be at most 50 characters")
  .matches(/^[A-Za-z\s]/, "Name can only contain letters ")
  .required("Name is required");

const PASSWORD_SCHEMA = Yup.string()
  .test(
    "no-spaces",
    "The password must not contain spaces",
    (value) => !/\s/.test(value)
  )
  .min(8, "Password must be at least 8 characters")
  .max(50, "Password must be at most 50 characters")
  .matches(/^[a-zA-Z0-9]/, "Password can only contain letters and numbers")
  .required("Password is required");

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
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
  role: Yup.string().oneOf(["buyer", "creative"]).required(),
});
