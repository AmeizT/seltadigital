import React from "react"
import Link from "next/link"
import { List, ListItem, Nav, NavLink } from "../../../../.next/@fastor"

export default function Deskbar({ menu }){
    const [active, setActive] = React.useState(0)

    function handleActiveLink(i){
        setActive(i)
    }

    return (
        <Nav viewon="desk">
            <List>
                {menu.map((menu, i) => (
                    <ListItem key={menu.id} pr="var(--sz50)">
                        <Link href={menu.uri} passHref>
                            <NavLink 
                            onClick={() => handleActiveLink(i)}>
                                {menu.name}
                            </NavLink>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Nav>
    )
}