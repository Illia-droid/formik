import React from "react";
import SignUpForm from "../components/forms/SignUpForm";

const SignUpPage = () => {
  return (
    <section>
      <h1>Create an account</h1>
      <p>We always keep your name and email address private.</p>
      <SignUpForm />
    </section>
  );
};

export default SignUpPage;
