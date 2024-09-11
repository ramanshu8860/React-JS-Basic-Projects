import React from 'react'
import LeftArrow from '../assets/Images/left-arrow.png';
import RightArrow from '../assets/Images/right-arrow.png';
import Button from './Button';
import AppleBasket from './AppleBasket';
import { useState } from 'react';
import './AppleCounter.css';
const AppleCounter = () => {

    const totalAppleCount = 10;
    const[rightAppleCount, setRightAppleCount] = useState(0);
    const[leftAppleCount, setLeftAppleCount] = useState(totalAppleCount - rightAppleCount);
    const leftClickHandler = () => {
        if(rightAppleCount > 0){
            setRightAppleCount(rightAppleCount - 1);
            setLeftAppleCount(leftAppleCount + 1);
        }
        
    }

    const rightClickHandler = () => {
        if(leftAppleCount > 0){
            setRightAppleCount(rightAppleCount + 1);
            setLeftAppleCount(leftAppleCount - 1);
        }
        console.log(rightAppleCount, leftAppleCount)
    }
  return (
    <section>
      <AppleBasket appleCount={leftAppleCount} basketName="Basket-1"/>
      <Button clickHandler={leftClickHandler} imageURL={LeftArrow} buttonName="LeftArrow"/>
      <Button clickHandler={rightClickHandler} imageURL={RightArrow} buttonName="RightArrow"/>
      <AppleBasket appleCount={rightAppleCount} basketName="Basket-2"/>
    </section>
  )
}

export default AppleCounter
