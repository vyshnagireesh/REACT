import React from 'react'
import './ProductPage.css'
import { products } from './data/product'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

const ProductPage = () => {
  return (
    <div className='products-container'>
        <h2 className='section-title'>
            special footwear with offers
        </h2>
        <p className='section-subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className='products-grid'>
        {products.map((item)=>(
            <Link key={item.id} to={`/products/${item.id}`}
            style={{textDecoration:"none"}}>
             
                <ProductCard product={item}/>
            </Link>
            
        ))}
        
      </div>
    </div>

  )
}

export default ProductPage
