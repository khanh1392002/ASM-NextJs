import React, { useEffect, useState } from 'react'
import { Carttype } from '../type/cart'
import NumberFormat from "react-number-format";
import { FaBeer,FaCartArrowDown,FaTrashAlt } from 'react-icons/fa';
// import '../styles/card.css'
type Props = {}

const card = (props: Props) => {
  const [card,setcart] = useState<Carttype[]>([])
  const [total,settotal] = useState([]) 
  
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
                <th>Sản phẩm</th>
                <th>GIÁ</th>
                <th className="text-center">SỐ LƯỢNG</th>
                <th>Tổng</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {card.map((item:Carttype)=>(
                <tr className="text-center">
                <td className="flex ">
                    <img className="w-[76px] h-[76px]"  src={`${item.image}`} alt="" />
                    <p className="name p-6">{item.name}</p>
                </td>
                <td className="text-[#ff6c8d]">
                <NumberFormat
                      thousandsGroupStyle='thousand'
                      value={item.price}
                      displayType="text"
                      thousandSeparator={true}
                    /> ₫
                  </td>
                {/* <td>
                    <div className="buttons_added">
                        <input className="hiep" onClick="var result = document.getElementById('quantity'); var qty = result.value; if( !isNaN(qty) &amp; qty > 1 ) result.value--;return false;" type='button' value='-' />
                    <input id='quantity' min='1' name='quantity' type='text' value='1' />
                    <input className="hiep" onClick="var result = document.getElementById('quantity'); var qty = result.value; if( !isNaN(qty)) result.value++;return false;" type='button' value='+' />
                    </div>
                </td> */}
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
              <div className="hi1 pd">
                <p>Giao hàng</p>
                <p>Đây chỉ là ước tính. Giá sẽ cập nhật trong quá trình thanh toán</p>
              </div>
              <div className="giaohang text-right br">
                <a href="">Tính phí giao hàng</a>
              </div>
              <div className="br hi1 pd flex justify-between">
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