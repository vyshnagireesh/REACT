import React, { useEffect } from 'react'

const RunEffectOnlyOnce = () => {
    useEffect(() => {
        console.log("Component mounted!");
    }, []); //empty dependency array
    
  return <h2>Runs only once when mounted!</h2>;
}

export default RunEffectOnlyOnce