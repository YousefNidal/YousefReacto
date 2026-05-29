import React, { useState, useEffect } from 'react'
import list, { portfolio } from '../Data/dummyData'
import { Visibility } from '@mui/icons-material'
import Heading from '../common/Heading'
import { motion, AnimatePresence } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

const Protofolio = () => {
  const allCategory = ['all', ...new Set(portfolio.map((item) => item.category))]

  const [list, setList] = useState(portfolio)
  const [category, setCategory] = useState(allCategory)
  const [activeCategory, setActiveCategory] = useState('all')
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  // Filter Logic
  const filterItems = (categoryName) => {
    setActiveCategory(categoryName)
    setCurrentPage(1) // Reset to first page when filtering
    if (categoryName === 'all') {
      setList(portfolio)
    } else {
      const newItems = portfolio.filter((item) => item.category === categoryName)
      setList(newItems)
    }
  }

  // Calculate current items for pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(list.length / itemsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <article className="portfolio-section">
        <div className="container">
          <Heading title={'Portfolio'} />
         
          <div className="catButton">
            {category.map((cat, i) => (
              <button 
                className={`primaryBtn filterBtn ${activeCategory === cat ? 'active' : ''}`} 
                key={i} 
                onClick={() => filterItems(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        
          <motion.div 
            layout
            className="content grid3"
          >
            <AnimatePresence mode="popLayout">
              {currentItems.map((items) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  key={items.id}
                >
                  <Tilt
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    scale={1.05}
                    transitionSpeed={2000}
                    className="box-tilt"
                  >
                    <div className="box">
                      <a href={items.link} target="_blank" rel="noopener noreferrer">
                        <div className="img">
                          <img src={items.cover} alt="" />
                        </div>
                        <div className="overlay">
                          <h3>{items.title}</h3>
                          <span>{items.name}</span>
                          <Visibility />
                        </div>
                      </a>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="page-btn prev"
              >
                Prev
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button 
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="page-btn next"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </article>
    </>
  )
}

export default Protofolio