import styles from './LoginPage.module.css';
import { useEffect, useRef, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { AppRoutes } from '../../Routing/AppRoutes.js';

const LoginPage = () => {
  const navigate = useNavigate();

  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),

  });

  const { handleSubmit, register,  watch, formState: { errors } } = useForm(
    {
      resolver:  async (data, context, options) => {
        // you can debug your validation schema here
        console.log('formData', data)
        console.log('validation result', await joiResolver(schema)(data, context, options))
        return joiResolver(schema)(data, context, options)
      },
    },
  );

  const onSubmit = (data) => {
    fetch('http://localhost:8000/api/login', {
      method: 'POST',
      body: JSON.stringify(data)})
      .then((response) => response.json())
      .then((respData) => {
        console.log(respData)
        navigate(AppRoutes.USERS)
        localStorage.setItem('authUser', JSON.stringify({...data, id: 13413513513532}))
      })
  }



  return(
    <div className={styles.wrapper}>
      <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)} >
        <label>
          Email:
          <br/>
          {/*<input type="text" onChange={(event)=> handleFormChange('email',event.target.value)} value={formValue.email}/>*/}
          <input type="text" {...register('email', { required: true })}/>
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <label>
          Password:
          <br/>
          <input type="password" {...register('password', { required: true })}/>
          {/*<input type="password" onChange={(event)=> handleFormChange('password',event.target.value)} value={formValue.password}/>*/}
          {errors.password && <span>This field is required</span>}

        </label>

        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default LoginPage
