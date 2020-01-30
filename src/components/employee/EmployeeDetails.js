import React, { useContext } from "react"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"



export default (props) => {
  const { employees, releaseEmployee } = useContext(EmployeeContext)
  const { locations } = useContext(LocationContext)
  

  const chosenEmployeeId = parseInt(props.match.params.employeeId, 10)
  const employee = employees.find(e => e.id === chosenEmployeeId) || {} 
  const location = locations.find(l => l.id === employee.locationId) || {}
  console.log(employee)

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">Location: {location.name}</div>
      

      <button className="btn--release"
        onClick={() => {
          releaseEmployee(chosenEmployeeId)
            .then(() => {
              props.history.push("/employees")
            })
         
        }}>Release
      </button>
      {/* <button onClick={() => {
                props.history.push(`/employees/edit/${employee.id}`)
            }}>Edit</button> */}


    </section>


  )

}