import Link from 'next/link'
import React, { useRef } from 'react'
import { removect } from '../../../api/categories'
import adminlayout from '../../../components/Layout/adminlayout'
import usercategories from '../../../hooks/categories'
import useProduct from '../../../hooks/product'
import { CateType } from '../../../type/categories'

type Props = {}

const Categories = (props: Props) => {
  const { data, error, mutate } = usercategories()
  const toartSuccess = useRef<HTMLDivElement>(null)
  const {removehct} = usercategories()
  const remove = (cate: CateType) => {
    const confirm = window.confirm(`Bạn có muốn xóa: ${cate.name}`)
    // if(confirm){

    // }
    try {
      toartSuccess.current.classList.toggle("hidden")
      toartSuccess.current.classList.toggle("block")
      removehct(`${cate._id}`)
    } catch (error) {

    }

  }
  if (!data) return <div>Loading...</div>
  if (error) return <div>Errors</div>

  return (
    <div>
      <div ref={toartSuccess} id="toast-success" className="absolute top-5 right-5 flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 hidden" role="alert">
        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">Xóa sản phẩm thành công</div>
        <button onClick={()=>{
                toartSuccess.current.classList.toggle("hidden")
                toartSuccess.current.classList.toggle("block")
        }} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
          <span className="sr-only">Close</span>
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </div>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-[100%]">
          <div className="max-w-6xl mx-auto py-5 px-4 sm:px-5 lg:px-7">
            <div>
              <h1 className='text-center text-[30px] font-bold'>Categories</h1>
              <p className='rounded-lg p-2 text-center text-white bg-red-600  w-[100px] mb-5 hover hover:bg-orange-500 '><Link href={`categories/add`}>Add</Link></p>
              <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
                <tr className='bg-orange-500 h-[40px]'>
                  <td className='p-[5px] text-center font-bold text-white'>STT</td>
                  <td className='p-[5px] text-center font-bold text-white'>Name</td>
                  <td className='p-[5px] text-center font-bold text-white'>Edit</td>
                  <td className='p-[5px] text-center font-bold text-white'>Remove</td>
                </tr>
                {data.map((item:CateType, index:number) => (
                  <tr key={item._id}>
                    <td className='text-center'>{index + 1}</td>
                    <td className='text-center'>{item.name}</td>
                    <td className='text-center'>
                      <Link className='' href={`categories/edit/${item._id}`}>
                        <span className="hidden sm:block"> <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /> </svg> Edit </button> </span>
                      </Link>
                    </td>
                    <td className='text-center'>
                      <button onClick={() => remove(item)} className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
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
    </div>


  )
}
Categories.Layout = adminlayout
export default Categories