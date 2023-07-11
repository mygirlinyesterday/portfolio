import React from 'react'
import Position from '../Position'
import Timeline from '../Timeline'
import JobDetail from '../JobDetail'
import TechList from '../TechList'
import './style.css'

export default function Experience() {
  return (
        <li className='group-exp'>
            <div className='group-grid'>
              <div className='hover-shadow'></div>
                <Timeline></Timeline>
              <div className='experience-content'>
                <div className='head'>
                  <Position></Position>
                  <JobDetail></JobDetail>
                </div>
                <TechList techlist={['SQLserver','R','Data Warehouse']}></TechList>
              </div>
            </div>
        </li>
  )
}
