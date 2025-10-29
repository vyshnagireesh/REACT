import React from 'react'

const Condition = () => {
    const isloggedIn = true;
  return (
    <div>
        <p>{isloggedIn ? "welcome back!" : "plase sign in."}</p>
      
    </div>
  )
}

export default Condition
