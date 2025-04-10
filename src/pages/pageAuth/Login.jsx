import React, { useState, useContext } from 'react'

// CONSTANTS
import { LOGIN_FIELDS } from '../../utils/configs/FormFields'

// CONTEXTE
import { AuthContext } from '../../utils/context/AuthContext'

const Login = () => {

  const [user,setUser]= useState({})
  const { login } = useContext(AuthContext) 

    // HandleChange
    const handleChange = event => {
      const { name, value } = event.target
      setUser(prevUser => ({...prevUser, [name]: value }))
    }
    
    const handleSubmit = event => {
      event.preventDefault()
      login(user)
    }

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit} >
        {LOGIN_FIELDS.map(field => (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            <input 
              type={field.type}
              name={field.name}
              id={field.id}
              placeholder={field.placeholder}
              onChange={handleChange}
            />
          </div>
        ))}
          <button>Login</button>
        
      </form>

    </div>
  )
}

export default Login