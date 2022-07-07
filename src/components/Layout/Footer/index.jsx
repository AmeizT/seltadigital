import React from 'react'
import { Container, TaskBar } from '../../kui'
import FooterMenu from './Navigation'
import FootBase from './FootBase'
import FootNotes from './Footnotes'

function Footer() {
    const date = new Date()
    
    return (
        <TaskBar 
        dn="column" 
        paint="var(--dark90)" 
        paintd="var(--dark90)">
            <Container 
            dn="column">
                <FootNotes />
                <FooterMenu />
                <FootBase />
            </Container>
        </TaskBar>
    )
}

export default Footer
