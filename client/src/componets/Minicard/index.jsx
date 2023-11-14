import React from 'react'
import './style.scss'


const Minicard = (props) => {
  return (
    <div className={`minicard-wrapper ${props.background}` } >
        
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <span>{props.stockCount}</span>
    </div>
  )
}

export default Minicard