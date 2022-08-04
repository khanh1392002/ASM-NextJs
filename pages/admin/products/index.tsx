import Link from 'next/link'
import React from 'react'
import { removepd } from '../../../api/products'
import adminlayout from '../../../components/Layout/adminlayout'
import usercategories from '../../../hooks/categories'
import useProduct from '../../../hooks/product'

type Props = {}

const listproducts = (props: Props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data,error,mutate,removephd } = useProduct()
    const {removehct} = usercategories()
    const remove = (item:any) =>{
      const confirm = window.confirm(`Bạn thực sự muốn xóa: ${item.name}`)
      if(confirm){
        mutate(removephd(`${item._id}`))
      }
    }
    if(!data) return <div>Loading...</div>
    if(error) return <div>Error...</div>
    return (
       <div>
         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                <div className="max-w-6xl mx-auto py-5 px-4 sm:px-5 lg:px-7">
                    <h1 className='text-center text-[30px] font-bold'>List Products </h1>
                    <p className='ml-[50px] rounded-lg p-2 text-center text-white bg-orange-500  w-[100px] mb-5 hover hover:bg-red-500 font-bold'><Link  href={`/admin/products/add`}>ADD</Link></p>
                    <table className='w-[1000px] m-auto mt-[30px]'>
              <tr className='bg-orange-500 h-[40px]'>
                <td className='p-[10px] text-center font-bold text-white'>STT</td>
                <td className='p-[15px] text-center font-bold text-white'>Name</td>
                <td className='p-[15px] text-center font-bold text-white'>Image</td>
                <td className='p-[15px] text-center font-bold text-white'>Price</td>
                <td className='p-[15px] text-center font-bold text-white'>Desccription</td>
                <td className='p-[15px] text-center font-bold text-white'>Edit</td>
                <td className='p-[15px] text-center font-bold text-white'>Remove</td>
              </tr>
              {data.map((item, index) => (
                <tr key={item._id} className="py-[10px] my-[30px] ">
                  <td className='text-center'>{index + 1}</td>
                  <td className='text-center'>{item.name}</td>
                  <td className='text-center'><img width={50} src={item.image} alt="" /></td>
                  <td className='text-center'>{item.price}</td>
                  <td className='text-center'>{item.description}</td>
                  <td className='text-center'>
                    <Link className='' href={`/products/edit/${item._id}`}>
                      <span className="hidden sm:block"> <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /> </svg> Edit </button> </span>
                    </Link>
                  </td>
                  <td className='text-center'>
                    <button onClick={()=>remove(item)} className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </table>
                </div>
            </div>
        </div>
       </div>
    )
}
listproducts.Layout = adminlayout
export default listproducts