import React, { useState } from "react"

export const PropsAndState = ({ yourName }) => {

  let [countClicks, setCountClicks] = useState(0) //returns an array of 2 things

  const handleClick = () => {
    //good practice:
    //make a copy of state, modifiy it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}
