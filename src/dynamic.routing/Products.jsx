import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const MyProducts = [
    { id: '1', name: 'laptop' },
    { id: '2', name: 'phone' }
  ]
  return (
    <div>
      <h2>productvlist</h2>
      <ul>
        {MyProducts.map(p => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
