import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
export const login=()=> {
        const schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().min(4).max(20).required(),//4字以上20以下
        });
       //登録　
        const{ register, handleSubmit ,formState: {errors} }= useForm({
            resolver: yupResolver(schema),
        });

        const onSubmit=(data)=>{
            console.log(data);
        }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >

        <p><input type="text" placeholder="Email..." {...register("email") }/></p>
        <p style={{ color: 'red' }}>{errors.email?.message}</p>
        <p><input type="password"
                placeholder="Password"
                {...register("password") }/></p>
        <p style={{ color: 'red' }}>{errors.password?.message}</p>
        <p><input type="confirmPassword"
                placeholder="Confirm Password..."
                {...register("confirmPassword") }/></p>
        <p style={{ color: 'red' }}>{errors.confirmPassword?.message}</p>
        <p><input type="submit" className="btn btn-outline-success" /></p>
        </form>
    </div>
  )
}

export default login