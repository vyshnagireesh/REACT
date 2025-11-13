import React, { useEffect, useState } from 'react'
import './crud.css'

const Crud = () => {

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        age: '',
    })

    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState({});
    const [isloading, setIsLoading] = useState(false);

    //load users from localstorage
    useEffect(() => {
        const stored = localStorage.getItem("users");
        if(stored){
            try{
                const parsedUser = JSON.parse(stored);
                setUsers(parsedUser);

            } catch(error) {
                console.error("Error parsing data", error);
                localStorage.removeItem("users");//clear corrupted data
            }
        }
        setIsLoading(true); //mark as load
    },[])

    //save users to localstorage
    useEffect(() => {
        if(isloading)
            localStorage.setItem("users",JSON.stringify(users))
    },[users, isloading])
  

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData(prev => ({
            ...prev,
            [name]:value
        }))
    }

    //validation
    const validate = () =>{
        const newErrors = {};
        const {name, email, age} =formData;

        if(!name.trim()) newErrors.name = 'Name is required!';

        if(!email.trim()) newErrors.email = 'Email is required';
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.age = "email is validate";

        if(!age.trim()) newErrors.age = 'age is required';
        else if(isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must be between 1 and 120"
        

        return newErrors;
    }

    //form submission
    const handleSubmit = (e) => {
        e. preventDefault();
        const validateErrors =  validate();

        if(Object.keys(validateErrors).length > 0){
            setError(validateErrors);
            return;
        }

        if (editMode){
        setUsers(users.map(user => user.id === formData.id ? formData : user));
        setEditMode(false);
        } else {
            const newUser = {...formData, id:Date.now().toString()};
            setUsers([...users, newUser])
        }

        setFormData({
             id: '',
             name: '',
             email: '',
             age: '',
        });

        setError({});
    }

    const handleEdit = (us) => {
        setFormData(us);
        setEditMode(true);
    }

    const handleCancel = () => {
        setFormData({id:'',name:'',email:'', age:''});
        setEditMode(false);
        setError({})
    }

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }

    const handleClearAll = () => {
        if(window.confirm('Are you sure you want to clear all data? this section cannot be undone.')){
        setUsers([]);
        localStorage.removeItem("users");
        //also clear the form if in edit mode
        if(editMode){
            setFormData({id:'',name:'', age:'', email:''});
            setEditMode(false);
            setError({});
        }
        }
    }

  return (
    <div className='fornew'>
       <h1>React CURD -Simple Form</h1>
       <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
            <input type="text" name='name' onChange={handleChange} value={formData.name} placeholder='Your name' />
            {error.name && <p style={{color:'red'}}>{error.name}</p>}
        </div>

        {/* email */}
        <div>
            <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Your email' />
             {error.email && <p style={{color:'red'}}>{error.email}</p>}
        </div>
        {/* age */}
        <div>
            <input type="number" name='age' value={formData.age} onChange={handleChange} placeholder='Your age' />
             {error.age && <p style={{color:'red'}}>{error.age}</p>}
        </div>
        <button type='submit'>{editMode ? 'Update User' : 'Add User'}</button>
       {editMode && (
        <button type='button' onClick={handleCancel} style={{marginLeft:'10px'}}>cancel</button>
       )}
       </form>

       <hr />
       <div style={{display:'flex', justifyContent:'space-between',alignItems:'center',marginBottom:'10px'}}>
        <h2>User List</h2>
        {/* clear data items */}
        {users.length > 0 && (
            <button onClick={handleClearAll}
            style={{
                background: '#dc345',
                color:'white',
                border:'none',
                padding:'8px 12px',
                borderRadius:'4px',
                cursor:'pointer',
                marginLeft:'30px'
            }}>Clear All data</button>
        )
        }
       </div>

       {users.length > 0 ? (
        <table>
           <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
           </thead>
           <tbody>
            {users.map(us => (
                <tr key={us.id}>
                    <td>{us.name}</td>
                    <td>{us.email}</td>
                    <td>{us.age}</td>
                    <td>
                        <button onClick={() => handleEdit(us)}>Edit</button>
                        <button onClick={() => handleDelete(us.id)} style={{marginLeft:'10px'}}>Delete</button>
                    </td>

                </tr>
            ))}
           </tbody>
        </table>
       ):(
          <p>No users added yet.</p>
       )}
    </div>
  )
}

export default Crud