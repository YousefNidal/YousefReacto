import React from 'react'
import Heading from '../common/Heading'
import { blog } from '../Data/dummyData'

const Blog = () => {
  return (
    <>
    
    <section className='blog'>
        <div className="container">
            <Heading title={'Blog'} />
            <div className="content grid3">
            {blog.map((item, i) => (
                <>
                <div className="box" key={i}>
                    <div className="img">
                        <img src={item.cover} alt="" />
                    </div>
                    <div className="text">
                        <h3>{item.title}</h3>
                        <label>By {item.author} {item.date} </label>
                        <p>{item.desc}</p>
                    </div>
                </div>

                </>
            ) )}
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Blog