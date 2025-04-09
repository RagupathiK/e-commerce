import React, { useState } from 'react'
import axios from 'axios'

export default function SignUp() {
    const [name, setname]=useState("")
    const [username, setusername]=useState("")
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")


    const handlesubmit =(e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/user/post', {name,username,email,password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        alert("Registered data")
    } 

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100' style={{backgroundColor:"yellow"}}>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Register</h2>
                <form onSubmit={handlesubmit}>
                    <div className='mb-3'>
                        <label htmlFor="username"><b>Name</b></label>
                        <input type="text" placeholder='Name' value={name} name='name' className='form-control rounded-0' onChange={(e) => setname(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="username"><b>Username</b></label>
                        <input type="text" placeholder='Username' value={username} name='user' className='form-control rounded-0' onChange={(e)=> setusername(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="mail" placeholder='Email' value={email} name='email' className='form-control rounded-0' onChange={(e)=> setemail(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" placeholder='Password' value={password} name='password' minLength={'8'} maxLength={'20'} className='form-control rounded-0' onChange={(e)=> setpassword(e.target.value)}/>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
                </form>
                <div className='d-flex'>
                    <p>Already Have an Account?</p> &nbsp; <a href="/login"> Login</a>
                </div>
            </div>
        </div>
    )
}
