import React from 'react'
import { home } from '../Data/dummyData'
import Typewriter from 'typewriter-effect'

function Hero() {
  const handleDownloadCV = () => {
    // Using the public folder approach
    try {
      const link = document.createElement('a');
      link.href = `${process.env.PUBLIC_URL}/Yousef_Nidal.pdf`;
      link.download = 'Yousef_Nidal.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: Open in new tab if download fails
      window.open(`${process.env.PUBLIC_URL}/Yousef_Nidal.pdf`, '_blank');
    }
  };

  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContainer' key={i}>
            <h3>{val.text}</h3>
            <h1>
              <Typewriter options={{
                strings: [`${val.name}`, `${val.post}`],
                autoStart: true,
                loop: true
              }} />
            </h1>
            <p>{val.desc}</p>
            <button className='primaryBtn' onClick={handleDownloadCV}>
              Download CV
            </button>
          </div>
        ))}
      </section>
    </>
  )
}

export default Hero