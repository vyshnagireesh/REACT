import React, { useEffect, useState } from 'react'

const RunEffectChange = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`Count changed to ${count}`);
    }, [count]); //run only when count changes
  return (
    <div>
       <h2>Count: {count}</h2>
       <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default RunEffectChange