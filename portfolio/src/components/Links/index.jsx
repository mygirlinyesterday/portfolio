import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import './style.css'

export default function Links() {
  return (
    <ul className='links' aria-label="Social media">
      <li className='list'>
        <FontAwesomeIcon icon={faGithub} className='tech'/>
      </li>
      <li className='list'>
        <FontAwesomeIcon icon={faEnvelope} className='tech'/>
      </li>
      <li className='list'>
        <FontAwesomeIcon icon={faLinkedin} className='tech'/>
      </li>
    </ul>
  )
}
