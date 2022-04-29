import React from 'react'
import {useState} from 'react';
import { Icon } from '@iconify/react';
import rules from './rules.png';

function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='footerCon'>
      <button onClick = {() => setShowModal(true)}> RULES </button>
      <div className='modal' style = {{ display : showModal ? 'block' :'none' }}>
          <div className='modalHeader'>
            <div>RULES</div>
            <button onClick = { () => setShowModal(false)}><Icon icon="ci:close-small" color="#e1e3ed"  width="30" /></button>
          </div>
          <div className='rulesImg'>
            <img src={rules} alt= 'rules' />
          </div>
        </div>
    </div>
  )
}

export default Footer