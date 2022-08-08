import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format';
import usercategories from '../../hooks/categories'
import useProduct from '../../hooks/product'
import { CateType } from '../../type/categories';
import { Iproduct } from '../../type/products';
import style from '../../../styles/Home.module.css'

type ProductProps = {
  product: Iproduct;
}
const CateProduct = ({product}: ProductProps) => {

    const { data: cate } = usercategories();
    // if (!cate) return <div>Loading....</div>

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, mutate } = useProduct()
    if (!data) return <div className={style.load_man}></div>
    if (error) return <div>Error !</div>
    return (
        <div>
            <main>
                <div className="content w-[1230px] mx-auto pb-20">
                    <div className="title flex justify-between pt-20">
                        <div className="title-product flex text-xl ">
                            <h2><a href="">Trang chủ</a></h2>
                            <p>/</p>
                            <h2><a href="">Cửa Hàng</a></h2>
                        </div>
                        <div className="product-filter flex">
                            <p className="p-2">Hiển thị một kết quả duy nhất</p>
                            <select name="" id="" className="filter shadow hover:shadow-lg p-1">
                                <option value="Thứ tự mặc định">Thứ tự mặc định</option>
                                <option value="Thứ tự theo mức độ phổ biến">Thứ tự theo mức độ phổ biến</option>
                                <option value="Thứ tự theo điểm đánh giá">Thứ tự theo điểm đánh giá</option>
                                <option value="Mới nhất">Mới nhất</option>
                                <option value="Thứ tự theo đánh giá : Thấp đến cao">Thứ tự theo đánh giá : Thấp đến cao</option>
                                <option value="Thứ tự theo đánh giá : Cao xuống thấp">Thứ tự theo đánh giá : Cao xuống thấp
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="product pt-10">
                        <div className="category gird">
                            <div className="nav-category ">
                                <div className="cate">
                                    <samp className="text-[#ff6c8d] text-[18px] font-semibold">Danh mục sản phẩm</samp>
                                </div>
                                <ul className="block">
                                    {
                                        cate.map((item:CateType) => (
                                            // eslint-disable-next-line react/jsx-key
                                            <li className="cate hover hover:bg-[#ff6c8d]"><Link href={`/categories/${item._id}`}>{item.name}</Link></li>
                                        ))
                                    }

                                </ul>
                            </div>
                            <div className="products-4">
                                <div className="cate">
                                    <samp className="text-[#ff6c8d] text-[18px] font-semibold">Sản phẩm</samp>
                                </div>
                                <ul className="block">
                                    <div className="cate pb-4 hover hover:bg-[#ff6c8d]">
                                        <div className="flex justify-around">
                                            <div className="img-products p-2 ">
                                                <img className="w-[60px] h-[60px] m-auto" src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/8-450x585_luo6gy.jpg" alt="" />
                                            </div>

                                            <a className="m-[13px]" href="#">Printed chiffon default</a>

                                        </div>
                                    </div>
                                    <div className="cate pb-4 hover hover:bg-[#ff6c8d]">
                                        <div className="flex justify-around">
                                            <div className="img-products p-2 ">
                                                <img className="w-[60px] h-[60px] m-auto" src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/8-450x585_luo6gy.jpg" alt="" />
                                            </div>
                                            <a className="m-[13px]" href="#">Printed chiffon default</a>
                                        </div>
                                    </div> <div className="cate pb-4 hover hover:bg-[#ff6c8d]">
                                        <div className="flex justify-around">
                                            <div className="img-products p-2 ">
                                                <img className="w-[60px] h-[60px] m-auto" src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/8-450x585_luo6gy.jpg" alt="" />
                                            </div>
                                            <a className="m-[13px]" href="#">Printed chiffon default</a>
                                        </div>
                                    </div> <div className="cate pb-4 hover hover:bg-[#ff6c8d]">
                                        <div className="flex justify-around">
                                            <div className="img-products p-2 ">
                                                <img className="w-[60px] h-[60px] m-auto" src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/8-450x585_luo6gy.jpg" alt="" />
                                            </div>
                                            <a className="m-[13px]" href="#">Printed chiffon default</a>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div className="product-mian">
                            {product.products.map((item:Iproduct) => (
                                // eslint-disable-next-line react/jsx-key
                                <div className="product-small box shadow 0 h-fit hover:shadow-lg">
                                    <div className="product-img">
                                        <img className="w-[100%] h-[208px]"
                                            src={`${item.image}`}
                                            alt="" />
                                    </div>
                                    <div className="name product-title pt-[10px]">
                                        <Link href={`/products/${item._id}`}>
                                            {item.name}
                                        </Link>
                                    </div>
                                    <div className="price-wrapper pb-[10px]">
                                        <p className="price">
                                        <NumberFormat
                                                thousandsGroupStyle='thousand'
                                                value={item.price}
                                                displayType="text"
                                                thousandSeparator={true}
                                            /> ₫
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </main>
        </div>

    )
}
export const getStaticPaths: GetStaticPaths = async () => {
    const data = await (await fetch(`http://localhost:3001/api/categorys`)).json();
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
    const product = await (await fetch(`http://localhost:3001/api/category/${context.params?.id}`)).json();
    return {
        props: { product },
        revalidate: 5
    }

}
export default CateProduct