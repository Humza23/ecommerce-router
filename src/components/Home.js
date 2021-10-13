import React from 'react'

import { useHistory } from "react-router-dom";

export default function Home() {

  const history = useHistory()

  const routeToShop = () => {
    history.push('/ecommerce-router/items-list')
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://source.unsplash.com/F6-U5fGAOik'
        alt=''
      />
      <button
        onClick={routeToShop}
        className='md-button shop-button'
      >
        Shop now!
      </button>
    </div>
  )
}
