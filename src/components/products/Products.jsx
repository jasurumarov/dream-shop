import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'

// IMAGES
import { IoStar } from 'react-icons/io5'
import { Button } from '@mui/material'
import { RiShoppingCart2Line } from 'react-icons/ri'

const Products = () => {
  const [count, setCount] = useState(1)
  const [categoryName, setCategoryName] = useState("all")
  const {data: categories} = useFetch(`/products/categories`)
  
  let url = `/products${categoryName === "all" ? `?limit=${count * 10}` : `/category/${categoryName}?limit=${count * 5}`}`
  const {data: products, loading} = useFetch(url, categoryName, count)
  
  const handleCategoryClick = (category) => {
    setCategoryName(category);
  };
  
  let categoryItems = categories?.data?.map((el , i) => (
    <li onClick={() => handleCategoryClick(el)} className={`category ${categoryName === el ? "active" : ""}`} key={i}>{el[0].toUpperCase() + el.slice(1)}</li>
  ))

  let loadingItem = Array(10).fill("").map((el, i) => (
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

  let cards = products?.data?.map(el => (
    <div key={el.id} className="products-section__product">
        <div className="products-section__product__img">
            <Link to={`/product/${el.id}`}>
                <img src={el.image} alt="" />
            </Link>
        </div>
        <p className='products-section__product__type'>{el.category}</p>
        <p className='products-section__product__title' title={el.title}>{el.title}</p>
        <div className='products-section__product__rating'>
            <span>
              {new Array(Math.round(el.rating.rate)).fill(<IoStar className='rate'/>)}
            </span>
            <h5>({el.rating.rate})</h5>
        </div>
        <p className="products-section__product__company">By <span>BrandRows</span></p>
        <div className="products-section__product__price">
            <div>
                <p>${el.price}</p>
                <span><del>${Math.round(el.price * 2)}</del></span>
            </div>
            <button>
              <RiShoppingCart2Line />
                Add
            </button>
        </div>
        <p className="products-section__product__brand">{el.category[0].toUpperCase() + el.category.slice(1)}</p>
    </div>
  ))
  return (
    <div className='products-section'>  
      <div className="container">
        <div className="products-section__title">
          <h2>Popular Products</h2>
          <ul>
              <li className={`category ${categoryName === "all" ? "active" : ""}`} onClick={() => handleCategoryClick("all")} >All</li>
              {categoryItems}
          </ul>
        </div>
        <div className="products-section__products">
            {cards}
        </div>
        {loading ? <div className="loading">
            {categoryName === "all" ? loadingItem : <></>}
        </div> : <></>}
        <div className="seeMore">
          <Button onClick={() => setCount(p => p + 1)} variant="contained" size='large'>See more</Button>
        </div>
      </div>
    </div>
  )
}

export default Products