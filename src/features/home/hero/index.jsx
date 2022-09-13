import { CgMore } from "react-icons/cg"
import { TbArrowDown } from "react-icons/tb"
import { useStack } from "../../../data/stack"
import { Button, Container, Headtext, List, ListItem, Icon, Item, Sector, Stack, Text, Tiny } from "../../../@fastor"

export default function Hero(){
    const stacks = useStack()

    const textProps = {
        fs3x: "var(--fs3x)",
        fs7x: "90px",
        leading: 1,
    }

    const snow = {
        hue: "var(--dark40)",
        hued: "#ffffff",
    }

    const hero = {
        h: "100vh", 
        pos: "rtv",
        my: "center", 
    }

    return(
        <Sector data-name="hero" {...hero}>
            <Container>
                <Stack w7x="70%" move="y">
                    <Item move="y">
                        <Headtext {...textProps} {...snow}>
                            We build, solve and satisfy.
                        </Headtext>

                        <Text {...snow} fs={18} leading={1.5} pt="var(--sz60)">
                            We are a team of talented remote web development magicians building some &quot;wow&quot; apps & experiences on the web.
                        </Text>
                    </Item>

                    <Item pt="var(--sz60)">
                        <Button w="100%" space="0" space7x="0" fs={18} fw={70} hue="var(--dark40)">
                            <Stack my="center">
                                <Item w="fit" pb="var(--sz30)" bb="2px dotted var(--dark40)">
                                    Talk&apos;s cheap! Watch some magic.
                                </Item>

                                <Item w="fit" h="fit" rad="50px" space="var(--sz20)" ms="auto" bg="var(--dark40)">
                                    <Icon size="24" hex="var(--snow10)">
                                        <TbArrowDown />
                                    </Icon>
                                </Item>
                            </Stack>
                        </Button>
                    </Item>

                    <Item pos="abs" pstart="0" pbase="0" space="var(--sz50)" bg="var(--snow20)">
                        <List gap="var(--sz60) 0" gtc="repeat(4, 1fr)" move="x-wrap" mx="between">
                            {stacks.slice(0, 6).map(stack => (
                                <ListItem key={stack._id}>
                                    <Icon size={28}>{stack.icon}</Icon>
                                </ListItem>
                            ))}
                            <ListItem>
                                <Button space="0">
                                    <Icon size={28}>
                                        <CgMore />
                                    </Icon>
                                </Button>
                            </ListItem>
                        </List>
                    </Item>
                </Stack>

                <Stack viewon="desk"></Stack>
            </Container>
        </Sector>
    )
}