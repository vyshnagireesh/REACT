import React, { useReducer } from 'react'
import shoppingReducer from '../../../Reducers/shopingReducer';


function ShoppingCart() {
    const [cart, dispatch] = useReducer(shoppingReducer, []);
    return (
        <div>
            <h2 className="title">
                Shopping Cart
            </h2>
            <button className='btn' onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: "Apple" })
            }>Add Apple</button>
            <button className='btn' onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: "Orange" })
            }>Add Orange</button>
            <ul>
                {cart.map((item) => (
                    <li key={item.id} className='cart-item'>
                        {item.name} (<span className='qty'>X</span>{item.qty})
                        <button className='btn' onClick={() => dispatch({type:"INCREASE",payload: item.id})}>
                            ➕
                        </button>
                        <button className='btn' onClick={() => dispatch({type:"DECREASE",payload: item.id})}>
                            ➖
                        </button>
                        <button className='btn' onClick={() => dispatch({type:"REMOVE_item",payload: item.id})}>
                            ✖
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default ShoppingCart