import React from 'react'

export default function Tech({param}) {

  return (
    <>
        <div className='mb-1'>
            <span className='bg-teal-400/10 text-teal-300 rounded-lg py-2 px-4 text-xs'>{param}</span>
        </div>
    </>
  )
}
