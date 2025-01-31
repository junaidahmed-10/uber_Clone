import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignUp = () => {

  const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [userData, setUserData] = useState({});

    const [vehicleColor, setVehicleColor] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');

    const { captain, setCaptain } = useContext(CaptainDataContext);
  
    const submitHandler = async (e) => {
      e.preventDefault()
      const captainData ={
        fullname: {
          firstname: firstname,
          lastname: lastname
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          vehicleType: vehicleType,
          capacity: vehicleCapacity,
          plate: vehiclePlate
        }
      }
      // console.log(userData);

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
      
      if(response.status === 201){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captainHome')
      }
  
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setVehicleColor('');
      setVehicleType('');
      setVehicleCapacity('');
      setVehiclePlate('')
    }

  return (
    <div className='p-7 flex justify-between flex-col h-screen'>
      <div className="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=""
          className='w-16 mb-10' />

        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-base font-medium mb-2'>What's your Captains Name</h3>
          <div className="flex gap-4 mb-5">
            <input required
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value)
                // console.log(e.target.value)
              }}
              className='bg-[#eeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:base'
              type="text" placeholder='First Nmae' />

            <input required
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              className='bg-[#eeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:base'
              type="text" placeholder='Last Name' />
          </div>
          <h3 className='text-base font-medium mb-5'>What's your Captain's Email</h3>
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

            <h3 className='text-base font-medium mb-5'>Vehicle Information</h3>
            <div className="flex gap-4 mb-5">
              <input required
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value)
                }}
                className='bg-[#eeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:base'
                type="text" placeholder='Vehicle Color' />

              <input required
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value)
                }}
                className='bg-[#eeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:base'
                type="text" placeholder='Vehicle Plate' />
            </div>
            <div className="flex gap-4 mb-5">
              <select required
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value)
                }}
                className='bg-[#eeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:base'>
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>

              <input required
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value)
                }}
                className='bg-[#eeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:base'
                type="number" placeholder='Vehicle Capacity' />
            </div>

          <button
            className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:base'
          >Create Account</button>
        </form>
        <p className='text-center'>Already a Captain? <Link to={'/captainLogin'} className='text-blue-700'>Captain Login</Link></p>

      </div>

      <div className="">
        {/* <Link to={'/captainLogin'}
          className='flex items-center justify-center bg-[#006300] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:base'
        >SignIn as Captain</Link> */}
      </div>
    </div>
  )
}

export default CaptainSignUp