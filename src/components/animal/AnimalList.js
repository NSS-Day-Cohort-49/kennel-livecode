import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  //useEffect - reach out to the world for something
  // Takes 2 args: a function ref and a trigger (or set of triggers) in an array
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals") // will happen once
    getAnimals()
  }, []) //leaving the array empty means only call the function once -- when the component first renders


  return (
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
      }
    </div>
  )
}
