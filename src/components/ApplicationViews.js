import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import CustomerList from "./customers/CustomerList"
import {CustomerProvider} from "./customers/CustomerProvider"
import EmployeesList from "./employees/EmployeesList"
import {EmployeesProvider} from "./employees/EmployeesProvider"

export default (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            <CustomerProvider>
                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeesProvider>
                {/* Render the customer list when http://localhost:3000/employees */}
                <Route path="/employees">
                    <EmployeesList />
                </Route>
            </EmployeesProvider>
        </>
    )
}