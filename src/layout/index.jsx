import React from "react"
import Navbar from "./navbar"
import Content from "./content"
import Footer from "./footer"

export default function BaseLayout({ children }){
    return (
        <React.Fragment>
            <Navbar />
            <Content>{children}</Content>
        </React.Fragment>
    )
}