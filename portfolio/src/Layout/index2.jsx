import React from 'react'
import Name from '../components/Name'
import AboutMe from "../components/AboutMe";
import Background from "../components/Background";
import Archive from "../components/Archive";
import Links from "../components/Links";
import './style.css'

export default function Layout() {
  return (
    <div className='main-container'>
        <div className='col1'>
            <div className='colleft'>
              <div className='name'><Name></Name></div>
              <div className='nav'><Name></Name></div>
              <div className='link'><Links></Links></div>
            </div>
        </div>
        <div className='col2'>
            <div className='bio'><AboutMe></AboutMe></div>
            <div className='experience'><Background></Background></div>
            <div className='archive'><Archive></Archive></div>
            <div className='detail'><Archive></Archive></div>
        </div>
    </div>
  )
}
