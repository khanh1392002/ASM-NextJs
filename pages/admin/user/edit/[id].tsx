/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import adminlayout from '../../../../components/Layout/adminlayout'
import { User } from '../../../../type/user'
import toastr from "toastr"
import 'toastr/build/toastr.min.css'
import { updateuser } from '../../../../api/user'
import userpertion from '../../../../hooks/user'



type edituserProps = {
    user:User
}
type Form = {
    name:string,
    email:string,
    password:string
}
const edituser = ({user}: edituserProps) => {
    const {data,error} = userpertion()
    const router = useRouter()
    const {register,handleSubmit,formState:{errors},reset} = useForm<Form>()
    useEffect(()=>{
        reset(user)
    },[])
    const onSubmit : SubmitHandler<Form> = async data =>{
            console.log(data)
            updateuser(data)
            router.push(`/admin/user`)
            toastr.success("Sửa sản tài khoản thành công")
        
    }
    return (
    <div>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-[100%]">
          <div className="max-w-6xl mx-auto py-5 px-4 sm:px-5 lg:px-7">
            <form onSubmit={handleSubmit(onSubmit)} action="" className='w-[350px] m-auto border p-[30px]'>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Name User:</label>
                <input type="text" id="first-name" autoComplete='given-name' className="mt-4 p-[10px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" {...register('name')} />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Password Products:</label>
                <input type="text" id="first-name" autoComplete='given-name' className="mt-4 p-[10px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" {...register('password')} />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Email Products:</label>
                <input type="text" id="first-name" autoComplete='given-name' className="mt-4 p-[10px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" {...register('email')} />
              </div>

              <button type="submit" className="mt-[15px] inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths : GetStaticPaths = async () =>{
    const data = await (await fetch(`http://localhost:3001/api/user`)).json()
    const paths= data.map((user:User)=>(
        {params: {id : user._id}}
        ))
    return{
        paths,
        fallback:true
    }
}

export const getStaticProps : GetStaticProps<edituserProps> = async (context: GetStaticPropsContext) =>{
    console.log(context)
    const user = await (await fetch(`http://localhost:3001/api/user/${context.params?.id}`)).json()
    return{
        props:{user},
        revalidate:5
    }
}

edituser.Layout = adminlayout
export default edituser