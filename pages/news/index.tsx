import Link from 'next/link'
import React, { useEffect } from 'react'
import NumberFormat from 'react-number-format'
import useNews from '../../hooks/news'
import { TypeNews } from '../../type/news'



type Props = {}

const NewsList = (props: Props) => {
    const { data, error, mutate } = useNews()
    if (!data) return <div>Loading....</div>
    if (error) return <div>Error !</div>
    return (
        <div>
            <main>
                <div className="content w-[1230px] mx-auto pb-20">
                    <div className="product pt-10">
                        <div className="category gird">
                            <div className="nav-category ">
                                <div className="cate">
                                    <samp className="text-[#ff6c8d] text-[18px] font-semibold">Danh mục bài viết</samp>
                                </div>      
                            </div>
                        </div>

                        <div className="product-mian">
                            {data.map((item: TypeNews) => (
                               
                                 <div className="product-small box shadow 0 h-fit hover:shadow-lg">
                                    <div className="product-img">
                                        <img className="w-[100%] h-[208px]"
                                            src={`${item.image}`}
                                            alt="" />
                                    </div>
                                    <div className="name product-title pt-[10px]">
                                        <Link href={`/Products/${item._id}`}>
                                            {item.title}
                                        </Link>
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

export default NewsList