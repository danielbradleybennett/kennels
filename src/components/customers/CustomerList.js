import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import Customers from "./Customers"
import "./Customers.css"


export default () => {
    const { customers } = useContext(CustomerContext)
    return (
        <div className="customers">
        {
            customers.map(cus => <Customers key={cus.id} customer={cus} />)
        }
        </div>
    )
}