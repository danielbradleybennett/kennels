import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animals from "./Animals"


export default () => {
    const { animals } = useContext(AnimalContext)
  console.log(animals)
    return (
        <div className="animals">
        {
            animals.map(ani => <Animals key={ani.id} animal={ani} />)
        }
        </div>
    )
}