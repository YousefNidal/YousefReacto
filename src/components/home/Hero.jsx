import React from 'react';
import { home } from '../Data/dummyData';
import Typewriter from 'typewriter-effect';
import {
  
    Link
} from "react-router-dom"

function Hero() {
  

  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContainer' key={i}>
            <h3>{val.text}</h3>
            <h1 className='typewriter-small'>
              <Typewriter options={{
                strings: [`${val.name}`, `${val.post}`],
                autoStart: true,
                loop: true
              }} />
            </h1>
            <p>{val.desc}</p>
            <Link to="/about">
            <button className='primaryBtn'  >
              About me
            </button></Link>
          </div>
        ))}
      </section>
    </>
  );
}

export default Hero;