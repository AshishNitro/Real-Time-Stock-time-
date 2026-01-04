"use client";
import React from "react";
import InputField from "../../../components/page/InputField";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({ mode: "onBlur" });

  const onSumbit = async (data: SignUpFormData) => {};

  return (
    <>
      <h1 className="form-title">SignUp Here</h1>
    </>
  );
};
