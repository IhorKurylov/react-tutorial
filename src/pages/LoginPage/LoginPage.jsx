import styles from './LoginPage.module.css';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { AuthServices } from '../../services/apiServices.js';

const LoginPage = () => {
  useEffect(() => {
    console.log('render', errors);
  });

  const onSubmit = (data) => {
    console.log(data);
    AuthServices.handleLogin(data)
  };


  const schema = Joi.object({
    email: Joi.string().required().min(10).messages({
      "string.empty": "Field is required",
      "string.min": "MIN",
    }),
    password: Joi.string().required().messages({ "string.empty": "Field is required"}),
  })

  const { handleSubmit, register,  formState: { errors }, } = useForm({
    resolver: joiResolver(schema)
  });

  return (
    <div className={styles.wrapper}>
      <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email:
          <br/>
          <input type="text" {...register("email")}/>
        </label>
        {errors.email && <p>{errors.email.message}</p>}
        <label>
          Password:
          <br/>
          <input type="password" {...register("password")}/>
          {errors.password && <p>{errors.password.message}</p>}
        </label>

        <input type="submit" value="Login"/>
      </form>
    </div>
  );
};

export default LoginPage;
