import React from 'react'
import TechList from '../../Background/TechList'


export default function Projects({data, techlist}) {


  return (
    <div className='grid grid-cols-[20%_80%] gap-10 pb-10 pr-10'>
        <div className=''>
                <img className='rounded-lg' src={data.pro_img} alt={data.pro_img} />
        </div>
        <div className='grid gap-3 pr-4'>
            <div>
                <h1><b>{data.pro_name}</b></h1>
            </div>
            <div>
                {data.pro_detail}
            </div>
            <div className=''>
                <TechList techlist={data.pro_tech}></TechList>
            </div>
        </div>

    </div>
    
  )
}
