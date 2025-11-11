import React, { useState } from 'react'

const SimpleForm = () => {
    const [email,setEmail]= useState('');
    const [error,setError] = useState('');
    const handlesubmit =(e)=>{
        e.preventDefault();

    if (!email){
        setError('Email is required')

        }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/){
            setError("email is invalid")

            }else {
                setError('');
                alert('form sunmitted successfully');
                console.log('form submitted',email);
                
            }
    }

  return (
    <form onSubmit={handlesubmit}>
        <input
         type="email" 
         value={email} 
         placeholder='Enter your email'
         onChange={(e)=> setEmail(e.target.value)}
         />
         {error && <p style={{color:'red'}}>{error}</p>}
        <button type='submit'>submit</button>
      
    </form>
  )
}

export default SimpleForm
