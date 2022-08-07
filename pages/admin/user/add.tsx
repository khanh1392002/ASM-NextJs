/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import adminlayout from '../../../components/Layout/adminlayout'
import userpertion from '../../../hooks/user'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
type Props = {}
type Form = {
    name:string,
    email:string,
    password:string
}
const adduser = (props: Props) => {
    
    const { register, handleSubmit, formState: { errors } } = useForm<Form>()
    const router = useRouter()
    const {data,error,creatuser,mutate} = userpertion()
    const onSubmit : SubmitHandler<Form> = data =>{
        console.log(data)
        mutate(creatuser(data).then(()=>{
            router.push('/admin/user')
            toastr.success("Bạn đã thêm thành công")
        }))
    }
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-[100%]">
            <div className="max-w-6xl mx-auto py-5 px-4 sm:px-5 lg:px-7">
            <h1 className='text-center text-[30px] font-bold'>Add User</h1>
            <form onSubmit={handleSubmit(onSubmit)} action="" className='w-[350px] m-auto border p-[30px]'>
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block text-sm font-medium text-gray-700">Name</label>
                    <input  type="text" id="first-name" autoComplete='given-name' className="mt-4 p-[10px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                     {...register('name',{required:true, minLength:{value: 3, message:'Phải lớn hơn 3 ký tự'}})} />
                     {Object.keys(errors).length !== 0 && (
                        <ul>
                            {errors.name?.type == 'required' && (<li className='text-[red] p-[15px]'>Không được để trống</li>)}
                            {errors.name?.message && <p className='text-[red] p-[15px]'>{errors.name.message}</p>}
                        </ul>
                     )}
                     <label  className="block text-sm font-medium text-gray-700">Password</label>
                    <input  type="text" id="first-name" autoComplete='given-name' className="mt-4 p-[10px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                     {...register('password',{required:true, minLength:{value: 3, message:'Phải lớn hơn 3 ký tự'}})} />
                     {Object.keys(errors).length !== 0 && (
                        <ul>
                            {errors.name?.type == 'required' && (<li className='text-[red] p-[15px]'>Không được để trống</li>)}
                            {errors.name?.message && <p className='text-[red] p-[15px]'>{errors.name.message}</p>}
                        </ul>
                     )}
                     <label  className="block text-sm font-medium text-gray-700">Email</label>
                    <input  type="email" id="first-name" autoComplete='given-name' className="mt-4 p-[10px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                     {...register('email',{required:true, minLength:{value: 3, message:'Phải lớn hơn 3 ký tự'}})} />
                     {Object.keys(errors).length !== 0 && (
                        <ul>
                            {errors.name?.type == 'required' && (<li className='text-[red] p-[15px]'>Không được để trống</li>)}
                            {errors.name?.message && <p className='text-[red] p-[15px]'>{errors.name.message}</p>}
                        </ul>
                     )}
              </div>

              <button type="submit" className="mt-[15px] inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
            </form>
            </div>
        </div>
       </div>
  )
}
adduser.Layout = adminlayout
export default adduser