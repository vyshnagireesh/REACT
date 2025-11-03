import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds,setSecond] =useState(0);

    useEffect(()=>{
        const intervel = setInterval(()=>{
            setSecond((s)=> s+1);
        },1000)
        // setinervel creates a timer that runs every 1000 ,Milisecounds(1 secound)

        //cleanup function
        return()=> clearInterval(intervel);


    }, [])// empty dependacy - run once on mount
  return (
    <div>
      <p>Timer:{seconds} seconds</p>
    </div>
  )
}

export default Timer
