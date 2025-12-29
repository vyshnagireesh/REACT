import React from 'react'
import { CartContext, CartProvider } from '../CartContext'
import Header from './Header'
import ProductList from './ProductList'

function CartApp() {
  return (
    <CartProvider>
        <div className="app">
        <Header/>
        <main>
            <ProductList/>
            <CartContext/>
        </main>
        </div>
    </CartProvider>
  )
}

export default CartApp