

import React from 'react'
import { about } from '../Data/dummyData'
import Heading from '../common/Heading'

function About() {
    const handleDownloadCV = () => {
    try {
      // Using fetch to ensure the file is available
      fetch(`${process.env.PUBLIC_URL}/Yousef_Nidal.pdf`)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'Yousef_Nidal_CV.pdf';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        })
        .catch(error => {
          console.error('Error downloading CV:', error);
          // Fallback to opening in new tab
          window.open(`${process.env.PUBLIC_URL}/Yousef_Nidal.pdf`, '_blank');
        });
    } catch (error) {
      console.error('Error in download handler:', error);
      window.open(`${process.env.PUBLIC_URL}/Yousef_Nidal.pdf`, '_blank');
    }
  };
  return (
    <>
    
    <section className='about'>
    <div className="container flex">
        {
            about.map((val,i) => (
                <span key={i} className='container flex'>
                
                <div className="left">
                    <img src={val.cover} alt="" />
                </div>
                <div className="right">
                    <Heading title='About Me' />
                    <p>{val.desc}</p>
                    <p>{val.desc1}</p>
                    <button onClick={handleDownloadCV}>Download CV</button>
                    

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