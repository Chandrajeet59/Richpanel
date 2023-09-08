import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react'

export default function Integrate() {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
      })
    
      const integrateUser = (e) => {
          e.preventDefault()
      }
    
  return (
    <div>
        <form onSubmit={integrateUser}>
        <label>Email</label>
        <input type="email" placeholder='enter email' value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
        <label>Password</label>
        <input type="password" placeholder='enter password' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
        <label>Remember Me</label>
        <input type="checkbox" />
        <Link to="/dashboard">Integrate</Link>
      </form>
    </div>
  )
}
