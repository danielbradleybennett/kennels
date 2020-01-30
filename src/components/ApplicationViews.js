import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import CustomerList from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
import EmployeeList from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import AnimalDetails from "./animal/AnimalDetails"
import EmployeeForm from "./employee/EmployeeForm"
import AnimalForm from "./animal/AnimalForm"
import EmployeeDetails from "./employee/EmployeeDetails"

export default (props) => {
  return (
    <>
      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route exact path="/animals" render={
              props => <AnimalList {...props} />
            } />

            {/* delete animal  */}
            <Route path="/animals/:animalId(\d+)" render={
              props => <AnimalDetails {...props} />
            } />

            <Route path="/animals/create" render={
              props => <AnimalForm {...props} />
            } />

            <Route path="/animals/edit/:animalId(\d+)" render={
              props => <AnimalForm {...props} />
            } />
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <CustomerProvider>
        {/* Render the customer list when http://localhost:3000/customers */}
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <LocationProvider>
          {/* Render the customer list when http://localhost:3000/employees */}
         
          <Route exact path="/employees" render={
            props => <EmployeeList {...props} />
          } />
          



          <Route exact path="/">
            <LocationList />
             </Route>

            <Route path="/employees/:employeeId(\d+)" render={
              props => <EmployeeDetails {...props} />
            } />

            <Route path="/employees/create" render={
              props => <EmployeeList {...props} />
            } />

          <Route path="/employees/create" render={
            props => <EmployeeForm {...props} />
          } />


         
        </LocationProvider>
      </EmployeeProvider>
    </>
  )
}