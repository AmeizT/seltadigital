import React from 'react'
import { Container, TaskBar } from '../../kui'
import FooterMenu from './Navigation'
import FootBase from './FootBase'

function Footer() {
    const date = new Date()
    
    return (
        <TaskBar 
        dn="column" 
        paint="var(--dark70)" 
        paintd="var(--dark70)">
            <Container 
            dn="column">
                <FooterMenu />
                <FootBase />
            </Container>
        </TaskBar>
    )
}

export default Footer
