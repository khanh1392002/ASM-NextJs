import Link from 'next/link'
import React, { Children, useEffect } from 'react'
import style from './header.module.css'
import { FaBeer,FaCartArrowDown,FaTrashAlt } from 'react-icons/fa';
type Props = {}


const Header = (props: Props) => {
    useEffect(() => {
        window.addEventListener("scroll", function () {
            var zau = document.querySelector("nav")
            zau?.classList.toggle(`${style.stick}`, window.scrollY > 150)
        })
    })
    return (
        <div>
            <header id={style.header}>
                <div className={style.container}>
                    <div className={style.header_top}>
                        <ul className={style.header_top__list}>
                            <li className={style.header_top__item}><a href="signin">Đăng Nhập</a></li>
                            <li>/ </li>
                            <li className={style.header_top__item}><a href="signup">Đăng Ký</a></li>
                        </ul>
                        <div className={style.header_inner__img}>
                            <img src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/logo-mona.png" />
                        </div>
                        <div className={style.search_cart}>
                            
                            <Link href="/card" className='text-[25px] cursor-pointer'><FaCartArrowDown /></Link>
                        </div>
                    </div>
                </div>
                <nav id={style.nav} className={style.menu}>
                    <ul className={style.list}>
                        <li className={style.list_item}><Link href="/">TRANG CHỦ</Link></li>
                        <li className={style.list_item}><Link href="">GIỚI THIỆU</Link></li>
                        <li className={style.list_item}><Link href="/products">CỬA HÀNG</Link></li>
                        <li className={style.list_item}><Link href="">TIN TỨC</Link></li>
                        <li className={style.list_item}><Link href="">LIÊN HỆ</Link></li>
                    </ul>
                </nav>
            </header>

        </div>

    )
}

export default Header