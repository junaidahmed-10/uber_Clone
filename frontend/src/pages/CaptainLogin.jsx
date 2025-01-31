import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogin = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { captain, setCaptain } = useContext(CaptainDataContext)


  const submitHandler = async (e) => {
    e.preventDefault()
    const captain = {
      email: email,
      password
    }
    // console.log(userData);

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)
    // console.log(email, password)

    if (response.status === 200) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captainHome')
    }
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 flex justify-between flex-col h-screen'>
      <div className="">
        <img src="https://pngimg.com/d/uber_PNG24.png" alt=""
          className='w-16 mb-3' />
        <form onSubmit={(e) => {
          submitHandler(e)
        }} action="">
          <h3 className='text-lg font-medium mb-2'>What's your Captain's Email</h3>
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
        <p className='text-center'>join a fleet? <Link to={'/captainSignup'} className='text-blue-700'>Register as a Captain</Link></p>

      </div>

      <div className="">
        <Link to={'/login'}
          className='flex items-center justify-center bg-[#f1d284] text-black font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:base'
        >SignIn as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin