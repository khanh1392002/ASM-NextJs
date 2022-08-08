import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { getall, updatecate } from '../../../../api/categories'
import adminlayout from '../../../../components/Layout/adminlayout'
import { CateType } from '../../../../type/categories'
import toastr from "toastr"
import 'toastr/build/toastr.min.css'
type ProductProps = {
    category:CateType
}
type Form = {
    name:string
}
const editcategory = ({category}: ProductProps) => {
    const {register,handleSubmit,formState:{errors},reset} = useForm<Form>()
    const [cateedit, setcateedit] = useState<CateType>()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    useEffect(()=>{
        const setitem =()=>{
            setcateedit(category)
            reset(category)
        }
       setitem()
    },[])
    
    const onSubmit : SubmitHandler<Form> = data =>{
        console.log(data)
        updatecate(data).then(()=> router.push("/admin/categories"))
        toastr.success("Bạn đã sửa thành công")
    }
  return (
    <div>
         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <div className="max-w-6xl mx-auto py-5 px-4 sm:px-5 lg:px-7">
                <h1 className='text-center text-[30px] font-bold'>Edit Category</h1>
                <form onSubmit={handleSubmit(onSubmit)} action="" className='w-[350px] m-auto border p-[30px]'>
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block text-sm font-medium text-gray-700">Name Category:</label>
                    <input  type="text" id="first-name" autoComplete='given-name' className="mt-4 p-[10px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                    {...register('name',{required: true})} />
                    {Object.keys(errors).length !== 0 && (
                      <ul>
                        {errors.name?.type == 'required' && (<li className='text-[red] p-[15px]'>Không được để trống</li>)}
                      </ul>
                    )}
              </div>

              <button type="submit" className="mt-[15px] inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
            </form>
            </div>
        </div>
       </div>
    </div>
  )
}


export const getStaticPaths: GetStaticPaths = async () =>{
    const data = await (await fetch(`http://localhost:3001/api/categorys`)).json();
  const paths = data.map((category: CateType) => (
    { params: { id: category._id } }
  ))
  return {
    paths,
    fallback: true // blocking or true
  }
}


export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
    console.log('context', context);
    const category = await (await fetch(`http://localhost:3001/api/categorys/${context.params?.id}`)).json();
    return {
      props: {category},
      revalidate: 5
    }
    
  }
editcategory.Layout = adminlayout
export default editcategory