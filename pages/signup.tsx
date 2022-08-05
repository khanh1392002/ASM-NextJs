import { useRouter } from 'next/router'
import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import { mutate } from 'swr'
import { signup } from '../api/user'
import toastr from "toastr"
import 'toastr/build/toastr.min.css'
type Props = {}
type form = {
    name: string,
    email: string,
    password: string
}
// const onSubmit = () => alert('ok');
const Signup = (props: Props) => {
    const {register, handleSubmit, formState:{errors}} = useForm<form>();
    const router = useRouter();
    const onSubmit : SubmitHandler<form> = data => {
        mutate(signup(data))
        router.push('/signin')
        toastr.success("Đăng ký thành công")
    }

  return (
    <div className={`h-screen relative`}>
        <div className={`border border-solid border-slate-900 rounded-2xl bg-white absolute left-1/3 top-36 text-center`}>
        <h1 className={`text-6xl py-8 px-8 `}>Login Form</h1>
        <div className={`auth flex justify-center pb-8 px-32`}>
            <div className={` border-slate-900 border py-3  border-solid rounded `}>
                <a href="/signin" className={`  px-16 no-underline `} >Login</a>
            </div>
            <div className={` border-slate-900 border  py-3 border-solid rounded  bg-fuchsia-600`}>
                <a href="/signup"  className={` px-16 no-underline text-white font-bold` }>Signup</a>
            </div>
        </div>
        <div className="form">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div >
                    <input className={`p-4  my-4 border-slate-900 border w-96 border-solid rounded`} type="text" placeholder='Name'
                      {...register('name',{required:true, minLength:{value: 6, message: "Phải lớn hơn 6 ký tự"}})}/>
                      {Object.keys(errors).length !== 0 && (
                          <ul>
                              {errors.name?.type == 'required' && (<li className='text-[red]'>Không được để trống</li>)}
                              {errors.name?.message && <p className='text-[red]'>{errors.name.message}</p>}
                          </ul>
                      )}
                </div>
                <div >
                    <input className={`p-4  my-4 border-slate-900 border w-96 border-solid rounded`} type="email" placeholder='Email Address' 
                     {...register('email',{required:true, minLength:{value: 6, message: "Phải lớn hơn 6 ký tự"}})}/>
                     {Object.keys(errors).length !== 0 && (
                         <ul>
                             {errors.email?.type == 'required' && (<li className='text-[red]'>Không được để trống</li>)}
                             {errors.email?.message && <p className='text-[red]'>{errors.email.message}</p>}
                         </ul>
                     )}
                </div>
                <div >
                    <input className={`p-4  my-4 border-slate-900 border w-96 border-solid rounded`} type="password" placeholder='Password'  
                        {...register('password',{required:true, minLength:{value: 8, message: "Phải lớn hơn 8 ký tự"}})}/>
                        {Object.keys(errors).length !== 0 && (
                            <ul>
                                {errors.password?.type == 'required' && (<li className='text-[red]'>Không được để trống</li>)}
                                {errors.password?.message && <p className='text-[red]'>{errors.password.message}</p>}
                            </ul>
                        )}
                </div>
                <div className={`text-left pl-32 text-purple-600 my-2`}>
                    <a href="">Forgot Password</a>
                </div>
                <div>
                    <button className={ ` my-4 border-slate-900 border py-4 w-96 border-solid px-16 font-bold rounded text-white bg-fuchsia-600`}>Signup</button>
                </div>
            </form>
        </div>
        <div className={`my-8`}>
            <a href="" className={`text-purple-600`}>Signin Now</a>
        </div>
        </div>
    </div>
  )
}

export default Signup