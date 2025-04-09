import React, { useState } from 'react'
import axios from 'axios'

// CONSTANT
import URLS from '../../utils/constants/Api'
import { REGISTER_FIELDS } from '../../utils/configs/FormFields'

const Register = () => {
  
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  })

  // HandleChange
  const handleChange = event => {
    const { name, value } = event.target
    setUser(prevUser => ({...prevUser, [name]: value }))
  }

  // HandleSubmit
  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post(URLS.POST_REGISTER, user)
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      Register
      <form onSubmit={handleSubmit}>
        {REGISTER_FIELDS.map(field => ( 
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
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register