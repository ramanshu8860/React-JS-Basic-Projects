import React from 'react'

const Button = ({imageURL, buttonName, clickHandler}) => {
  return (
    //When a user hovers over the button, a tooltip displaying the 
    //text in the title attribute will appear.
    <button onClick={clickHandler} title={buttonName}>
        <img src={imageURL} alt={buttonName}/>
    </button>
  )
}

export default Button

