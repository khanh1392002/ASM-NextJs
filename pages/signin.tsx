import { useRouter } from 'next/router'
import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import userpertion from '../hooks/user'
import toastr from "toastr"
import 'toastr/build/toastr.min.css'
import lognin from '../components/Layout/lognin'
type Props = {}
type form = {
    email: string,
    password: string
}
// const onSubmit = () => alert('ok');
const Signin = (props: Props) => {
    const {register, handleSubmit, formState:{errors}} = useForm<form>()
    const {signinuser} = userpertion()
    const router = useRouter();
    const onSubmit: SubmitHandler<form> = data => {
        signinuser(data).then((res) => {
            localStorage.setItem('user', JSON.stringify(res))
            router.push('/')
            toastr.success("Đăng nhập thành công ")
        }
            )
        
    };
    
  return (
    <div className={` h-screen relative `}>
        <div className={`border-slate-900 border border-solid rounded-2xl bg-white absolute mt-[30px] left-1/3 text-center`}>
        <h1 className={`text-6xl py-8 px-8 `}>Login Form</h1>
        <div className={`auth flex justify-center pb-8 px-32`}>
            <div className={` border-slate-900 border py-3  border-solid rounded  bg-fuchsia-600`}>
                <a href="/signin" className={` text-white px-16 no-underline font-bold`} >Login</a>
            </div>
            <div className={` border-slate-900 border  py-3 border-solid rounded `}>
                <a href="/signup"  className={` px-16 no-underline`}>Signup</a>
            </div>
        </div>
        <div className="form">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
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
                            {errors.password?.type == 'required' && (<li className='text-[red]'>Không được trống</li>)}
                            {errors.password?.message && <p className='text-[red]'>{errors.password.message}</p>}
                        </ul>
                    )}
                </div>
                <div className={`text-left pl-32 text-purple-600 my-2`}>
                    <a href="">Forgot Password</a>
                </div>
                <div>
                    <button className={ ` my-4 border-slate-900 border py-4 w-96 border-solid px-16 font-bold rounded text-white bg-fuchsia-600`}>Login</button>
                </div>
            </form>
        </div>
        <div className={`my-8`}>
            <span>Not a member?</span><a href="" className={`text-purple-600`}>Signup Now</a>
        </div>
        </div>
    </div>
  )
}
Signin.Layout = lognin
export default Signin