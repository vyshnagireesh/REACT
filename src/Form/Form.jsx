import React, { useState } from 'react'
import './form.css'
import { RiEyeCloseFill } from 'react-icons/ri';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmpassword: '',
        gender: ''

    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const validate = () => {
        const newErrors = {};
        const { name, email, age, password, confirmpassword, gender } = formData

        if (!name.trim()) newErrors.name = 'Name is required';

        if (!email) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email is invalid";



        if (!age) newErrors.age = "Age is reqired";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must not be between 1 and 120";

        if (!password) newErrors.password = "password is required";
        else if (password.length < 6) newErrors.password = " Password must be atleast 6 characters";

        if (!confirmpassword) newErrors.confirmpassword = "please confirm your password";
        else if (password !== confirmpassword) newErrors.confirmpassword = "password do not match";

        if (!gender) newErrors.gender = "Gender is required";
        return newErrors;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate();
        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);

        } else {
            
            setErrors({});
            alert("form submitted successfully");
            console.log('Form Data', formData);

            setFormData({
                name: '',
                email: '',
                age: '',
                password: '',
                confirmpassword: '',
                gender: ''


            })

        }


        
    }

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Name' />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div>
                <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='email' />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>

            <div>
                <input type="text" name='age' value={formData.age} onChange={handleChange} placeholder='Age' />
                {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
            </div>

            <div>
                <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder='password' />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

            <div>
                <input type="password" name='confirmpassword' value={formData.confirmpassword} onChange={handleChange} placeholder='confirmpassword' />
                {errors.confirmpassword && <p style={{ color: 'red' }}>{errors.confirmpassword}</p>}
            </div>

            <div>
                <label>
                    <input type="radio" name='gender' value='male' onChange={handleChange} checked={formData.gender === 'male'} />
                    Male
                </label>

                <label>
                    <input type="radio" name='gender' value='female' onChange={handleChange} checked={formData.gender === 'female'} />
                    female

                </label>

                <label>
                    <input type="radio" name='gender' value='other' onChange={handleChange} checked={formData.gender === 'other'} />
                    other

                </label>
                {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form