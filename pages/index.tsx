import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import usercategories from '../hooks/categories'
import useProduct from '../hooks/product'
import style from '../styles/Home.module.css'
import { Iproduct } from '../type/products'


const Home: NextPage = () => {
  const {data:cate} = usercategories();
  // if (!cate) return <div>Loading....</div>

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {data,error,mutate} = useProduct()
  if(!data) return <div>Loading....</div>
  if(error) return <div>Error !</div>
  return (
    <div>
      <div className={style.banner}>
        <div className={style.banner_img}>
          <img src="https://images.unsplash.com/photo-1588514912908-8f5891714f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
        </div>
        <div className={style.banner_text}>
          <h3>BEAUTY BLOG</h3>
          <p>Combo dưỡng ẩm, tẩy tế bào chết cho mọi loại da</p>
          <a href="">Mua Ngay</a>
        </div>
      </div>

      <section>
        <div className={style.section_container}>
          <div className={style.box}>
            <div className={style.box_list1}>
              <img src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/banner_1.1.jpg" alt="" />
            </div>
            <div className={style.box_list2}>
              <img src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/banner_1.2-1.jpg" alt="" />
            </div>
            <div className={style.box_list3}>
              <img src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/banner_1.3-1.jpg" alt="" />
            </div>
            <div className={style.box_list4}>
              <img src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/banner-v2-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id={style.Featured}>
        <div className={style.container_Featured}>
          <div className={style.Featured_title}>
            <span>Beauty Mona</span>
            <h3>SẢN PHẨM NỔI BẬT</h3>
          </div>
          <div className={style.Featured_product}>
            <ul className={style.Featured_menu}>
              <li><Link href="">Skincare</Link></li>
              <li><Link href="">Lipstick</Link></li>
              <li><Link href="">Gloss</Link></li>
              <li><Link href="">Vani Beauty</Link></li>
              <li><Link href="">Nail</Link></li>
            </ul>
            <div className={style.product_list}>
            {data.map((item:Iproduct)=>(
              // eslint-disable-next-line react/jsx-key
              <div className={style.product_item}>
                <img    src={`${item.image}`} alt="" />
                <div className={style.product_title}>
                <Link href={`/products/${item._id}`}>
                                {item.name}
                            </Link>
                  <p className="price">{item.price}</p>
                </div>
              </div>
       
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id={style.discount}>
        <div className={style.container_discount}>
          <div className={style.discount_text}>
            <h2>Giảm Giá 50%</h2>
            <p>
              Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn</p>
            <div className={style.discount_time}>
              <span>0 <strong>Giờ</strong></span>
              <span>0 <strong>Phút</strong></span>
              <span>0 <strong>Giây</strong></span>
            </div>
            <button>MUA NGAY</button>
          </div>
        </div>
      </section>
      <section id={style.category}>
        <div className={style.container_category}>
          <ul>
            <li><a href="">BÁN CHẠY</a></li>
            <li><a href="">GIÁ TỐT</a></li>
            <li><a href="">NỔI BẬT</a></li>
          </ul>
          <div className={style.category_list}>
            <div className={style.category_box}>
              <img src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/1.jpg" alt="" />
              <div className={style.category_text}>
                <a href="">Dolor sit amet</a>
                <p>770,000đ</p>
              </div>
            </div>
            <div className={style.category_right}>
              <div className={style.category_box}>
                <img src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/10-450x585-1.jpg" alt="" />
                <div className={style.category_text}>
                  <a href="">Dolor sit amet</a>
                  <p>770,000đ</p>
                </div>
              </div>
              <div className={style.category_box}>
                <img src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/10-450x585-1.jpg" alt="" />
                <div className={style.category_text}>
                  <a href="">Dolor sit amet</a>
                  <p>770,000đ</p>
                </div>
              </div>
              <div className={style.category_box}>
                <img src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/10-450x585-1.jpg" alt="" />
                <div className={style.category_text}>
                  <a href="">Dolor sit amet</a>
                  <p>770,000đ</p>
                </div>
              </div>
              <div className={style.category_box}>
                <img src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/10-450x585-1.jpg" alt="" />
                <div className={style.category_text}>
                  <a href="">Dolor sit amet</a>
                  <p>770,000đ</p>
                </div>
              </div>
              <div className={style.category_box}>
                <img src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/10-450x585-1.jpg" alt="" />
                <div className={style.category_text}>
                  <a href="">Dolor sit amet</a>
                  <p>770,000đ</p>
                </div>
              </div>
              <div className={style.category_box}>
                <img src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/10-450x585-1.jpg" alt="" />
                <div className={style.category_text}>
                  <a href="">Dolor sit amet</a>
                  <p>770,000đ</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section id={style.client}>
        <div className={style.container_client}>
          <h3>KHÁCH HÀNG NÓI GÌ</h3>
          <div className={style.client_list}>
            <div className={style.client_box}>
              <img className='m-auto' src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/team-2-150x150.jpg" alt="" />
              <div className={style.client_text}>
                <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn</p>
                <span><span>Mark Jance</span> / Facebook</span>
              </div>
            </div>
            <div className={style.client_box}>
              <img className='m-auto' src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/team-2-150x150.jpg" alt="" />
              <div className={style.client_text}>
                <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn</p>
                <span><span>Mark Jance</span> / Facebook</span>
              </div>
            </div>
            <div className={style.client_box}>
              <img className='m-auto' src="http://mauweb.monamedia.net/vanibeauty/wp-content/uploads/2019/05/team-2-150x150.jpg" alt="" />
              <div className={style.client_text}>
                <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn</p>
                <span><span>Mark Jance</span> / Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
