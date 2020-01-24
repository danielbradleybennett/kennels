import React from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "./Kennel.css"
// import Animal from "./animal/Animals"
// import { Route } from "react-router-dom"
import "./animal/Animals.css"
// import LocationList from "./location/LocationList"
import "./Location.css"

import "./Employees.css"
// import Customers from "./customers/Customers"
import "./Customers.css"
// import { LocationProvider } from "./location/LocationProvider"
// import EmployeesList from "./employees/EmployeesList"
// // import {EmployeeProvider} from ".employees/EmployeesProvider"
// import {EmployeesProvider} from "./employees/EmployeesProvider"
// import CustomerList from "./customers/CustomerList"
// import {CustomerProvider} from "./customers/CustomerProvider"
// import { AnimalProvider } from "./animal/AnimalProvider"
// import AnimalList from "./animal/AnimalList"





export default () => (

  
    <>
        <NavBar />
        <ApplicationViews />

        {/* <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider>
              <AnimalList/>
            </AnimalProvider>
        </article>

        <h2>Location</h2>
        <article className="locations">
            <LocationProvider>
              <LocationList/>
            </LocationProvider>
            
        </article>
        
        <h2>Employee</h2>
        <article className="employees">
            <EmployeesProvider>
              <EmployeesList/>
            </EmployeesProvider>
        </article>

        <h2>Customer</h2>
        <article className="customers">
            <CustomerProvider>
              <CustomerList/>

            </CustomerProvider>
        </article> */}
    </>
)