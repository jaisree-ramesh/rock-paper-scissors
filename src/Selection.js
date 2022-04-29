import React from 'react'
import { Icon } from '@iconify/react';

function Selection( {setToggleGameView, selectionArray, setUserSelection}) {

   
  return (
    <div className='selCon'>
    { selectionArray.map ((item, index) => (
        <button className={item.name} onClick= { () => { setUserSelection(item); setToggleGameView(true); }}>
            <div className='icon'>
                <Icon icon={item.icon} color="#1f3756"  width="70"/>
            </div>
        </button>
    ))

    }
    </div>
  )
}

export default Selection