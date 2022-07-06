import React from 'react'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import { IconContext } from 'react-icons'
import { IoLogoTiktok } from 'react-icons/io5'
import { RiWhatsappLine, RiTwitterFill } from "react-icons/ri";
import { FaTiktok, FaFacebookSquare, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube, FaCcVisa, FaCcPaypal } from 'react-icons/fa'
import { Segment, Container, Item, List, ListItem, NavLink, Stack, Text, Time } from '../../../kui'
import { useSelector } from 'react-redux'
import ReactCountryFlag from 'react-country-flag'

export default function FootBase(){
    const date = new Date()
    const message = encodeURIComponent('Hi, Discava?\n\nI would like to learn more about your products.\n\nThanks!')

    const region = useSelector(state => state.rootReducer.region.region)

    return (
        <Segment 
            pt={4} 
            pb={4}>
                <Segment dn="column">
                    <Connect />
                    <Copyright />
                    <PaymentMethods />
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
            icon: <FaTiktok />,
            uri: "https://tiktok.com/@ergorite",
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
                <Stack pt={3} posx="center" posv="center">
                    {region && region.country === 'BW' ? 
                        <React.Fragment>
                            <ReactCountryFlag 
                                countryCode={region.country}
                                svg
                                style={{ width: '1.5em', height: '1.5em'}}
                                title={region.country}
                            />
                            <Text as="small" ps={2}>Botswana</Text>
                        </React.Fragment> :
                    region && region.country === 'ZW' ? 
                        <Text as="small">Zimbabwe</Text> :
                    region && region.country === 'ZA' ? 
                        <Text as="small">South Africa</Text> :
                    region && region.country === 'US' ? 
                        <Text as="small">United States</Text> :
                    <Text as="small">Not in your region or Region not found (Refresh)</Text>
                    }
                </Stack>

                <Stack dn="column" dnx3="row" series={3}>
                    <Stack pt={1} posx="center">
                        <Item wt="auto" as="span">
                            <Text as="small" pos="center">Copyright &copy; <Time dateTime={date.getFullYear()}>{date.getFullYear()}</Time> Discava. All rights reserved.</Text>
                        </Item>
                    </Stack>

                    <Stack spacex3="var(--space-md) 0 0" posx="center" posx3="end">
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

    function PaymentMethods(){
        let paymentMethods = [
            {
                uid: uuid(),
                icon: <FaCcVisa />,
                name: 'visa',
            },

            {
                uid: uuid(),
                icon: <FaCcPaypal />,
                name: 'paypal',
            },
        ]
        return (
            <Segment mt={3} posx="center">
                <List wt="fit">
                    {paymentMethods.map(method => (
                        <ListItem 
                        key={method.uid} 
                        ps={3} 
                        navSpaceStart="0">
                            <IconContext.Provider value={{ size: 30 }}>
                                {method.icon}
                            </IconContext.Provider>
                        </ListItem>
                    ))}
                </List>
            </Segment>
        )
    }
}