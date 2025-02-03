import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainHome = () => {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const ridePopUpPanelRef = useRef(null)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)
  const confirmRidePopUpPanelRef = useRef(null)

  useGSAP(function () {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [ridePopUpPanel])

  useGSAP(function () {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePopUpPanel])

  
  return (
    <div className='h-screen'>
      <div className="fixed p-3 top-0 items-center justify-between w-screen flex">
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to={'/captainHome'} className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
          <i className="text-lg font-bold ri-logout-box-r-fill"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img className='h-full w-full object-cover ' src="https://t3.ftcdn.net/jpg/07/28/30/26/360_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg" alt="" />

      </div>

      <div className="h-2/5 p-6">  {/* ""*/}
        <CaptainDetails />
      </div>

      <div ref={ridePopUpPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-10 pt-12">
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>

      <div ref={confirmRidePopUpPanelRef} className="fixed w-full z-10 bottom-0 h-screen translate-y-full bg-white p-3 py-10 pt-12">
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome