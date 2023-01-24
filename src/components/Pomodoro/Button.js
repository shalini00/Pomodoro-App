import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <button className='button' {...props}>
        Start
    </button>
  )
}

export default Button
