import React from 'react'

const Items = () => {

    const ifruitsItems = ['Apple','Banana','orange'];

    return (
    <div>
      <ul>
        {ifruitsItems.map((Itm, index) => (
             <li key={index}>{Itm}</li>
        ))}
      </ul>
    </div>
  )
}

export default Items