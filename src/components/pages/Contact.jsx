import React, { useState } from 'react'
import Heading from '../common/Heading'
import { contact } from '../Data/dummyData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:ameryousef2007@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <>
      <section className="contact">
        <div className="container">
          <Heading title={'Keep In Touch'} />
          <div className="content flexsb">
            <div className="right">
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder='Name' 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder='Email' 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder='Subject' 
                  value={formData.subject}
                  onChange={handleChange}
                />
                <textarea 
                  name="message" 
                  cols={30} 
                  rows={10} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="left">
              {contact.map((item, i) => (
                <div className="box" key={i}>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
              <div className="box">
                
                <p>Direct Email:</p>
                <p>
                  <a href="mailto:ameryousef2007@gmail.com" className="email-link">
                    ameryousef2007@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact