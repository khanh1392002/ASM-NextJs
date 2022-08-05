import React, { useEffect, useState } from 'react'
import { Carttype } from '../type/cart'
import NumberFormat from "react-number-format";
import { FaBeer,FaCartArrowDown,FaTrashAlt } from 'react-icons/fa';
// import '../styles/card.css'
import toastr from "toastr"
import 'toastr/build/toastr.min.css'
import { useRouter } from 'next/router'

type Props = {}

const card = (props: Props) => {
  const [card,setcart] = useState<Carttype[]>([])
  const [total,settotal] = useState([]) 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  
  useEffect(()=>{
    const item = JSON.parse(localStorage.getItem('cart')) || [] 
    setcart(item)
    settotal(item.map((ite:Carttype)=>(ite.price * ite.quanty)))
    console.log(item.map((ite:Carttype)=>(ite.price * ite.quanty)))
    console.log('tong',total)
    console.log(item)
  },[])
  const remove = (id:number) =>{
    const confirm = window.confirm("Bạn có muốn xóa")
    toastr.success("Xóa sản phẩm thành công")
    router.push('/card')
    
   
    if(confirm){
        let temp = card.filter(item => item._id !== id) 
        localStorage.setItem('cart', JSON.stringify(temp)) 
    }
}
  return (
    <div>
           <main>
    <div className="content mx-auto w-[1270px] pt-20 pb-20 hi flex justify-between">
        <div className="cart">
        <table className="table-auto w-[800px]">
            <thead>
              <tr >
                <th className='text-center'>Sản phẩm</th>
                <th>Iamge</th>
                <th>GIÁ</th>
                <th className="text-center">SỐ LƯỢNG</th>
                <th>Tổng</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {card.map((item:Carttype)=>(
                // eslint-disable-next-line react/jsx-key
                <tr className="text-center">
                <td>
                    <p className="name p-6">{item.name}</p>
                </td>
                <td>
                <img className="w-[144pxpx] h-[76px] m-auto"  src={`${item.image}`} alt="" />
                </td>
                <td className="text-[#ff6c8d]">
                <NumberFormat
                      thousandsGroupStyle='thousand'
                      value={item.price}
                      displayType="text"
                      thousandSeparator={true}
                    /> ₫
                  </td>
                <td className="text-[#ff6c8d]">{item.quanty}</td>
                <td className="text-[#ff6c8d]">
                <NumberFormat
                      thousandsGroupStyle='thousand'
                      value={item.quanty* item.price}
                      displayType="text"
                      thousandSeparator={true}
                    /> ₫
                  </td>
                
                <td className="font-bold"><button onClick={()=>{remove(item._id)}}><FaTrashAlt/></button></td>
              </tr>   
              ))}
              
            </tbody>
          </table>
          <div className="add-card flex justify-between">
            
          {/* <button className="btn-card">Cập nhật giỏ hàng</button> */}
        </div>
        </div>
        <div className="rol"></div>
        <div className="detail-cart">
            <h2 className="br">TỔNG SỐ LƯỢNG</h2>
              <div className="br hi1 pd flex justify-between">
                <p>Tổng phụ</p>
                <p className="text-[#ff6c8d]">550,000 ₫</p>
              </div>
              <div >
                <p className="text-right">Giao hàng miễn phí</p>
            </div>
              <div className="hi1 pd pt-2 pb-2">
                <p>Giao hàng</p>
                <p>Đây chỉ là ước tính. Giá sẽ cập nhật trong quá trình thanh toán</p>
              </div>
              <div className="giaohang text-right br">
                <a href="">Tính phí giao hàng</a>
              </div>
              <div className="br hi1 pd flex justify-between pt-2 pb-2">
                <p>Tổng</p>
                <p className="text-[#ff6c8d]">550,000 ₫</p>
              </div>
           <button className="btn m-auto bg-[#d26e4b] p-2 w-[100%]">Tiến Hành Thanh Toán</button>
        </div>
    </div>
</main>
    </div>
  )
}

export default card