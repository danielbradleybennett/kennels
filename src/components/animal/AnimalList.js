import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animals from "./Animals"
import "./Animals.css"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext} from "../customers/CustomerProvider"

export default (props) => {
  const { animals } = useContext(AnimalContext)
  const {locations} = useContext(LocationContext)
  const {customers} = useContext(CustomerContext)

  return (
    <div className="animals">
      <h1>Animals</h1>
      <button onClick={ 
        () => props.history.push("/animals/create")}>
        Add Animal
          </button>
      <article className="animalList">


        {
          animals.map(animal => {
            const location = locations.find(loc => loc.id===animal.locationId) || {}
            const customer = customers.find(cus => cus.id===animal.customerId) || {}
            return <Animals key={animal.id} animal={animal} location={location} customer={customer}/>
          })
        }
      </article>
    </div>
  )
}