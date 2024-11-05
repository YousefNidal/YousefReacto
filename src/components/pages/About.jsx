

import React from 'react'
import { about } from '../Data/dummyData'
import Heading from '../common/Heading'

function About() {
  return (
    <>
    
    <section className='about'>
    <div className="container flex">
        {
            about.map((val,i) => (
                <span key={i}>
                
                <div className="left">
                    <img src={val.cover} alt="" />
                </div>
                <div className="right">
                    <Heading title='About Me' />
                    <p>{val.desc}</p>
                    <p>{val.desc1}</p>
                    <button>Download CV</button>
                    <button className='primaryBtn'>Download CV</button>

                </div>
                </span>
            ))
        }
    </div>
        </section>
    
    </>
  )
}

export default About