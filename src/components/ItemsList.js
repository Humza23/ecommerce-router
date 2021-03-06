import React from 'react'

import { Link, useRouteMatch } from 'react-router-dom'

export default function ItemsList(props) {
  const { items } = props
  const {path} = useRouteMatch()

  return (
    <div className='items-list-wrapper'>
      {items.map(item => (
        <div
          className='item-card'
          key={item.id}
        >
          <Link to={`${path}/${item.id}`}>
            <img
              className='items-list-image'
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
          </Link>

          <p>${item.price}</p>
        </div>
      ))}
    </div>
  )
}
