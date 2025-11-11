import React from 'react'
import { useParams } from 'react-router-dom'
import { FaBox } from "react-icons/fa6";


const ProductDetailPage = () => {
    const { id } = useParams(); //REACT ROUTER PROVIDE CHEYUNNA HOOK ANN USEROARAMS
    return (
        <div>
            <h2><FaBox /> product id:{id}</h2>
        </div>
    )
}

export default ProductDetailPage
