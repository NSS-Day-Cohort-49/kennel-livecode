import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {

    const { getAnimals, animals } = useContext(AnimalContext)
    const history = useHistory()

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    return (
      <>
        <h1>Animals</h1>

        <button onClick={() => history.push("/animals/create")}>
          Add Animal
        </button>
        <div className="animals">
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
