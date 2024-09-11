import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import styles from "./Counter.module.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  }
  const decreaseCount = () => {
    setCount(count - 1);
  }
   
  const resetCount = () => {
    setCount(0);
  }
  return (
    <section className="styles.counter">
      <span style={{ fontSize: "40px" }}>{count}</span>
      <div>
        <Button
          clickHandler={increaseCount}
          buttonName="Increment"
          buttonColor="green"
          buttonFontSize={"15px"}
          buttonFontWeight={"bold"}
          buttonTextColor={"white"}
        />
        <Button
          clickHandler={resetCount}
          buttonName="Reset"
          buttonColor="red"
          buttonFontSize={"15px"}
          buttonFontWeight={"bold"}
          buttonTextColor={"white"}
        />
        <Button
          clickHandler={decreaseCount}
          buttonName="Decrement"
          buttonColor={"blue"}
          buttonFontSize={"15px"}
          buttonFontWeight={"bold"}
          buttonTextColor={"white"}
        />
      </div>
    </section>
  );
};

export default Counter;
