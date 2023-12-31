import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form=()=> {

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),//4字以上20以下
        confirmPassword: yup
                        .string()
                        .oneOf([yup.ref("password"), null])
                        .required(),
    });
   //登録　
    const{ register, handleSubmit ,formState: {errors} }= useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit=(data)=>{
        console.log(data);
    }

    //{
       // fullName: "Pedro";
       // email: "pedro@ ";
    //}
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
        <p><input type="text" placeholder="Full name.." {...register("fullName") }/></p>
        <p style={{ color: 'red' }}>{errors.fullName?.message}</p>
        <p><input type="text" placeholder="Email..." {...register("email") }/></p>
        <p style={{ color: 'red' }}>{errors.email?.message}</p>
        <p><input type="number" placeholder="Age..." {...register("age") }/></p>
        <p style={{ color: 'red' }}>{errors.age?.message}</p>
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
  )
}

export default Form
