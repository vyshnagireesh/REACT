import React from 'react'

const ReakWorld = () => {

    const products = [
        {id:'p1', name:'i-shirt'},
        {id:'p2', name:'jeans'}
    ]
  return (
    <div>
      <ul>
        {products.map(prdt=>(
            <li key={prdt.id}>{prdt.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ReakWorld
