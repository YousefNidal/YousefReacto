
import logo from '../Data/images/logo.png'

import {Link} from "react-router-dom"
import { navlink } from '../Data/dummyData'
import { Menu } from '@mui/icons-material'
import { useState } from 'react'




function Header() {

const [respons, setRespons] = useState(false)
  return (
    <>
    
    <header>
        <div className='container flexsb'>
            <div className='logo'>
                <a href="/"><img src={logo} alt="" /></a>
            </div>
            <div className= { respons ? 'hideMenu' : 'nav'}>
                {navlink.map((link, i) => (
                    <Link to={link.url} key={i}> {link.text}</Link>
                ))}
            </div>
            <button className='toggle' onClick={() => setRespons(!respons)

        }>
            <Menu className='icon'></Menu>
            </button>
        </div>
    </header>

    </>
  )
}

export default Header