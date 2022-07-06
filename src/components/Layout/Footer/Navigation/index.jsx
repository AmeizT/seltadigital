import React from 'react'
import Link from 'next/link'
import { IconContext } from 'react-icons/lib'
import { useMenu } from '../../../../json/menu'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Button, Container, Item, List, ListItem, NavLink, Segment, Stack, Text, View } from '../../../kui'

export default function FooterMenu(){
    const menu = useMenu()
    const message = encodeURIComponent('Hi, Discava?\n\nI would like your assistance please.\n\nThanks!')
    
    return (
        <Segment>
        <List dn="column">
            {menu.map(menu => (
                <ListItem 
                key={menu.id}
                wt="100%"
                space="var(--sm) 0">
                    {menu?.ext === true ? 
                        <NavLink
                        href={menu.method === 'mail' ? `mailto:${menu.uri}` : menu.method === 'call' ? `tel:${menu.uri}` : menu.uri}
                        target={menu.target}
                        rel={menu.rel}
                        color="var(--snow20)">
                            <Stack>
                                <Item wt="auto">
                                    <Text as="span">
                                        {menu.name}
                                    </Text>
                                </Item>

                                <Item 
                                wt="auto"
                                space="0 0 0 var(--xxs)" 
                                posv="center">
                                    <IconContext.Provider value={{ size: 16 }}>
                                        <HiOutlineExternalLink />
                                    </IconContext.Provider>
                                </Item>
                            </Stack>
                        </NavLink> : 

                        <Link href={menu.uri} passHref>
                            <NavLink 
                            color="var(--snow20)">
                                {menu.name}
                            </NavLink>
                        </Link>
                    }
                </ListItem>
            ))}
        </List>
        </Segment>
    )
}