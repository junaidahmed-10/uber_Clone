import React, { useRef, useState, useEffect } from 'react'
import { useContext } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import axios from 'axios'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'
import { useNavigate } from 'react-router-dom'
import { SocketContext } from '../context/SocketContext'
import { UserDataContext } from '../context/UserContext.jsx'


const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const confirmedRidePanelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanelRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const [pickupSuggestions, setPickupSuggestions] = useState([])
  const [destinationSuggestions, setDestinationSuggestions] = useState([])
  const [activeField, setActiveField] = useState(null)
  const [fare, setFare] = useState({})
  const [ride, setRide] = useState(null)
  const [vehicleType, setVehicleType] = useState(null)

  // const {sendMessa}

  const navigate = useNavigate()

  const { socket } = useContext(SocketContext)
  const { user } = useContext(UserDataContext)

  useEffect(() => {
    socket.emit("join", { userType: "user", userId: user._id })
    console.log('user', user);
    
  }, [user])

  socket.on('ride-confirmed', ride => {


    setVehicleFound(false)
    setWaitingForDriver(true)
    setRide(ride)
  })

  socket.on('ride-started', ride => {
    console.log("ride")
    setWaitingForDriver(false)
    navigate('/riding', { state: { ride } }) // Updated navigate to include ride data
  })


  const handlePickupChange = async (e) => {
    setPickup(e.target.value)
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/getSuggestions`, {
        params: { input: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }

      })
      setPickupSuggestions(response.data)
    } catch {
      // console.log('error', error.message);

      // handle error
    }
  }

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value)
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/getSuggestions`, {
        params: { input: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setDestinationSuggestions(response.data)
    } catch {
      // handle error
      // console.log('error', error.message);
    }
  }


  const submitHandler = (e) => {
    e.preventDefault()
    // console.log('Form submitted')
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: '24px',
        // opacity:1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: '24px'
        // opacity:0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehiclePanel])

  useGSAP(function () {
    if (confirmedRidePanel) {
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmedRidePanel])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehicleFound])

  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [waitingForDriver])


  async function findTrip() {
    setVehiclePanel(true)
    setPanelOpen(false)

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/getFare`, {
      params: { pickup, destination },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })


    setFare(response.data)
    console.log(response.data);



  }

  async function createRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
      pickup,
      destination,
      vehicleType
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    // console.log(response.data);

  }



  return (
    <div className='h-screen relative overflow-hidden'>
      <img className="left-5 top-5 w-16 absolute" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className="h-screen w-screen">
        <img className="h-full w-full object-cover" src="https://t3.ftcdn.net/jpg/07/28/30/26/360_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg" alt="" />  {/*image for temporary use*/}
      </div>
      <div className="absolute h-screen flex flex-col justify-end top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className='opacity-0 absolute top-6 right-6 text-xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='w-full font-semibold text-2xl'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('pickup')
              }}
              value={pickup} onChange={handlePickupChange}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5" type="text" placeholder='Add a pickup location' />
            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('destination')
              }}
              value={destination} onChange={handleDestinationChange}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3" type="text" placeholder='Enter your destination' />
            <button
              onClick={findTrip}
              className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
              Set Trip
            </button>
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>

      <div ref={vehiclePanelRef}
        className="fixed z-10 bottom-0 px-3 py-10 bg-white w-full translate-y-full pt-12">
        <VehiclePanel
          setVehiclePanel={setVehiclePanel}
          setConfirmedRidePanel={setConfirmedRidePanel}
          selectVehicle={setVehicleType}
          fare={fare}
        />
      </div>
      <div ref={confirmedRidePanelRef}
        className="fixed z-10 bottom-0 px-3 py-6 bg-white w-full translate-y-full pt-12">
        <ConfirmedRide
          setConfirmedRidePanel={setConfirmedRidePanel}
          setVehicleFound={setVehicleFound}
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
        />
      </div>
      <div ref={vehicleFoundRef}
        className="fixed z-10 bottom-0 px-3 py-6 bg-white w-full translate-y-full pt-12">
        <LookingForDriver
          setVehicleFound={setVehicleFound}
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType} />
      </div>
      <div ref={waitingForDriverRef}
        className="fixed z-10 bottom-0 px-3 py-6 bg-white w-full translate-y-full pt-12">
        <WaitingForDriver waitingForDriver={waitingForDriver}
          ride={ride}
          setVehicleFound={setVehicleFound}
          setWaitingForDriver={setWaitingForDriver}
        />
      </div>
    </div>
  )
}

export default Home