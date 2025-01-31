import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import {UserDataContext} from '../context/UserContext'

const UserSignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  return (
    <div className='p-7 flex justify-between flex-col h-screen'>
      <div className="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=""
          className='w-16 mb-10' />
        <form onSubmit={(e) => {
          submitHandler(e)
        }} action="">
          <h3 className='text-base font-medium mb-2'>What's your email</h3>
          <div className="flex gap-4 mb-5">
            <input required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
                // console.log(e.target.value)
              }}
              className='bg-[#eeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:base'
              type="text" placeholder='First Nmae' />

            <input required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              className='bg-[#eeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:base'
              type="text" placeholder='Last Name' />
          </div>
          <h3 className='text-base font-medium mb-5'>What's your email</h3>
          <input required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              // console.log(e.target.value)
            }}
            className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:base'
            type="email" placeholder='email@example.com' />
          <h3 className='text-base font-medium mb-5'>Enter Password</h3>
          <input required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              // console.log(e.target.value)
            }}
            className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:base'
            type="password" placeholder='password' />
          <button
            className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:base'
          >SignUp</button>
        </form>
        <p className='text-center'>Already have an Account?<Link to={'/login'} className='text-blue-700'>Login</Link></p>

      </div>

      <div className="">
        <Link to={'/captainLogin'}
          className='flex items-center justify-center bg-[#006300] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:base'
        >SignIn as Captain</Link>
      </div>
    </div>
  )
}

export default UserSignUp