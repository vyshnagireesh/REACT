import React from 'react'

const Rendaringlist = () => {
    const fruits = ["apple", "banana", "mango"]
    return (
        <div>
            <ul>
                 {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}

            </ul>
           

        </div>
    )
}

export default Rendaringlist
