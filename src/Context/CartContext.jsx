import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

const products = [
    { id: 1, name: "Apple", price: 50 },
    { id: 2, name: "Orange", price: 30 },
    { id: 3, name: "Banana", price: 10 },
    { id: 4, name: "Mango", price: 80 },
];

function reducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const existing = state.find((item) => item.id === action.playload.id);
            if (existing) {
                return state.map((item) =>
                    item.id === action.playload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }
            return [...state, { ...action.playload, qty: 1 }];
        }

        case "REMOVE_ITEM": {
            return state.filter((item) => item.id !== action.playload);
        };

        case "INCREASE": {
            return state.map((item) =>
                item.id === action.playload ? { ...item, qty: item.qty + 1 } : item
            );
        };

        case "DECREASE": {
            return state.map((item) =>
                item.id === action.playload && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            );
        };

        case "RESET": {
            return [];
        }

        default: {
            return state;
        };
    }
}

export function CartProvider({ children }){
    const [cart, dispatch] = useReducer(reducer, []);
    return (
        <CartContext.Provider value={{ cart, dispatch, products }}>
            {children}
        </CartContext.Provider>
    )
}