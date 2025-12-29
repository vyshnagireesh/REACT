import React from 'react'

const ShopingReducer = () => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...State, {
                id: Date.now(), name: action.payload, qty:1

            }];
            case "REMOVE_ITEM":
                return state.filter((item)=> item.id !== action.payload);
                case "INCREASE":
                    return state.map((item) =>
                        item.id ===action.payload ? {...item, qty: item.qty +1}:
                    item
                    );
                    case "DECREASE":
                        return state.map((item)=>
                            item.id === action,payload && item.qty >1
                        ? {...item,qty:item.qty -1}
                        :item
                        );
                        f
                        default:
                        
    }
    
       
}

export default ShopingReducer
