import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>

        <Link to={'/home'} className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-bold ri-home-7-fill"></i>
        </Link>

        <div className="h-1/2">
            <img className='h-full w-full object-cover ' src="https://t3.ftcdn.net/jpg/07/28/30/26/360_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg" alt="" />
        </div>

        <div className="h-1/2">

        <div className="flex items-center justify-between p-4">
        <img className="h-20 rounded-full" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png" alt="" />
        <div className="text-right ">
          <h2 className='text-lg font-medium'>drivers name</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH 19 BD 2362</h4>
          <p className='text-sm text-gray-600'>toyota fortuner</p>
        </div>
      </div>

      <div className="flex gap-2 flex-col justify-between items-center">

        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div className="">
              <h3 className='text-lg font font-medium'>235/74</h3>
              <p className='text-sm text-gray-700 -mt-1'>sea face bandra, mannat</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-money-dollar-box-line"></i>
            <div className="">
              <h3 className='text-lg font font-medium'>$198/-</h3>
              <p className='text-sm text-gray-700 -mt-1'>Cash</p>
            </div>
          </div>
        </div>
      </div>

        <button className='w-full bg-green-500 text-white font-semibold p-2 rounded-lg mt-3'>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding