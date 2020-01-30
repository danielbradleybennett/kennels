import React from "react"
import "./Locations.css"

export default ({ location, employees }) => { 
  return (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__address">{location.address}</address>
        <ul>
            {
                employees.map(e => <li key={e.id}>{e.name}</li>)
            }
        </ul>
    </section>
)
          }