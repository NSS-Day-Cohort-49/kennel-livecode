import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const history = useHistory()

  //useEffect - reach out to the world for something
  // Takes 2 args: a function ref and a trigger (or set of triggers) in an array
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals") // will happen once
    getAnimals()
  }, []) //leaving the array empty means only call the function once -- when the component first renders


  return (
    <>
      <button onClick={() => {history.push("/animals/create")}}>
          Add Animal
      </button>
      <div className="animals">
        {console.log("AnimalList: Render", animals)}
        {
          animals.map(animal => {
            return <AnimalCard key={animal.id} animal={animal} />
          })
        }
      </div>
    </>
  )
}

// The 'flow' for adding a new animal:
// 1) click the Add Animal btn
// 2) Change the url to `animals/create` with 'history'
// 3) That triggers the router to match the URL to know which comp to render
// 4) The animal form is rendered
// 5) The user fills out the FormData, causing the initial 'animal' state to be updated
// 6) The user clicks 'save animal' and we call 'addAnimal', passing it the new object we created from state
// 7) After the save and the update of animals state, redirect to AnimalList using history
