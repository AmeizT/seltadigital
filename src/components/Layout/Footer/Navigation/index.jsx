import React from 'react'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import { IconContext } from 'react-icons/lib'
import { HiPlusSm, HiOutlineExternalLink } from 'react-icons/hi'
import { RiCloseFill, RiLinkM } from 'react-icons/ri'
import { View, Button, Container, Item, List, ListItem, NavLink, Segment, Stack, Text } from '../../../kui'

export default function FooterNavigation(){
    const [dropdown, setDropdown] = React.useState(false)
    const message = encodeURIComponent('Hi, Discava?\n\nI would like your assistance please.\n\nThanks!')

    function handleDropdown(index){
        if(dropdown === index){
            return setDropdown(null)
        }
        setDropdown(index)
    }
    
    return (
        <View>
            <DropdownMenu />
        </View>
    )

    function DropdownMenu(){
        let dropdowns = [
            [
                {
                    id: uuid(), 
                    name: 'Ergonomics', 
                    uri: '/category/ergonomics'
                },

                {
                    id: uuid(), 
                    name: 'Smart Home', 
                    uri: '/category/smart-home'
                },

                {
                    id: uuid(), 
                    name: 'Solar', 
                    uri: '/category/solar'
                },

                {
                    id: uuid(), 
                    name: 'Gaming & VR', 
                    uri: '/category/gaming'
                },

                {
                    id: uuid(), 
                    name: 'Accessories', 
                    uri: '/category/accessories'
                },

                {
                    id: uuid(), 
                    name: 'Wrapped Gifts', 
                    uri: '/gifts'
                },

                {
                    id: uuid(), 
                    name: 'Offers', 
                    uri: '/category/offers'
                },

                {
                    id: uuid(), 
                    name: 'Catalogue', 
                    uri: 'https://wa.me/c/26775577933', 
                    ext: true,
                    target: '_blank', 
                    rel: 'noreferrer noopener'
                },
            ],

            [
                {
                    id: uuid(), 
                    name: 'Wholesale', 
                    uri: '/wholesale',
                },

                {
                    id: uuid(), 
                    name: 'Sourcing & Shipping', 
                    uri: '/sourcing',
                },
            ],

            [
                {
                    id: uuid(), 
                    name: 'Blog', 
                    uri: '/blog'
                },

                {
                    id: uuid(), 
                    name: 'Careers', 
                    uri: '/careers'
                },

                {
                    id: uuid(), 
                    name: 'About Discava', 
                    uri: '/about'
                },
            ],

            [
                {
                    id: uuid(), 
                    name: 'My Account', 
                    uri: '/account'
                },
            ],

            [
                {
                    id: uuid(), 
                    name: 'Contact Us', 
                    uri: '/support'
                },

                {
                    id: uuid(), 
                    name: 'WhatsApp', 
                    uri: `https://wa.me/+26775577933?text=${message}`,
                    ext: true,
                    target: '_blank', 
                    rel: 'noreferrer noopener'
                },

                {
                    id: uuid(), 
                    name: 'Phone', 
                    uri: '+267 75 577 933',
                    method: 'call',
                    ext: true,
                    target: '_blank', 
                    rel: 'noreferrer noopener'
                },

                {
                    id: uuid(), 
                    name: 'Email', 
                    uri: 'hi@ergo-rite.com',
                    method: 'mail',
                    ext: true,
                    target: '_blank', 
                    rel: 'noreferrer noopener'
                },

                {
                    id: uuid(), 
                    name: 'Help Center', 
                    uri: '/support'
                },
            ]
        ]

        return (
            <View>
                <List dn="column">
                    {dropdowns.map((menus, index) => (
                        <Container key={uuid()} dn="column" space="0" spacex3="0">
                            <Segment>
                                <ListItem 
                                wt="100%"
                                border="base">
                                    <Button
                                    wt="100%"
                                    border="base"
                                    size="sm"
                                    saturation="strong"
                                    space="var(--sm) 0"
                                    onClick={() => handleDropdown(index)}>
                                        <Stack>
                                            <Item as="span">
                                                {
                                                    index === 0 ? 'Shop' :
                                                    index === 1 ? 'Business' : 
                                                    index === 2 ? 'About' : 
                                                    index === 3 ? 'Account' : 
                                                    index === 4 ? 'Support' : ''
                                                }
                                            </Item>

                                            <Item posx="end">
                                                <IconContext.Provider value={{ size: 20 }}>
                                                    {dropdown === index ? <RiCloseFill /> : <HiPlusSm />}
                                                </IconContext.Provider>
                                            </Item>
                                        </Stack>
                                    </Button>
                                </ListItem>
                            </Segment>

                            {dropdown === index &&
                                <Segment border="base" space="var(--sm) 0">
                                    <List dn="column">
                                        {menus.map(menu => (
                                            <ListItem 
                                            key={menu.id}
                                            wt="100%"
                                            space="var(--xs) var(--md)">
                                                {menu?.ext === true ? 
                                                    <NavLink
                                                    href={menu.method === 'mail' ? `mailto:${menu.uri}` : menu.method === 'call' ? `tel:${menu.uri}` : menu.uri}
                                                    target={menu.target}
                                                    rel={menu.rel}
                                                    saturation="weak">
                                                        <Stack>
                                                            <Item wt="auto">
                                                                <Text as="span" size="sm">
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
                                                        size="sm" 
                                                        saturation="weak">
                                                            {menu.name}
                                                        </NavLink>
                                                    </Link>
                                                }
                                            </ListItem>
                                        ))}
                                    </List>
                                </Segment>
                            }
                        </Container>
                    ))}
                </List>
            </View>
        )
    }
}