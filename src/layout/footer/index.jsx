import Link from "next/link"
import { useMenu } from "../../data/menu"
import { useCommunity } from "../../data/community"
import { Container, Item, List, ListItem, Nav, NavLink, Stack, TaskBar, Text } from "../../@fastor"

export default function Footer(){
    const menu = useMenu()
    const community = useCommunity()
    const snow = {
        hue: "#ffffff",
    }

    return (
        <TaskBar space="var(--sz70) 0" mt="var(--sz70)" bg="var(--dark80)">
            <Container>
                <Stack move="y">
                    <Item>
                        <Text fs={24} mute={true}>
                            <Text as="span" {...snow}>Let&apos;s cut to the chase.</Text> <br />We believe you&apos;ve been convinced that we&apos;d love to work alongside you. <br/><Text as="span" {...snow}>Drop us a line</Text> and let&apos;s craft something &quot;wow&quot; together.
                        </Text>
                    </Item>

                    <Item space="var(--sz60) 0" gap="0 var(--sz50)">
                        <Nav>
                            <List move="y">
                                {menu.map((menu, i) => (
                                    <ListItem key={menu.id} w="100%" pr="var(--sz50)">
                                        <Link href={menu.uri} passHref>
                                            <NavLink 
                                            {...snow}
                                            onClick={() => handleActiveLink(i)}>
                                                {menu.name}
                                            </NavLink>
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Nav>

                        <Nav>
                            <List move="y">
                                {community.map((menu, i) => (
                                    <ListItem key={menu.id} w="100%" pr="var(--sz50)">
                                        <Link href={menu.uri} passHref>
                                            <NavLink 
                                            {...snow}
                                            onClick={() => handleActiveLink(i)}>
                                                {menu.name}
                                            </NavLink>
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Nav>
                    </Item>

                    <Item>
                        
                    </Item>
                </Stack>
            </Container>
        </TaskBar>
    )
}