import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import './index.css'

export default function Links() {
  return (
    <ul className='links'>
      <li></li>
      <li>
        <FontAwesomeIcon icon={faGithub} className='github'/> 
      </li>
      <li>
        <FontAwesomeIcon icon={faEnvelope} className='email'/>
      </li>
      <li>
        <FontAwesomeIcon icon={faLinkedin} className='linkedin'/>
      </li>
    </ul>
  )
}
