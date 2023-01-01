import React, { useState } from "react";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../store/profile/actions";
import { signUp } from "../services/firebase";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function SignUp() {
  const [input, setInput] = useState({email: '', password: ''})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signUp(input.email, input.password)    
      navigate('/signin')

    } catch (error) {
      setError(error.message)
      setInput({email: '', password: ''})
    } finally {
      setLoading(false)
    }
  }

  console.log(input)
  return (
    <>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <p>email</p>
        <input 
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <p>Password</p>
        <input 
          type="text"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        <button>email</button>
      </form>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      {error && <p style={{color: 'red'}}>{error}</p> }
    </>
  )
}