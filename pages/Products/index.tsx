import Link from 'next/link'
import React, { useEffect } from 'react'


type Props = {}

const ProductList = (props: Props) => {
  
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
                            <li className="cate hover hover:bg-[#ff6c8d]"><a href="#"></a>Skincare</li>
                            <li className="cate hover hover:bg-[#ff6c8d]"><a href="#"></a>Lipstick</li>
                            <li className="cate hover hover:bg-[#ff6c8d]"><a href="#"></a>Gloss</li>
                            <li className="cate hover hover:bg-[#ff6c8d]"><a href="#"></a>Nail</li>
                            <li className="cate hover hover:bg-[#ff6c8d]"><a href="#"></a>Vani Beauty</li>
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
                                <img className="w-[60px] h-[60px] m-auto" src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/8-450x585_luo6gy.jpg" alt=""/>
                            </div>
                            <a className="m-[13px]" href="#">Printed chiffon default</a>
                            </div>
                            </div> <div className="cate pb-4 hover hover:bg-[#ff6c8d]">
                                <div className="flex justify-around">
                                <div className="img-products p-2 ">
                                <img className="w-[60px] h-[60px] m-auto" src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/8-450x585_luo6gy.jpg" alt=""/>
                            </div>
                            <a className="m-[13px]" href="#">Printed chiffon default</a>
                            </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="product-mian">
                    <div className="product-small box shadow hover:shadow-lg">
                        <div className="product-img">
                            <img className="w-[100%] h-[100%]"
                                src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/41-450x585-1_scfdfj.jpg"
                                alt=""/>
                        </div>
                        <div className="name product-title">
                            <a href="http://mauweb.monamedia.net/vanibeauty/san-pham/armani-black-suit/">Armani black
                                suit</a>
                        </div>
                        <div className="price-wrapper">
                            <p className="price">550,000₫</p>
                        </div>
                    </div>
                    <div className="product-small box shadow hover:shadow-lg">
                        <div className="product-img">
                            <img className="w-[100%] h-[100%]"
                                src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/41-450x585-1_scfdfj.jpg"
                                alt=""/>
                        </div>
                        <div className="titi">
                            <div className="name product-title">
                                <a href="http://mauweb.monamedia.net/vanibeauty/san-pham/armani-black-suit/">Armani
                                    black suit</a>
                            </div>
                            <div className="price-wrapper">
                                <p className="price">550,000₫</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-small box shadow hover:shadow-lg">
                        <div className="product-img">
                            <img className="w-[100%] h-[100%]"
                                src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/41-450x585-1_scfdfj.jpg"
                                alt="" />
                        </div>
                        <div className="titi">
                            <div className="name product-title">
                                <a href="http://mauweb.monamedia.net/vanibeauty/san-pham/armani-black-suit/">Armani
                                    black suit</a>
                            </div>
                            <div className="price-wrapper">
                                <p className="price">550,000₫</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-small box shadow hover:shadow-lg">
                        <div className="product-img">
                            <img className="w-[100%] h-[100%]"
                                src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/41-450x585-1_scfdfj.jpg"
                                alt=""/>
                        </div>
                        <div className="titi">
                            <div className="name product-title">
                                <a href="http://mauweb.monamedia.net/vanibeauty/san-pham/armani-black-suit/">Armani
                                    black suit</a>
                            </div>
                            <div className="price-wrapper">
                                <p className="price">550,000₫</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-small box shadow hover:shadow-lg">
                        <div className="product-img">
                            <img className="w-[100%] h-[100%]"
                                src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/41-450x585-1_scfdfj.jpg"
                                alt=""/>
                        </div>
                        <div className="titi">
                            <div className="name product-title">
                                <a href="http://mauweb.monamedia.net/vanibeauty/san-pham/armani-black-suit/">Armani
                                    black suit</a>
                            </div>
                            <div className="price-wrapper">
                                <p className="price">550,000₫</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-small box shadow hover:shadow-lg">
                        <div className="product-img">
                            <img className="w-[100%] h-[100%]"
                                src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/41-450x585-1_scfdfj.jpg"
                                alt=""/>
                        </div>
                        <div className="titi">
                            <div className="name product-title">
                                <a href="http://mauweb.monamedia.net/vanibeauty/san-pham/armani-black-suit/">Armani
                                    black suit</a>
                            </div>
                            <div className="price-wrapper">
                                <p className="price">550,000₫</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-small box shadow hover:shadow-lg">
                        <div className="product-img">
                            <img className="w-[100%] h-[100%]"
                                src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/41-450x585-1_scfdfj.jpg"
                                alt=""/>
                        </div>
                        <div className="titi">
                            <div className="name product-title">
                                <a href="http://mauweb.monamedia.net/vanibeauty/san-pham/armani-black-suit/">Armani
                                    black suit</a>
                            </div>
                            <div className="price-wrapper">
                                <p className="price">550,000₫</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-small box shadow hover:shadow-lg">
                        <div className="product-img">
                            <img className="w-[100%] h-[100%]"
                                src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/41-450x585-1_scfdfj.jpg"
                                alt="" />
                        </div>
                        <div className="titi">
                            <div className="name product-title">
                                <a href="http://mauweb.monamedia.net/vanibeauty/san-pham/armani-black-suit/">Armani
                                    black suit</a>
                            </div>
                            <div className="price-wrapper">
                                <p className="price">550,000₫</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
    </div>

  )
}

export default ProductList