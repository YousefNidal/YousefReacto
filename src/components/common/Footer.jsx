import React from 'react'
import {social} from '../Data/dummyData'

const Footer = () => {
  return (
    <>
    

        <footer>
            {social.map((item)=> (
                <>
                <i>{item.icon}</i>
                </>
            ))}
            <p>All Rights Rescved 2024</p>
        </footer>

    
    </>
  )
}

export default Footer