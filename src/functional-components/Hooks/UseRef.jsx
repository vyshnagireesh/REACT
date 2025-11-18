import React, {useState, useRef } from 'react'

const UseRef = () => {
    var playerRef = useRef();
    const [player,setPlayer] = useState("");

    function handleButtonClick(){
        setPlayer(playerRef.current.value)
        playerRef.current.value=""
    }
  return (
    <section id='player'>
<h2>Welcome to {player ?? "User"}</h2>
<p>
    <input ref={playerRef}btype="text" />
    <button onClick={handleButtonClick}>SetName</button>
</p>
    </section>
  );
}

export default UseRef