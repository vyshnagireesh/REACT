import React from 'react'
//state is a internal data store that belong to a specific component,and it can be change all time

const Usestate = () => {
    const [count, setCount] = Usestate(0); //initial value
    return (
        <div>
            <p> count: {count}</p>
            <button onClick={() => setCount(count + 1)}>increment</button>   

        </div>
    )
}

export default Usestate
