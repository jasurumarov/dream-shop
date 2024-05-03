import React from 'react'
import { TbBrandTelegram } from "react-icons/tb";
// IMAGES
import DelievryBg from '../../images/hero-bgg.png'

const Delivery = () => {
  return (
    <div className='delivery-section'>
        <div className="container">
            <div style={{background: `url(${DelievryBg})`}} className="delivery-section__content">
                <h2>Stay home & get your daily needs from our shop</h2>
                <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
                <form>
                    <TbBrandTelegram className='hero-section__title__form-icon' />
                    <input type="email" placeholder='Your emaill address' required/>
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Delivery 