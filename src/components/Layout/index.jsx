import React from 'react'
import Router from 'next/router'
import AppBar from './AppBar/index'
import Content from '../Layout/Content'
import Footer from '../Layout/Footer'

export default function BaseLayout({children, hibernate}){ 
    return (
        <React.Fragment>
            <AppBar />
            <Content>{children}</Content>
            <Footer hibernate={hibernate} />
        </React.Fragment>
    )
}