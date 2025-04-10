import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [data, setData] = useState([])

  const login = () => {
    axios.get('https://backend-7iwt.onrender.com/user/get')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log("Error" + err)
      })

      const users = data.find((i)=>i.UserName === username && i.PassWord === password )

      if (users) {
        
        alert("login successfully")
        setusername("")
        setpassword("")
      } else {
        alert("Chack your Inputs")
        
      }

  }


  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form>
          <div className='mb-3'>
            <label htmlFor="username"><b>Username</b></label>
            <input type="text" placeholder='Username' className='form-control rounded-0' value={username} name="username" onChange={(e) => setusername(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder='Password' minLength={'8'} maxLength={'20'} value={password} name="password" className='form-control rounded-0' onChange={(e) => setpassword(e.target.value)} />
          </div>
        </form>
        <div className='d-flex'>
          <p>Already Have an Account?</p> &nbsp;<a href="/register">SignUp</a>
          <Link to="/login" className='btn btn-success border w-100 rounded-0 text-decoration-none' onClick={login}>Login</Link>
        </div>
      </div>
    </div>
  )
}
