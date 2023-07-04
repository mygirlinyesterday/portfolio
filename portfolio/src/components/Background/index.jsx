import React from 'react'
import Position from './Position'
import Timeline from './Timeline'
import JobDetail from './JobDetail'
import TechList from './TechList'

export default function Background() {
  return (
    <div className='background'>
        <div className='grid  grid-cols-[20%_80%] pb-10'>
          <div>
            <Timeline></Timeline>
          </div>
          <div className='experience-content grid gap-3 pr-4'>
            <Position></Position>
            <JobDetail></JobDetail>
            <TechList techlist={['SQLserver','R','Data Warehouse']}></TechList>
          </div>
        </div>
        <div className='grid grid-cols-[20%_80%] pb-10'>
          <div>
            <Timeline></Timeline>
          </div>
          <div className='experience grid gap-3 pr-4'>
            <Position></Position>
            <JobDetail></JobDetail>
            <TechList techlist={['NodeJS','ReactJS','JavaScript']}></TechList>
          </div>
        </div>
        <div className='grid grid-cols-[20%_80%] pb-10'>
          <div>
            <Timeline></Timeline>
          </div>
          <div className='experience grid gap-3 pr-4'>
            <Position></Position>
            <JobDetail></JobDetail>
            <TechList techlist={['How To Sleep Well', 'Sleep Over Night']}></TechList>
          </div>
        </div>
    </div>
  )
}
