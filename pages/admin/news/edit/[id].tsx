import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { update } from '../../../../api/news'
import adminlayout from '../../../../components/Layout/adminlayout'
import { TypeNews } from '../../../../type/news'
import toastr from "toastr"
import 'toastr/build/toastr.min.css'



type NewsProps = {
    news:TypeNews
}
type Form = {
    title:string,
    image:string,
    description:string
}
const editNews = ({news}: NewsProps) => {
    const router = useRouter()
    const {register,handleSubmit,formState:{errors},reset} = useForm<Form>()
    console.log(news)
    useEffect(()=>{
        reset(news)
    },[])
    let imageUpdate = ""
    const onSubmit : SubmitHandler<Form> = async data =>{
        try {
            console.log(data.image[0])
            if(data.image[0] != 'h'){
              const file = data.image[0]
              const formData = new FormData()
        
              formData.append("file", file)
              formData.append("upload_preset", "mi59v8ju")
        
              const {data : newimage} = await axios({
                url: "https://api.cloudinary.com/v1_1/dkrifqhuk/image/upload",
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-formendcoded",
                }, data: formData,
              })
              imageUpdate = newimage.url
              data.image = imageUpdate
              console.log(data.image)
            }
            console.log(data)
            update(data)
            router.push(`/admin/news`)
            toastr.success("Sửa sản phẩm thành công")
            
           } catch (error) {
             
           }
        
    }
    return (
    <div>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-[100%]">
          <div className="max-w-6xl mx-auto py-5 px-4 sm:px-5 lg:px-7">
            <form onSubmit={handleSubmit(onSubmit)} action="" className='w-[350px] m-auto border p-[30px]'>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Name Products:</label>
                <input type="text" id="first-name" autoComplete='given-name' className="mt-4 p-[10px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                 {...register('title', {required: true, minLength:{value: 3, message:'Phải lớn hơn 3 ký tự'}})} />
                 {Object.keys(errors).length !== 0 && (
                  <ul>
                    {errors.title?.type == 'required' && (<li className='text-[red] p-[15px]'>Không được bỏ trống</li>)}
                    {errors.title?.message && <p className='text-[red] p-[15px]'>Phải lớn hơn 3 ký tự</p>}
                  </ul>
                 )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Image View:</label>
                <img width={100} src={`${news.image}`} alt="" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Image Products:</label>
                <input type="file" id="first-name" autoComplete='given-name' className="mt-4 p-[10px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                {...register('image', {required: true,})} />
                {Object.keys(errors).length !== 0 && (
                  <ul>
                    {errors.image?.type == 'required' && (<li className='text-[red] p-[15px]'>Không được bỏ trống</li>)}
                  </ul>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Description Products:</label>
                <input type="text" id="first-name" autoComplete='given-name' className="mt-4 p-[10px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                {...register('description', {required: true,})} />
                {Object.keys(errors).length !== 0 && (
                  <ul>
                    {errors.description?.type == 'required' && (<li className='text-[red] p-[15px]'>Không được bỏ trống</li>)}
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

export const getStaticPaths : GetStaticPaths = async () =>{
    const data = await (await fetch(`http://localhost:3001/api/news`)).json()
    const paths= data.map((news:TypeNews)=>(
        {params: {id : news._id}}
        ))
    return{
        paths,
        fallback:true
    }
}

export const getStaticProps : GetStaticProps<NewsProps> = async (context: GetStaticPropsContext) =>{
    console.log(context)
    const news = await (await fetch(`http://localhost:3001/api/news/${context.params?.id}`)).json()
    return{
        props:{news},
        revalidate:5
    }
}

editNews.Layout = adminlayout
export default editNews