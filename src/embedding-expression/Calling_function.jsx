import React from 'react'

const Calling_function = () => {
  function getGreeting(name){
    return `hello ${name}`;
  }
  function Greeting(){
    return <h2>{getGreeting("vyshna")}</h2>
  }
  return (
    <div>
      <Greeting/>
      
    </div>
  )
}

export default Calling_function
