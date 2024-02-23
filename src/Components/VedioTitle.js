import React from 'react'

const VedioTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-white'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-black text-white p-4 px-12 text-xl  rounded-md hover:bg-opacity-80'>Play</button>
            <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-md m-2'>More Info</button>
        </div>
    </div>
  )
}

export default VedioTitle