import React from 'react'
import BannerBg1 from '../../images/banner1.png'
import BannerBg2 from '../../images/banner2.png'
import BannerBg3 from '../../images/banner3.png'

const Benefits = () => {
    const data = [
        {
            id: 1,
            title: "Everyday Fresh & Clean with Our Products",
            bg: BannerBg1
        },
        {
            id: 2,
            title: "Make your strong Chargery and Easy",
            bg: BannerBg2
        },
        {
            id: 3,
            title: "The best Phone Products Online",
            bg: BannerBg3
        }
    ]

    let cards = data?.map(el => (
        <div style={{backgroundImage : `url(${el.bg})`}} key={el.id}>
            <p>{el.title}</p>
            <button>Shop Now</button>
        </div>
    ))
  return (
    <div className='benefits-section'>
        <div className="container">
            <div className="benefits-section__content">
                {cards}
            </div>
        </div>
    </div>
  )
}

export default Benefits