import React from 'react'

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
      <div onClick={()=>{handleClick('bio')}}>
        ABOUT
      </div>
      <div onClick={()=>{handleClick('experience')}}>
        EXPERIENCE 
      </div>
      <div onClick={()=>{handleClick('archive')}}>
        ARCHIVE
      </div>
    </>
  )
}



