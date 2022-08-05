import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import adminlayout from '../../../components/Layout/adminlayout'
import usercategories from '../../../hooks/categories'
import useProduct from '../../../hooks/product'
import { CateType } from '../../../type/categories'
import toastr from "toastr"
import 'toastr/build/toastr.min.css'
type Props = {}
type Form = {
  name: string,
  image: string,
  price: number,
  description: string,
  category: string
}
const addproduct = (props: Props) => {
  const router = useRouter()
  const [category, setcategory] = useState<CateType[]>([])
  const { data, error, mutate } = usercategories()
  const { creat } = useProduct()
  // if (!data) return <div>Loading...</div>
  // if (error) return <div>Errors</div>

  const { register, handleSubmit, formState: { errors } } = useForm<Form>()
  const onSubmit: SubmitHandler<Form> = data => {
    console.log(data)
    console.log(data)
    console.log(data.image[0])
    const file = data.image[0]
    const formData = new FormData()

    formData.append('file', file)
    formData.append("upload_preset", "mi59v8ju")

    axios({
      url: "https://api.cloudinary.com/v1_1/dkrifqhuk/image/upload",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-formendcoded",
      }, data: formData,
    }).then((res) => {
      data.image = res.data.url
      console.log(data.image)
      mutate(creat(data).then(() => router.push('/admin/products')))
      toastr.success("Bạn đã thêm thành công")
    })
  }
  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-[100%]">
          <div className="max-w-6xl mx-auto py-5 px-4 sm:px-5 lg:px-7">
            <form onSubmit={handleSubmit(onSubmit)} action="" className='w-[350px] m-auto border p-[30px]'>
              <select id="" {...register('category', { required: true })}>
                {data?.map((item: CateType) => {
                  return <option value={`${item._id}`}>
                    {item.name}
                  </option>
                })}
              </select>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Name Products:</label>
                <input type="text" id="first-name" autoComplete='given-name' className="mt-4 p-[10px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                {...register('name',{required: true, minLength:{value: 3, message:'Phải lớn hơn 3 ký tự'}})} />
                {Object.keys(errors).length !== 0 && (
                  <ul>
                    {errors.name?.type == 'required' && (<li className='text-[red] p-[15px]'>Không được để trống</li>)}
                    {errors.name?.message && <p className='text-[red] p-[15px]'>Phải lớn hơn 3 ký tự</p>}
                  </ul>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Image Products:</label>
                <input type="file" id="first-name" autoComplete='given-name' className="mt-4 p-[10px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                {...register('image',{required: true, minLength:{value: 3, message:'Phải lớn hơn 3 ký tự'}})} />
                {Object.keys(errors).length !== 0 && (
                  <ul>
                  {errors.image?.type == 'required' && (<li className='text-[red] p-[15px]'>Không được để trống</li>)}
                  {errors.image?.message && <p className='text-[red] p-[15px]'>Phải lớn hơn 3 ký tự</p>}
                </ul>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Price Products:</label>
                <input type="text" id="first-name" autoComplete='given-name' className="mt-4 p-[10px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                {...register('price',{required: true, minLength:{value: 3, message:'Phải lớn hơn 3 ký tự'}})} />
                {Object.keys(errors).length !== 0 && (
                  <ul>
                  {errors.price?.type == 'required' && (<li className='text-[red] p-[15px]'>Không được để trống</li>)}
                  {errors.price?.message && <p className='text-[red] p-[15px]'>Phải lớn hơn 3 ký tự</p>}
                </ul>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Description Products:</label>
                <input type="text" id="first-name" autoComplete='given-name' className="mt-4 p-[10px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                {...register('description',{required: true, minLength:{value: 3, message:'Phải lớn hơn 3 ký tự'}})} />
                {Object.keys(errors).length !== 0 && (
                  <ul>
                  {errors.description?.type == 'required' && (<li className='text-[red] p-[15px]'>Không được để trống</li>)}
                  {errors.description?.message && <p className='text-[red] p-[15px]'>Phải lớn hơn 3 ký tự</p>}
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
addproduct.Layout = adminlayout
export default addproduct