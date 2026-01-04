"use client";
import React from "react";
import InputField from "../../../components/page/InputField";
import { useForm } from "react-hook-form";

type SignUpFormInputs = {
  fullName: string;
  email: string;
  password: string;
  country: string;
  investmentGoals: string;
  riskTolerance: string;
  preferredIndustry: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormInputs>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "",
      investmentGoals: "Growth",
      riskTolerance: "medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSumbit = async (data: SignUpFormInputs) => {
    console.log("data came ");
  };
  return (
    <>
      <h1 className="form-title"> Sign Up </h1>
    </>
  );
};

export default SignUp;
