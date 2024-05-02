import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// IMAGES
import Cart from "../../images/cart-card.svg" 
import { IoStar } from 'react-icons/io5'
import { Button } from '@mui/material'

const Products = () => {
  const [count, setCount] = useState(1)
  const [categoryName, setCategoryName] = useState("all")
  const {data: categories} = useFetch(`/products/categories`)
  
  let url = `/products${categoryName === "all" ? `?limit=${count * 8}` : `/category/${categoryName}?limit=${count * 4}`}`
  const {data: products, loading} = useFetch(url, categoryName, count)
  
  const handleCategoryClick = (category) => {
    setCategoryName(category);
  };
  
  let categoryItems = categories?.data?.map((el , i) => (
    <SwiperSlide onClick={() => handleCategoryClick(el)} className={`category ${categoryName === el ? "active" : ""}`} key={i}>{el[0].toUpperCase() + el.slice(1)}</SwiperSlide>
  ))

  let loadingItem = Array(8).fill("").map((el, i) => (
    <div key={i} className="products-section__product">
      <div className="products-section__product__img"></div>
      <p className='products-section__product__type'></p>
      <p className='products-section__product__title'></p>
      <div className='products-section__product__rating'></div>
      <p className="products-section__product__company"></p>
      <div className="products-section__product__price">
          <div></div>
          <button></button>
      </div>
      <p className="products-section__product__brand"></p>
    </div>
  ))

  let cards = products?.data?.products?.map(el => (
    <div key={el.id} className="products-section__product">
        <div className="products-section__product__img">
            <Link to={`/product/${el.id}`}>
                <img src={el.thumbnail} alt="" />
            </Link>
        </div>
        <p className='products-section__product__type'>{el.category}</p>
        <p className='products-section__product__title' title={el.title}>{el.title}</p>
        <div className='products-section__product__rating'>
            <span>
              {new Array(Math.round(el.rating)).fill(<IoStar className='rate'/>)}
            </span>
            <h5>({el.rating})</h5>
        </div>
        <p className="products-section__product__company">By <span>{el.brand}</span></p>
        <div className="products-section__product__price">
            <div>
                <p>${el.price}</p>
                <span><del>$32.8</del></span>
            </div>
            <button>
                <img src={Cart} alt="cart icon" />
                Add
            </button>
        </div>
        <p className="products-section__product__brand">{el.brand}</p>
    </div>
  ))
  return (
    <div className='products-section'>  
      <div className="container">
        <Swiper
        navigation={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            50: {
              slidesPerView: 1,
              spaceBetween: 6,
            },
            385: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            526: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            667: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1236: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          className="category-swiper"
        >
          <SwiperSlide onClick={() => handleCategoryClick("all")} className={`category ${categoryName === "all" ? "active" : ""}`}>All</SwiperSlide>
          {categoryItems}
        </Swiper>
        <div className="products-section__products">
            {cards}
        </div>
        {loading ? <div className="loading">
            {loadingItem}
        </div> : <></>}
        <div className="seeMore">
          <Button onClick={() => setCount(p => p + 1)} variant="contained" size='large'>See more</Button>
        </div>
      </div>
    </div>
  )
}

export default Products