import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = (props) => {


  console.log(props);

  const locations = [
    "203,B14, R euphoria,Near Fire Station, kondhwa, pune",
    "204,B14, R euphoria,Near Fire Station, kondhwa, pune",
    "205,B14, R euphoria,Near Fire Station, kondhwa, pune",
    "206,B14, R euphoria,Near Fire Station, kondhwa, pune"
  ]

  return (
    <div>

      {
        locations.map(function (element, index) {
          return <div key={index}
            onClick={() => {
              props.setVehiclePanel(true)
              props.setPanelOpen(false)
            }}
            className="flex items-center justify-start gap-4 my-2 border-2 p-3 rounded-xl border-gray-200 active:border-black">
            <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
            <h4 className='font-medium'>{element}</h4>
          </div>
        }
        )
      }
    </div>
  )
}

export default LocationSearchPanel