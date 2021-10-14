import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Home from './Home'
import ItemsList from './ItemsList'
import Item from './Item'

// Dummy data
import data from '../data'

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}

export default function App() {
  const [stock, setStock] = useState([])

  useEffect(() => {
    fetchStock().then(res => setStock(res.data))
  }, [])

  return (
    <div className='App'>
      <nav className="topNav">
        <h1 className='store-header'>Humza&apos;s Thrift Shop</h1>
        <div className='nav-links'>
          <Link to='/ecommerce-router'>Home</Link>
          <Link to='/ecommerce-router/items-list'>Shop</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/ecommerce-router/items-list/:itemID'>
          <Item items={stock} />
        </Route>
        <Route path='/ecommerce-router/items-list'>
          <ItemsList items={stock} />
        </Route>
        <Route path='/ecommerce-router'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}
