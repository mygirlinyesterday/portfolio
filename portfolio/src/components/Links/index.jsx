import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import './index.css'

export default function Links() {
  return (
    <div className='links'>
      <div></div>
      <div></div>
      <div>
        <FontAwesomeIcon icon={faGithub} className='github'/>
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} className='email'/>
      </div>
      <div>
        <FontAwesomeIcon icon={faLinkedin} className='linkedin'/>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}
