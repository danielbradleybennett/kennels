import React from "react"



export default ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__address">{animal.breed}</div>
    </section>
)