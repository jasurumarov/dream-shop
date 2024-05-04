import React from 'react'
import Products from '../../components/products/Products'
import Featured from '../../components/featured/Featured'
import Benefits from '../../components/benefits/Benefits'
import Delivery from '../../components/delivery/Delivery'
import BenefitsBottom from '../../components/benefits-bottom/BenefitsBottom'
import Hero from '../../components/hero/Hero'

const Home = () => {
  return (
    <div className='home-page'>
      <Hero/>
      <Featured/>
      <Benefits/>
      <Products/>
      <Delivery/>
      <BenefitsBottom/>
    </div>
  )
}

export default Home