import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {Iproduct} from '../../type/products'
type ProductProps = {
  product: Iproduct;
}
const Detailproduct = ({product}: ProductProps) => {
    const [count,setcount] = useState(1)
    console.log(product)
  return (
    <div>
       <div className='flex mt-[100px] max-w-6xl m-auto'>
            <div>
                <img width="570" src={product.image} alt="" />
            </div>

            <div className='ml-[30px] w-[45%]'>
                <h1 className="mt-[45px] font-bold text-[27px] font-mono">{product.name}</h1>
                <p className="text-pink-500 mt-[35px] text-[25px]">{product.price}</p>
                <p className="mt-[30px]">{product.description}</p>
                <div className='mt-[50px]'>
                    <button onClick={()=>{setcount(count-1)}} className="py-[5px] w-[25px] border bg-gray-200">-</button><input type="text" min={0} value={`${count}`} className='w-[40px] border text-center py-[5px]' /><button onClick={()=>{setcount(count+1)}} className="py-[5px] w-[25px] border bg-gray-200">+</button>
                    <button className="py-[5px] px-[10px] border border-orange-600 ml-[20px] font-bold text-white bg-orange-600">Thêm vào giỏ hàng</button>
                </div>
            </div>
       </div>
       <div className="max-w-6xl m-auto mt-[100px]">
            <h1 className="font-bold text-[30px]">{product.name} là gì?</h1>
            <p className="text-[15px]">{product.description}</p>
        </div>
    </div>

  )
}
export const getStaticPaths: GetStaticPaths = async () => {
    const data = await (await fetch(`http://localhost:3001/api/products`)).json();
    const paths = data.map((product: any) => (
        { params: { id: product._id } }
    ))
    return {
        paths,
        fallback: true // blocking or true
    }
}
// server
export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
    console.log('context', context);
    const product = await (await fetch(`http://localhost:3001/api/product/${context.params?.id}`)).json();
    return {
        props: { product },
        revalidate: 5
    }

}
export default Detailproduct