import React from 'react'
import Experience from './Experience'
import './style.css'

export default function Background() {
  return (
    <div>
      <ol className='background'>
        <Experience />
        <Experience />
        <Experience />
      </ol>
    </div>
  )
}
