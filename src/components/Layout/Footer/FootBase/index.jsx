import React from 'react'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import { IconContext } from 'react-icons'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Segment, Container, Item, List, ListItem, NavLink, Stack, Text, Time } from '../../../kui'

export default function FootBase(){
    const date = new Date()

    return (
        <Segment space="var(--md) 0">
                <Segment dn="column">
                    <Copyright />
                </Segment>
            </Segment>
    )

    function Connect(){
        let communities = [
          {
            id: uuid(),
            icon: <FaFacebookSquare />,
            uri: "https://facebook.com/ergoritegadgets",
          },

          {
            id: uuid(),
            icon: <FaTwitter />,
            uri: "https://twitter.com/ergoritegadgets",
          },

          {
            id: uuid(),
            icon: <FaInstagram />,
            uri: "https://instagram.com/ergoritegadgets",
          },

          {
            id: uuid(),
            icon: <FaWhatsapp />,
            uri: `https://wa.me/+26775577933?text=${message}`,
          },
        ]

        return (
            <Stack>
                <List posx="between">
                    {communities.map(community => (
                        <ListItem key={community.id} ps={3} navSpaceStart="0">
                            <Link href={community.uri} passHref>
                                <NavLink target="_blank" color="var(--dark-600)" colord="var(--snow-100)">
                                    <IconContext.Provider value={{ size: 24 }}>
                                        {community.icon}
                                    </IconContext.Provider>
                                </NavLink>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Stack>
        )
    }


    function Copyright(){
        return (
            <Segment dn="column" posv="center">
                <Stack dn="column" dnx3="row" series={3}>
                    <Stack pt={1}>
                        <Item>
                            <Text as="span" size="14px" saturation="weak">Copyright &copy; <Time dateTime={date.getFullYear()}>{date.getFullYear()}</Time> Selta Digital.</Text>
                        </Item>
                    </Stack>

                    <Stack view="none" spacex3="var(--space-md) 0 0" posx="center" posx3="end">
                        <Item wt="auto" as="span" posx3="end">
                            <Link href="https://facebook.com/seltadigital" passHref>
                                <NavLink 
                                size="xs"
                                pos="center">
                                    Powered by Selta Tech.
                                </NavLink>
                            </Link>
                        </Item>
                    </Stack>
                </Stack>
            </Segment>
        )
    }
}