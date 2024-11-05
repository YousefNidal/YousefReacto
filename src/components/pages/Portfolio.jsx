import React, { useState } from 'react'
import list, { portfolio } from '../Data/dummyData'
import { Visibility } from '@mui/icons-material'
import Heading from '../common/Heading'


const Protofolio = () => {

  const allCategory = ['all', ...new Set(portfolio.map((item) => item.category))]

  const [list, setList] = useState(portfolio)
  const [category, setCategory] = useState(allCategory)

  const filterItems =(category) => {
      const newItems = portfolio.filter((item) => item.category === category
        
      )
      setList(newItems)

      if(category === 'all') {
        setList(portfolio)
      }
  }
  return (
    <>
    <article>
      <div className="container">
        <Heading title={'Portfolio'} />
       
        <div className="catButton">
          {category.map((category,i) => (
            <button className='primaryBtn' key={i} onClick={()=> filterItems
              (category)
            }> {category} </button>
          ))}
        </div>
      
      <div className="content grid3">
        {list.map((items,i) => (
          <div className="box" key={items.id}>
          
            <div className="img">
              <img src={items.cover} alt="" />
            </div>
            <div className="overlay">
              <h3>{items.title}</h3>
              <span>{items.name}</span>
              <Visibility />
            </div>
          </div>


         
        ))}
      </div>
      </div>
    </article>
    
    </>
  )
}

export default Protofolio