import React from 'react'

const VehiclePanel = (props) => {

    return (
        <div>
            <h5 onClick={() => props.setVehiclePanel(false)}
                className='p-3 absolute top-0 w-full'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h2 className='text-2xl font-semibold mb-3'>Choose a Vehicle</h2>
            <div onClick={() => {
                props.setConfirmedRidePanel(true)
            }}
                className="flex items-center justify-between w-full mb-2 p-3 border-2 active:border-black rounded-xl">
                <img className="h-12 rounded-full" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png" alt="" />
                <div className="w-1/2 ">
                    <h4 className='font-medium text-lg'>UberGO<span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 min away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$193</h2>
            </div>

            <div onClick={() => {
                props.setConfirmedRidePanel(true)
            }}
                className="flex items-center justify-between w-full mb-2 p-3 border-2 active:border-black rounded-xl">
                <img className="h-11 rounded-full" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className="w-1/2 ">
                    <h4 className='font-medium text-lg'>MOTO<span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>2 min away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable Bike rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$193</h2>
            </div>

            <div onClick={() => {
                props.setConfirmedRidePanel(true)
            }}
                className="flex items-center justify-between w-full mb-2 p-3 border-2 active:border-black rounded-xl">
                <img className="h-11 rounded-full" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className="w-1/2 ">
                    <h4 className='font-medium text-lg'>UberAuto<span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>2 min away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$193</h2>
            </div>
        </div>
    )
}

export default VehiclePanel