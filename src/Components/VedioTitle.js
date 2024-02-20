import React from 'react'

const VedioTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-gray-500 text-white p-4 w-10 px-16 text-lg opacity-15 rounded-md'>Play</button>
            {/* <button className='bg-gray-500 text-white p-4 w-10 px-16 text-lg opacity-15 rounded-md m-2'>More Info</button> */}
        </div>
    </div>
  )
}

export default VedioTitle