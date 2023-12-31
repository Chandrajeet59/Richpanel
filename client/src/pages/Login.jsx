import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'

export default function Login() {

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = (e) => {
    e.preventDefault()
    axios.get('/')
  }
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type="email" placeholder='enter email' value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
        <label>Password</label>
        <input type="password" placeholder='enter password' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
        <button type="submit">Login</button>
        <label>New to MyApp?</label>
        <Link to="/register">Register</Link>
      </form>
    </div>
  )
}
