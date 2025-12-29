import React, { useState } from 'react'

const Textinput = () => {
    const [name, setName] = useState('');
  return (
    <div>
       <input type="text"
       placeholder='Enter your name'
       value={name}
       onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, {name || 'gysss'}!</p>
    </div>
  )
}

export default Textinput