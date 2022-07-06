import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { IconContext } from 'react-icons/lib'
import { Button, Container, List, ListItem, IconButton, Item, MastHead, NavLink, Segment, Stack, Text, View } from '../../kui'

function AppBar(){
    return (
        <MastHead 
        as="header" 
        ht="var(--bar10)"
        pos="fixed"
        view="flex" 
        posv="center"
        place="top"
        border="base">
            <Container>
                Header
            </Container>
        </MastHead>
    )
}

export default AppBar