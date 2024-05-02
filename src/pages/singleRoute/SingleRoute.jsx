import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// IMAGES 
import Rating from '../../images/rating.png'
import loadingGif from '../../images/loading.gif'
import { IoStar } from 'react-icons/io5'

const SingleRoute = () => {
    const {id} = useParams()
    const {data: product, loading} = useFetch(`products/${id}`)

    let card = (
        <div className="singleRoute__content">
          <img className='singleRoute__mainImg' src={product?.data?.thumbnail} alt="product image" />
          <div className='singleRoute__title'>
            <div className='singleRoute__title--images'>
              <img src={product?.data?.images[0]} alt="" />
              <img src={product?.data?.images[1]} alt="" />
              <img src={product?.data?.images[2]} alt="" />
            </div>
            <h2>{product?.data?.title}</h2>
            <p>{product?.data?.description}</p>
            <div className='singleRoute__title--rating'>
              <span>
                {product ? new Array(Math.round(product?.data?.rating)).fill(<IoStar className='rate'/>) : ""}
              </span>
              <p>({product?.data?.rating})</p>
            </div>
            <h5>Brand: <span>{product?.data?.brand}</span></h5>
            <h5>Stock: <span>{product?.data?.stock}</span></h5>
            <div className="singleRoute__title--prices">
              <h4>{product?.data?.price}$</h4>
              <p><del>{product?.data?.price / 2}$</del></p>
            </div>
          </div>
        </div>
  )
  return (
    <div className='singleRoute-page'>
      <div className="header-container">
        {loading ? <div className='loading'>
          <img src={loadingGif} alt="" />
        </div> : <>{card}</>}
      </div>
    </div>
  )
}

export default SingleRoute