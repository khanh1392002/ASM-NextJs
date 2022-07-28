import React from 'react'
// import '../styles/card.css'
type Props = {}

const card = (props: Props) => {
  return (
    <div>
           <main>
    <div className="content mx-auto w-[1270px] pt-20 pb-20 hi">
        <div className="cart">
        <table className="table-auto">
            <thead>
              <tr >
                <th>Sản phẩm</th>
                <th>GIÁ</th>
                <th className="text-center">SỐ LƯỢNG</th>
                <th>Tổng</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="flex ">
                    <img className="w-[76px] h-[76px]"  src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1658384856/samples/41-450x585-1_scfdfj.jpg" alt="" />
                    <p className="name p-6">Armani black suit</p>
                </td>
                <td className="text-[#ff6c8d]">550,000 ₫</td>
                <td>
                    <div className="buttons_added">
                        <input className="hiep" onClick="var result = document.getElementById('quantity'); var qty = result.value; if( !isNaN(qty) &amp; qty > 1 ) result.value--;return false;" type='button' value='-' />
                    <input id='quantity' min='1' name='quantity' type='text' value='1' />
                    <input className="hiep" onClick="var result = document.getElementById('quantity'); var qty = result.value; if( !isNaN(qty)) result.value++;return false;" type='button' value='+' />
                    </div>
                </td>
                <td className="text-[#ff6c8d]">550,000 ₫</td>
              </tr>   
            </tbody>
          </table>
          <div className="add-card flex justify-between">
            <a  href="">Tiếp tục xem giỏ hàng</a>
          <button className="btn-card">Cập nhật giỏ hàng</button>
        </div>
        </div>
        <div className="rol"></div>
        <div className="detail-cart">
            <h2 className="br">TỔNG SỐ LƯỢNG</h2>
              <div className="br hi1 pd">
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
              <div className="hi1 br pd">
                <p>Tổng</p>
                <p className="text-[#ff6c8d]">550,000 ₫</p>
              </div>
           <button className="btn m-auto bg-[#d26e4b] p-10 w-[100%]">Tiến Hành Thanh Toán</button>
        </div>
    </div>
</main>
    </div>
  )
}

export default card