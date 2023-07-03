import React from 'react'
import Position from './Position'
import Timeline from './Timeline'
import JobDetail from './JobDetail'
import TechList from './TechList'

export default function Background() {
  return (
    <div className=''>
        <div className='grid gap-10 grid-cols-[20%_80%] pb-10'>
          <div>
            <Timeline></Timeline>
          </div>
          <div className='grid gap-3'>
            <Position></Position>
            <JobDetail></JobDetail>
            <TechList techlist={['SQLserver','R','Data Warehouse']}></TechList>
          </div>
        </div>
        <div className='grid gap-10 grid-cols-[20%_80%] pb-10'>
          <div>
            <Timeline></Timeline>
          </div>
          <div className='grid gap-3'>
            <Position></Position>
            <JobDetail></JobDetail>
            <TechList techlist={['NodeJS','ReactJS','JavaScript']}></TechList>
          </div>
        </div>
        <div className='grid gap-10 grid-cols-[20%_80%] pb-10'>
          <div>
            <Timeline></Timeline>
          </div>
          <div className='grid gap-3'>
            <Position></Position>
            <JobDetail></JobDetail>
            <TechList techlist={['How To Sleep Well', 'Sleep Over Night']}></TechList>
          </div>
        </div>
    </div>
  )
}
