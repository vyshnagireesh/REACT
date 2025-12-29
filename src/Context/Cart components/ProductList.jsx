import React, { useContext } from 'react'
import { CartContext } from '../CartContext'



export default function ProductList() {
    const { products, dispatch } = useContext(CartContext);
    return (
        <div className='products'>
            <h2>Products</h2>
            {products.map((p) => (
                <div className='product-card' key={p.id}>
                    <h3>{p.name}</h3>
                    <p>{p.price}</p>
                    <button className='btn'
                        onClick={() => dispatch({ type: "ADD_ITEM", payload: p })}>
                        Add To Cart
                    </button>
                </div>
            ))

            }
        </div>
    )
}