import React from 'react'
// IMAGES
import Img1 from '../../images/featured1.png'
import Img2 from '../../images/featured2.png'
import Img3 from '../../images/featured3.png'
import Img4 from '../../images/featured4.png'
import Img5 from '../../images/featured5.png'
import Img6 from '../../images/featured6.png'
import Img7 from '../../images/featured7.png'
import Img8 from '../../images/featured8.png'
import Img9 from '../../images/featured9.png'
import Img10 from '../../images/featured10.png'

const Featured = () => {
    const data = [
        {
            id: 1,
            img: Img1,
            title: 'Cake & Milk',
            stock: '26 items'
        },
        {
            id: 2,
            img: Img2,
            title: 'Oganic Kiwi',
            stock: '28 items'
        },
        {
            id: 3,
            img: Img3,
            title: 'Peach',
            stock: '14 items'
        },
        {
            id: 4,
            img: Img4,
            title: 'Red Apple',
            stock: '54 items'
        },
        {
            id: 5,
            img: Img5,
            title: 'Snack',
            stock: '56 items'
        },
        {
            id: 6,
            img: Img6,
            title: 'Vegetables',
            stock: '72 items'
        },
        {
            id: 7,
            img: Img7,
            title: 'Strawberry',
            stock: '36 items'
        },
        {
            id: 8,
            img: Img8,
            title: 'Black plum',
            stock: '123 items'
        },
        {
            id: 9,
            img: Img9,
            title: 'Custard apple',
            stock: '34 items'
        },
        {
            id: 10,
            img: Img10,
            title: 'Coffe & Tea',
            stock: '89 items'
        }
    ]

    let card = data.map(el => (
        <div key={el.id} className="featured__card">
            <img src={el.img} alt="card img" />
            <h3>{el.title}</h3>
            <p>{el.stock}</p>
        </div>
    )) 

  return (
    <div className='featured-section'>
        <div className="container">
            <div className="featured-section__content">
                <div className="featured__title">
                    <h2>Featured Categories</h2>
                    <ul>
                        <li>Cake & Milk</li>
                        <li>Coffes & Teas</li>
                        <li>Pet Foods</li>
                        <li>Vegetables</li>
                    </ul>
                </div>
                <div className="featured__cards">
                    {card}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured