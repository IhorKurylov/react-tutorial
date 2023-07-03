import styles from './LoginPage.module.css';
import { useEffect, useRef, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from "joi";

const LoginPage = () => {

  // const [email, setEmail] = useState('123');//todo 1st case
  // const [password, setPassword] = useState('123');

  // const [formValue, setFormValue] = useState({//todo 2nd case
  //   email: '111',
  //   password: '111'
  // });
  // const handleFormChange = (key, value) =>{
  //   setFormValue((prevState) =>({
  //     ...prevState,
  //     [key]: value
  //   }))
  // }

  // const emailRef = useRef('')
  // const passwordRef = useRef('')

  useEffect(()=>{
    console.log('render');
  })

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
    console.log(errors);
    fetch('http://localhost:8000/api/login', {
      method: 'POST',
      body: JSON.stringify(data)})
      .then((response) => response.json())
      .then((data) => console.log(data))
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
