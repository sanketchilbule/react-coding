import React from "react";
import { useForm } from "react-hook-form";
const ReactHookFormLib = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Submit = (data) => console.log(data);
  return (
    <div className="container d-flex flex-column border   ps-2">
      <div className="col-6 w-100" style={{ height: "20rem" }}>
        <form onSubmit={handleSubmit(Submit)}>
          <div>
            fname :
            <input type="text" {...register("fname", { required: true })} />
            {errors.fname && <span> this field is required</span>}
          </div>
          <div>
            lname : <input type="text" {...register("lname")} />
          </div>
          <div>
            email : <input type="text" {...register("email")} />
          </div>
          <div>
            mobile : <input type="text" {...register("mobile")} />
          </div>
          language :
          <select name="" id="" {...register("language")}>
            <option value="java">Java</option>
            <option value="js">Javascript</option>
            <option value="c"> C language</option>
            <option value="c++"> C++ language</option>
          </select>
          <div>
          <label>Gender</label>
            <input
              type="radio"
              name=""
              id=""
              value="male"
              {...register("gender")}
            />
            <label htmlFor="male"> male</label>
            <input
              type="radio"
              name=""
              id=""
              value="female"
              {...register("gender")}
            />
            <label htmlFor="female"> female</label>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default ReactHookFormLib;
