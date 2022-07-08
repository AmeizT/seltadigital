import React from 'react'
import FooterMenu from './FootMenu'
import FootBase from './FootBase'
import FootNotes from './Footnotes'
import Contacts from './Contacts'
import { useContact } from "../../../json/contacts";
import { Container, TaskBar } from "../../kui";

function Footer() {
    const date = new Date()
    const contacts = useContact()
    
    return (
        <TaskBar 
        dn="column" 
        paint="var(--dark90)" 
        paintd="var(--dark90)">
            <Container 
            dn="column">
                <FootNotes />
                <FooterMenu />
                <Contacts contacts={contacts} />
                <FootBase />
            </Container>
        </TaskBar>
    )
}

export default Footer
