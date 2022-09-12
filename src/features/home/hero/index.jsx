import { TbArrowDown } from "react-icons/tb"
import { Button, Container, Headtext, Icon, Item, Sector, Stack, Text, Tiny } from "../../../@fastor"

export default function Hero(){
    const textProps = {
        fs3x: "var(--fs3x)",
        fs7x: "90px",
        leading: 1,
    }

    const snow = {
        hue: "var(--dark40)",
        hued: "#ffffff",
    }

    return(
        <Sector h="100vh" data-name="hero" pt="var(--hs30)" gradient="var(--snow20)">
            <Container>
                <Stack w7x="70%" move="y">
                    <Item move="y">
                        <Headtext {...textProps} {...snow}>
                            We create, solve and satisfy.
                        </Headtext>

                        <Text {...snow} fs={18} leading={1.5} pt="var(--sz60)">
                            We are Selta Smart Tech, a multidisciplinary team of remote web development wizards with many satisfying magic tricks to showcase on the web. We focus on scalability and solving challenges using a combination of our magic wands and versatile tech stack.
                        </Text>
                    </Item>

                    <Item pt="var(--sz60)">
                        <Button w="100%" space="0" space7x="0" fs={18} fw={70} hue="var(--dark40)">
                            <Stack my="center">
                                <Item w="fit" pb="var(--sz30)" bb="2px dotted var(--dark40)">
                                    Talk is cheap, see for yourself.
                                </Item>

                                <Item w="fit" h="fit" rad="50px" space="var(--sz20)" ms="auto" bg="var(--dark40)">
                                    <Icon size="24" hex="var(--snow10)">
                                        <TbArrowDown />
                                    </Icon>
                                </Item>
                            </Stack>
                        </Button>
                    </Item>
                </Stack>

                <Stack viewon="desk"></Stack>
            </Container>
        </Sector>
    )
}