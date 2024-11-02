import React from 'react'
import './Title.css'

const Title = (props) => {
  return (
    <div>
        <p className='title'>{props.titleText}</p>
    </div>
  )
}

export default Title