import React from "react";
import { useForm } from "react-hook-form";
// import classes from "./MuiForm.module.css";
import { Button, TextField } from "@mui/material";
import Schema from "./form-helper";

const ValidationWithYup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form action="">
        <div>
          fname :
          <input type="text" {...register("fname", { required: true })} />
          {errors.fname && <span> this field is required</span>}
        </div>

        <div>
          email : <input type="email" {...register("email")} />
        </div>
        <div>
          email : <input type="password" {...register("password")} />
        </div>
        <div>
          email : <input type="password" {...register("password")} />
        </div>
        <div>
          mobile : <input type="number" {...register("mobile")} />
        </div>
      </form>
    </div>
  );
};

export default ValidationWithYup;
