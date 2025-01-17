import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

const {user, setUser} = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    
    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      navigate('/home')
      
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 flex justify-between flex-col h-screen'>
      <div className="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=""
          className='w-16 mb-10' />
        <form onSubmit={(e) => {
          submitHandler(e)
        }} action="">
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              // console.log(e.target.value)
            }}
            className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:base'
            type="email" placeholder='email@example.com' />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input required
            className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:base'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              // console.log(e.target.value)
            }}
            type="password" placeholder='password' />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:base'
          >Login</button>
          </form>
          <p className='text-center'>new here ?<Link to={'/signup'} className='text-blue-700'>Create new Account</Link></p>
        
      </div>

      <div className="">
        <Link to={'/captainLogin'}
          className='flex items-center justify-center bg-[#006300] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:base'
        >SignIn as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin