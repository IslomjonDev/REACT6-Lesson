import React from 'react'
import './Main.css'
import { PiTelegramLogoThin } from "react-icons/pi";
import { TbLetterX } from "react-icons/tb";
import iphone15 from '../images/iphone-15-pro-wallpaper-2.webp'
import card1 from '../images/card1.png'


const Main = () => {
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
    </>
  )
}

export default Main