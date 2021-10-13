import React from 'react'

import { Route, useParams, NavLink, useRouteMatch } from 'react-router-dom'

import ItemDetails from './ItemDetails'

export default function Item(props) {

  const { items } = props

  const { itemID } = useParams()
  const { url, path } = useRouteMatch()

  const item = items.find(item => {
    return item.id == itemID
  }) || {}

  return (
    <div className='item-wrapper'>
      <div className='item-header'>
        <div className='image-wrapper'>
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className='item-title-wrapper'>
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>

      <nav className='item-sub-nav'>
        <NavLink to={`${url}/shipping`}>Shipping</NavLink>
        <NavLink to={`${url}/description`}>Description</NavLink>
      </nav>

      <Route path={`${path}/shipping`}>
        <ItemDetails text={item.shipping} />
      </Route>
      <Route path={`${path}/description`}>
        <ItemDetails text={item.description} />
      </Route>

    </div>
  )
}
