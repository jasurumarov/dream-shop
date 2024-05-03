import React from 'react'
// IMAGES
import BenefitsIcon1 from '../../images/benefitsicon1.svg'
import BenefitsIcon2 from '../../images/benefitsicon2.svg'
import BenefitsIcon3 from '../../images/benefitsicon3.svg'
import BenefitsIcon4 from '../../images/benefitsicon4.svg'
import BenefitsIcon5 from '../../images/benefitsicon5.svg'

const Benefits = () => {
    const data = [
        {
            id: 1,
            img: BenefitsIcon1,
            title: "Best prices & offers",
            desc: "Orders $50 or more"
        },
        {
            id: 2,
            img: BenefitsIcon2,
            title: "Free delivery",
            desc: "24/7 amazing services"
        },
        {
            id: 3,
            img: BenefitsIcon3,
            title: "Great daily deal",
            desc: "When you sign up"
        },
        {
            id: 4,
            img: BenefitsIcon4,
            title: "Wide assortment",
            desc: "Mega Discounts"
        },
        {
            id: 5,
            img: BenefitsIcon5,
            title: "Easy returns",
            desc: "Within 30 days"
        }
    ]

    let cards = data?.map(el => (
        <div key={el.id} className="benefitsBottom-section__card">
            <img src={el.img} alt="" />
            <div>
                <p>{el.title}</p>
                <h5>{el.desc}</h5>
            </div>
        </div>
    ))
  return (
    <div className='benefitsBottom-section'>
        <div className="container">
            <div className="benefitsBottom-section__content">
                {cards}
            </div>
        </div>
    </div>
  )
}

export default Benefits