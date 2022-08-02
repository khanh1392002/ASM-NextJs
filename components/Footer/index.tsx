import React from 'react'
import style from './footer.module.css'
type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='mt-[200px]'>
            <div className={style.footer}>
                <div className={style.container}>
                    <div className={style.contact}>
                        <h3>LIÊN HỆ</h3>
                        <div className={style.contact_item}>
                            <i className="fa-solid fa-location-dot" />
                            <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                        </div>
                        <div className={style.contact_item}>
                            <i className="fa-solid fa-phone" />
                            <p>076 922 0162</p>
                        </div>
                        <div className={style.contact_item}>
                            <i className="fa-solid fa-message" />
                            <p>demonhunterg@gmail.com
                                mon@mona.media</p>
                        </div>
                    </div>
                    <div className={style.internet}>
                        <h3>MẠNG XÃ HỘI</h3>
                        <p>Đăng ký để nhận được được thông tin ưu đãi mới nhất từ chúng tôi.</p>
                        <div className={style.internet_icon}>
                            <i className="fa-brands fa-facebook-square" />
                            <i className="fa-brands fa-facebook-square" />
                            <i className="fa-brands fa-facebook-square" />
                            <i className="fa-brands fa-facebook-square" />
                            <i className="fa-brands fa-facebook-square" />
                        </div>
                    </div>
                    <div className={style.form}>
                        <h3>Đăng Ký</h3>
                        <p>Đăng ký để nhận được được thông tin ưu đãi mới nhất từ chúng tôi.</p>
                        <form><input placeholder="Email" type="text" />
                            <button>Gửi</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer