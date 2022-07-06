import React from 'react'
import { Container, TaskBar } from '../../kui'

function Footer() {
    const date = new Date()
    
    return (
        <TaskBar 
        dn="column" 
        paint="var(--dark70)" 
        paintd="var(--dark70)">
            <Container 
            dn="column" 
            space="0 var(--md)">
                footer
            </Container>
        </TaskBar>
    )
}

export default Footer
