import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from './components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)


    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)',
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)',
            })
        }
    }, [finishRidePanel])


    return (
        <div className='h-screen'>

            <div className="fixed p-3 top-0 items-center justify-between w-screen flex">
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to={'/captainHome'} className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
                    <i className="text-lg font-bold ri-logout-box-r-fill"></i>
                </Link>
            </div>

            <div className="h-4/5">
                <img className='h-full w-full object-cover ' src="https://t3.ftcdn.net/jpg/07/28/30/26/360_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg" alt="" />
            </div>
            <div onClick={()=>{
                setFinishRidePanel(true)
            }}
            className="p-6 h-1/5 flex items-center justify-between bg-yellow-400 relative">
                <h5 onClick={() => {

                }}
                    className='p-1 text-center absolute top-0 w-[90%]'><i className="text-3xl text-gray-900 ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-semibold'>5KM</h4>
                <button className='bg-green-500 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>
            </div>

            <div ref={finishRidePanelRef} className="fixed w-full z-[500] bottom-0 h-screen translate-y-full bg-white p-3 py-10 pt-12">
                <FinishRide setFinishRidePanel={setFinishRidePanel}/>
            </div>
        </div>
    )
}

export default CaptainRiding