import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
  const { getAnimalById, releaseAnimal } = useContext(AnimalContext)

	const [animal, setAnimal] = useState({})
  const history = useHistory()

	const { animalId } = useParams(); //return an obj with all dynamic URL paramters as key:value pairs

  useEffect(() => {
    console.log("useEffect", animalId)
    getAnimalById(animalId)
    .then((response) => {
      setAnimal(response)
    })
  }, [])

  const handleRelease = () => {
    releaseAnimal(animal.id)
    .then(() => {
      history.push("/animals")
    })
  }

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <button onClick={handleRelease}>Release Animal</button>
      <button onClick={() => {
          history.push(`/animals/edit/${animal.id}`)
        }}>Edit</button>
    </section>
  )
}
