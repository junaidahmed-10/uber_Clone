import React from 'react'

const ConfirmedRide = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setConfirmedRidePanel(false)
            }}
                className='p-3 absolute top-0 w-full'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h2 className='text-2xl font-semibold mb-3'>Confirm Your Ride</h2>

            <div className="flex gap-2 flex-col justify-between items-center">
                <img className="h-20 rounded-full" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png" alt="" />
                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="ri-map-pin-5-fill"></i>
                        <div className="">
                            <h3 className='text-lg font font-medium'>235/74</h3>
                            <p className='text-sm text-gray-700 -mt-1'>{props.pickup}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div className="">
                            <h3 className='text-lg font font-medium'>235/74</h3>
                            <p className='text-sm text-gray-700 -mt-1'>{props.destination}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3">
                        <i className="ri-money-dollar-box-line"></i>
                        <div className="">
                            <h3 className='text-lg font font-medium'>₹.{props.fare[ props.vehicleType ]}/-</h3>
                            <p className='text-sm text-gray-700 -mt-1'>Cash</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    props.setVehicleFound(true)
                    props.setConfirmedRidePanel(false)
                    props.createRide()
                }}
                    className='w-full bg-green-500 text-white font-semibold p-2 rounded-lg mt-5'>Confirm</button>
            </div>
        </div>

    )
}

export default ConfirmedRide