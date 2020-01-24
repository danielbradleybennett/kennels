import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeesProvider"
import Employees from "./Employees"


export default () => {
    const { employees } = useContext(EmployeeContext)
  console.log(employees)
    return (
        <div className="employees">
        {
            employees.map(emp => <Employees key={emp.id} employee={emp} />)
        }
        </div>
    )
}