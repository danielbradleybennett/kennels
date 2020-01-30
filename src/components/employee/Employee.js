import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"



export default ({ employee, location}) => (
    <section className="employee">
        <h3 className="employee__name">
            
        <Link to={`/employees/${employee.id}`}>
                { employee.name }
            </Link>

            
        </h3>
        <div className="employee__location">{location.address}</div>
        
    </section>
)
