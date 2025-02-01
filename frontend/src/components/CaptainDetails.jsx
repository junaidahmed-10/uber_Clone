import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img className="h-10 w-10 rounded-full object-cover" src="https://triplogmileage.com/wp-content/uploads/2023/02/uber-driver-looking-out-of-their-window.jpg" alt="" />
            <h4 className='text-lg font-medium'>Harsh Patel</h4>
          </div>
          <div className="">
            <h4 className='text-xl font-semibold'>$200</h4>
            <p className='text-sm bg-gray-600'>Earned</p>
          </div>
        </div>
        <div className="flex items-start justify-center gap-5 p-6 bg-gray-100 rounded-xl mt-8">
          <div className="text-center">
            <i className="text-3xl mb-2 font-extralight ri-timer-2-fill"></i>
            <h5 className='text-lg font-medium'>10.2 hours</h5>
            <p className='text-sm text-gray-600'>online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-extralight ri-speed-up-line"></i>
            <h5 className='text-lg font-medium'>10.2 hours</h5>
            <p className='text-sm text-gray-600'>online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-extralight ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10.2 hours</h5>
            <p className='text-sm text-gray-600'>online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails