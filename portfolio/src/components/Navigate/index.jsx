import React from 'react'
import Brick from '../Share/Brick'
import './style.css'

export default function Navigate() {
  const handleClick = (param) => {
    //console.log('param is: ', param)
    if(param === 'archive'){
      document.getElementsByClassName(param)[0].scrollIntoView({behavior: 'smooth'})
    } else if (param === 'bio') {
      document.getElementsByClassName(param)[0].scrollIntoView({behavior: 'smooth'})
    } else if (param === 'experience') {
      document.getElementsByClassName(param)[0].scrollIntoView({behavior: 'smooth'})
    }

    }

  return (
    <>
      <div className='col' onClick={()=>{handleClick('bio')}}>
        <Brick></Brick>
        ABOUT
      </div>
      <div className='col' onClick={()=>{handleClick('experience')}}>
      <Brick></Brick>
        EXPERIENCE 
      </div>
      <div className='col' onClick={()=>{handleClick('archive')}}>
      <Brick></Brick>
        ARCHIVE
      </div>
    </>
  )
}



