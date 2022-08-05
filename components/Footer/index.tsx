import React from 'react'
import style from './footer.module.css'
import { FaPhoneAlt, FaMailBulk, FaLocationArrow, FaFacebookSquare, FaLinkedin, FaYoutube, FaTwitterSquare, FaPinterestP } from "react-icons/fa";
type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='mt-[200px]'>
            <div className={style.footer}>
                <div className={style.container}>
                    <div className={style.contact}>
                        <h3>LIÊN HỆ</h3>
                        <div className={style.contact_item}>
                            <FaLocationArrow />
                            <p className='pl-[10px]'>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                        </div>
                        <div className={style.contact_item}>
                            <FaPhoneAlt />
                            <p className='pl-[10px]'>076 922 0162</p>
                        </div>
                        <div className={style.contact_item}>
                            <FaMailBulk />
                            <p className='pl-[10px]'>demonhunterg@gmail.com
                                mon@mona.media</p>
                        </div>
                    </div>
                    <div className={style.internet}>
                        <h3>MẠNG XÃ HỘI</h3>
                        <p>Đăng ký để nhận được được thông tin ưu đãi mới nhất từ chúng tôi.</p>
                        <div className={style.internet_icon}>
                            <li><FaFacebookSquare /></li>
                            <li><FaLinkedin /></li>
                            <li><FaYoutube /></li>
                            <li><FaTwitterSquare /></li>
                            <li><FaPinterestP /></li>
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