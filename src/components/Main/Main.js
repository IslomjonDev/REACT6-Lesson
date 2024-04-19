import React , {useEffect , useState}  from 'react'
import './Main.css'
import { PiTelegramLogoThin } from "react-icons/pi";
import { TbLetterX } from "react-icons/tb";
import iphone15 from '../images/iphone-15-pro-wallpaper-2.webp'
import card1 from '../images/card1.png'
import laptop from '../images/card1.png'
import { CiShoppingCart } from "react-icons/ci";
import  axios  from 'axios';

import shopCard1 from '../images/div.banner-icon.png'
import shopCard2 from '../images/div.banner-icon2.png'
import shopCard3 from '../images/icon-3.svg.png'
import shopCard4 from '../images/div.banner-icon4.png'
import shopCard5 from '../images/icon-5.svg.png'


const API_URL = 'https://dummyjson.com/products'


const Main = () => {


     const [data , setData] = useState([])

     useEffect(() => {

        axios
        .get(API_URL)
        .then(res => setData(res.data.products))
     } , [])

    let productCards = data?.slice(0 , 8).map((pro) => (
        <div key={pro.id} className="product-card">
        <img src={pro.thumbnail} alt="" />
        <h6>{pro.brand}</h6>
        <p>{pro.description}</p>
        <p>{pro.category}</p>
        <span>
        <h2>${pro.price}</h2>
        <h3>$32.58</h3>
        <button> <CiShoppingCart className='add-btn' />Add</button>
        </span>
    </div>
    ))

  return (
    <>
        <div className="hero">
            <div className="container">
                <div className="hero-content">
                 <div className="hero-left">
                    <p><b>100%</b> organic vegetables</p>
                    <h1>The best way to stuff your wallet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                    <div className="hero-btn">
                    <PiTelegramLogoThin className='tg' />
                        <input type="text" />
                        <button>Subscribe</button>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="section">
                        <div className="section-card">
                             <TbLetterX  className='inc'/>
                             <p>Shopp</p>
                        </div>
                        <div className="section-card">
                             <TbLetterX  className='inc'/>
                             <p>Recips</p>
                        </div>
                        <div className="section-card">
                             <TbLetterX  className='inc'/>
                             <p>Kitchen</p>
                        </div>
                        <div className="section-card">
                             <TbLetterX  className='inc'/>
                             <p>News</p>
                        </div>
                        <div className="section-card">
                             <TbLetterX  className='inc'/>
                             <p>Food</p>
                        </div>
                        
                    </div>
                    <img src={iphone15} alt="" />
                </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="cards">
                <div className="card">
                    <div className="card-left">
                    <h1>Everyday Fresh & Clean with Our Products</h1>
                    <button>Shop Now</button>
                    </div>
                    <div className="card-right">

                    <img src={card1} alt="" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-left">
                    <h1>Make your Breakfast Healthy and Easy</h1>
                    <button>Shop Now</button>
                    </div>
                    <div className="card-right">

                    <img src={card1} alt="" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-left">
                    <h1>The best Organic Products Online</h1>
                    <button>Shop Now</button>
                    </div>
                    <div className="card-right">

                    <img src={card1} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="products">
                <h1>Popular Products</h1>
                <div className="products-cards">
                    {productCards}
                </div>
            </div>
        </div>
        <div className="shopping">
            <div className="container">
                <div className="shopping-content">
                    <div className="shop-left">
                        <h1>Stay home & get your daily needs from our shop</h1>
                        <p>Start You'r Daily Shopping with <b>Nest Mart</b></p>
                        <div className="hero-btn">
                    <PiTelegramLogoThin className='tg' />
                        <input type="text" />
                        <button className='shop-btn'>Subscribe</button>
                    </div>
                    </div>
                    <div className="shop-right">
                      <img src={laptop} alt="" />
                    </div>
                </div>
                <div className="shop-cards">
                    <div className="shop-card">
                        <img src={shopCard1} alt="" />
                        <span>
                            <h4>Best prices & offers</h4>
                            <p>Orders $50 or more</p>
                        </span>
                    </div>
                    <div className="shop-card">
                        <img src={shopCard2} alt="" />
                        <span>
                            <h4>Free delivery</h4>
                            <p>24/7 amazing services</p>
                        </span>
                    </div>
                    <div className="shop-card">
                        <img src={shopCard3} alt="" />
                        <span>
                            <h4>Great daily deal</h4>
                            <p>When you sign up</p>
                        </span>
                    </div>
                    <div className="shop-card">
                        <img src={shopCard4} alt="" />
                        <span>
                            <h4>Wide assortment</h4>
                            <p>Mega Discounts</p>
                        </span>
                    </div>
                    <div className="shop-card">
                        <img src={shopCard5} alt="" />
                        <span>
                            <h4>Easy returns</h4>
                            <p>Within 30 days</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main