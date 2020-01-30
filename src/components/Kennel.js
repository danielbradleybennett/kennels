import React from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import { Route, Redirect } from "react-router-dom"
import "./Kennel.css"


import Login from "./auth/Login"
import Register from "./auth/Register"



// import "./Employees.css"
// import "./animal/Animals.css"
// import "./Location.css"
// import "./Customers.css"
// import Animal from "./animal/Animals"
// import { Route } from "react-router-dom"
// import LocationList from "./location/LocationList"
// import Customers from "./customers/Customers"
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
         <Route render={() => {
            if (localStorage.getItem("kennel_customer")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />







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