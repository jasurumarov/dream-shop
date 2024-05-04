import React from 'react'
import SingleRouteHeader from '../../components/singleRouteHeader/SingleRouteHeader'
import SingleRouteProduct from '../../components/singleRouteProduct/SingleRouteProduct'
import Delivery from '../../components/delivery/Delivery'

const SingleRoute = () => {
  return (
    <div className='singleRoute-page'>
      <SingleRouteHeader name={"Product"} arr={">"} sname={"Seeds of Change Organic"}/>
      <SingleRouteProduct/>
      <div style={{marginBottom: "172px"}}>
        <Delivery/>
      </div>
    </div>
  )
}

export default SingleRoute