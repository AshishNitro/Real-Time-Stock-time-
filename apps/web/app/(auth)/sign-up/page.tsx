'"use client";';
import React, { use } from "react";
import InputField from "../../../components/page/InputField";
import { Sign } from "crypto";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormInputs>({});

  return (
    <>
      <h1 className="form-title"> Sign Up </h1>
    </>
  );
};

export default SignUp;
