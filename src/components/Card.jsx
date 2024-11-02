import React, { useState } from 'react'
import "./Card.css"
import SearchBar from './SearchBar/SearchBar'

const Card = () => {
 const [selectedButton, setSelectedButton] = useState("All")

  return (
    <div>
      <SearchBar selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>
      <div className='card'>
        <div className="card-design">
        <div>
        {
          <h1>showing all {selectedButton} files</h1>
        }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Card