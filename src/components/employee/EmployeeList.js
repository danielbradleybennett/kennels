import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import Employee from "./Employee"
import "./Employee.css"


export default (props) => {
  const { employees } = useContext(EmployeeContext)
  const { locations } = useContext(LocationContext)


  return (

    <>
      <h1>Employee</h1>
      <button onClick={() => props.history.push("/employees/create")}>
        Add Employee
      </button>

      <div className="employees">
        {
          employees.map(employee => {
            let foundLocation = locations.find(loc => loc.id === employee.locationId)
            return <Employee key={employee.id} employee={employee} location={foundLocation}/>
          })
        }
      </div>

    </>

  )
}
{/* seeing if this works!!!! */ }
{/* <article className="employeeList">
        {
          employees.map(employee => {
            // Find this employee's matching location object
            const foundedLocation = locations.find(
              (location) => {
                return location.id === employee.locationId
              }
            )

            // Pass the matching location to Employee component
            return <Employee key={employee.id}
              location={foundedLocation}
              employee={employee} />
          })
        }
      </article> */}


