import React from "react"
import Navbar from "./navbar"
import Content from "./content"

export default function BaseLayout({ children }){
    return (
        <React.Fragment>
            <Navbar />
            <Content>{children}</Content>
        </React.Fragment>
    )
}