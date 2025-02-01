import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setRidePopUpPanel(false)
            }}
                className='p-3 absolute top-0 w-full'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold'>New Ride Available</h3>
            <div className="flex items-center justify-between mt-4  p-3 bg-yellow-400 rounded-xl">
                <div className="flex items-center gap-3">
                    <img className="h-10 w-10 rounded-full object-cover" src="https://triplogmileage.com/wp-content/uploads/2023/02/uber-driver-looking-out-of-their-window.jpg" alt="" />
                    <h2 className='text-lg font-medium'>leonel messi</h2>
                </div>
                <h5>2.2 km</h5>
            </div>

            <div className="flex gap-2 flex-col justify-between items-center">
                {/* <img className="h-20 rounded-full" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png" alt="" /> */}
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
                <div className="flex items-center justify-between w-full mt-5">
                <button onClick={() => {
                        props.setRidePopUpPanel(false)
                    }}
                        className='bg-gray-500 text-white font-semibold p-2 px-4 rounded-lg'>Ignore</button>

                    <button onClick={() => {
                        props.setConfirmRidePopUpPanel(true)
                    }}
                        className='bg-green-500 text-white font-semibold p-2 px-4 rounded-lg'>Accept</button>
                    
                </div>
            </div>
        </div>
    )
}

export default RidePopUp