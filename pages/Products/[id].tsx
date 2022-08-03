import React, { useState } from 'react'

type Props = {}

const Detailproduct = (props: Props) => {
    const [count,setcount] = useState(1)
  return (
    <div>
       <div className='flex mt-[100px] max-w-6xl m-auto'>
            <div>
                <img width="570" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1658498342/asm/14_jw6g5f.jpg" alt="" />
            </div>

            <div className='ml-[30px] w-[45%]'>
                <h1 className="mt-[45px] font-bold text-[27px] font-mono">Pilot jacket simple</h1>
                <p className="text-pink-500 mt-[35px] text-[25px]">550,000 đ</p>
                <p className="mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iure. Quis adipisci velit vero rerum distinctio sapiente provident facere molestiae aliquam atque quisquam sunt, sint dicta hic, sed porro ab!</p>
                <div className='mt-[50px]'>
                    <button onClick={()=>{setcount(count-1)}} className="py-[5px] w-[25px] border bg-gray-200">-</button><input type="text" min={0} value={`${count}`} className='w-[40px] border text-center py-[5px]' /><button onClick={()=>{setcount(count+1)}} className="py-[5px] w-[25px] border bg-gray-200">+</button>
                    <button className="py-[5px] px-[10px] border border-orange-600 ml-[20px] font-bold text-white bg-orange-600">Thêm vào giỏ hàng</button>
                </div>
            </div>
       </div>
       <div className="max-w-6xl m-auto mt-[100px]">
            <h1 className="font-bold text-[30px]">Lorem Ipsum là gì?</h1>
            <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit aliquam laborum enim distinctio possimus iste cum id, est aperiam in autem, ratione omnis animi commodi sed veritatis? Dolor, quasi facere!</p>
        </div>
    </div>

  )
}

export default Detailproduct