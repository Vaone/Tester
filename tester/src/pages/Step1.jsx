import React from "react";
import MyBtn from "../components/UI/button/MyBtn";
import { Input } from "../components/UI/input/MyInput";
import { useForm } from "react-hook-form";

const Step1 = () => {
  const {register, handleSubmit, watch, formState: { errors }} = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    console.log(data);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        ref={register}
        {...register("examp1le")}
        type='text'
        id="firstName"
        label="FirstName"
        name="firstName"
      />
      
      <MyBtn type='submit'>Завершить</MyBtn>
    </form>
  );
};

export default Step1;
