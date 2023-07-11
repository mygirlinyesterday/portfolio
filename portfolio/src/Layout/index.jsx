import React from 'react'
import Name from '../components/Name'
import AboutMe from "../components/AboutMe";
import Background from "../components/Background";
import Archive from "../components/Archive";
import Links from "../components/Links";
import Nav from '../components/Navigate';
import './style.css'

export default function Layout() {
  return (
    <div className='main-container'>
      <div className='content'>
        <div className='header'>
            <div className='col1'>
              <div className='name'><Name></Name></div>
              <div className='nav'><Nav></Nav></div>
            </div>
            <Links></Links>
        </div>
        <div className='col2'>
            <div className='bio'><AboutMe></AboutMe></div>
            <div className='experience'><Background></Background></div>
            <div className='archive'><Archive></Archive></div>
            <div className='detail'><Archive></Archive></div>
        </div>
      </div>
    </div>
  )
}
