import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'


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
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)

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
    if (vehiclePanel) {
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
              onClick={() => setPanelOpen(true)}
              value={pickup} onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5" type="text" placeholder='Add a pickup location' />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination} onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3" type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef}
          className="h-0 bg-white">
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed z-10 bottom-0 px-3 py-10 bg-white w-full translate-y-full pt-12">
        <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmedRidePanel={setConfirmedRidePanel} />
      </div>
      <div ref={confirmedRidePanelRef} className="fixed z-10 bottom-0 px-3 py-6 bg-white w-full translate-y-full pt-12">
        <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className="fixed z-10 bottom-0 px-3 py-6 bg-white w-full translate-y-full pt-12">
        <LookingForDriver />
      </div>
    </div>
  )
}

export default Home