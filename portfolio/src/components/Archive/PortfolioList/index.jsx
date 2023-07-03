import React from 'react'
import Projects from '../../Share/Projects'


export default function Portfolio({portfolio=[]}) {

  return (
   <div className='flex flex-wrap'>
        {portfolio.map((e,i) => {
            return <div key={i}>
                <Projects data={e}></Projects>
              </div>
        })}
   </div>
  )
}
