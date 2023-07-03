import React from 'react'
import Tech from '../../Share/Techs'

export default function TechList({techlist =[]}) {

  return (
    <div className='flex flex-wrap gap-2.5'>
      {techlist.map((e,i) => {
        return <div key={i}>
            <Tech param={e}></Tech>
          </div>
      })}
    </div>
  )
}
