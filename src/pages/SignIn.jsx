import React from "react";
import { Form } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../store/profile/actions";

export function SignIn() {
  const [input, setInput] = useState({login: '', password: ''})
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.login === 'gb' && input.password === 'gb') {
      navigate('/')
      dispatch(auth(true))
    } else {
      setError('Login and password failed')
      setInput({login: '', password: ''})
    }
  }

  console.log(input)
  return (
    <>
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit}>
        <p>Login</p>
        <input 
          type="text"
          name="login"
          value={input.login}
          onChange={handleChange}
        />
        <p>Password</p>
        <input 
          type="text"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        <button>login</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p> }
    </>
  )
}