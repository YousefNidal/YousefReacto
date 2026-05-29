import React from 'react'
import {social} from '../Data/dummyData'

const Footer = () => {
  return (
    <>
    

        <footer>
            {social.map((item,i)=> (
                
                <i key={i}>{item.icon}</i>
                
            ))}
            <p>All Rights Reserved 2026. Created by Yousef Nidal.</p>
        </footer>

    
    </>
  )
}

export default Footer