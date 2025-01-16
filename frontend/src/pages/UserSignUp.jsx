import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      userName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })
    console.log(userData);
    

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
          >Login</button>
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