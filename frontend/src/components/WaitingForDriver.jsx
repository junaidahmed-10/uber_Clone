import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 onClick={() => props.waitingForDriver(false)}
        className='p-3 absolute top-0 w-full'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
      <div className="flex items-center justify-between">
        <img className="h-20 rounded-full" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png" alt="" />
        <div className="text-right">
          <h2 className='text-lg font-medium'>drivers name</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH 19 BD 2362</h4>
          <p className='text-sm text-gray-600'>toyota fortuner</p>
        </div>
      </div>

      <div className="flex gap-2 flex-col justify-between items-center">

        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-5-fill"></i>
            <div className="">
              <h3 className='text-lg font font-medium'>235/74</h3>
              <p className='text-sm text-gray-700 -mt-1'>sea face bandra, mannat</p>
            </div>
          </div>
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
    </div>
  )
}

export default WaitingForDriver