import { Container, Headtext, Item, Segment, Stack, Text } from "../../../@fastor"

export default function Hero(){
    const headtext = {
        textpos: "center",
        fs3x: "var(--fs3x)",
        leading: 1,
    }

    const stroke = {
        hue: "transparent",
        stroke: "2px var(--dark40)",
    }

    const section = {
        h: "100%",
        pos: "abs",
        pstart: 0,
        ptop: 0,
    }

    return (
        <Segment {...section}>
            <Container h="100%" pos="rtv" my="center">
                <Stack>
                    <Item mx="center">
                        <Headtext {...headtext}>
                            <Text as="span">
                                Create
                            </Text><br />
                            <Text as="span" {...stroke}>
                                Solve
                            </Text><br />
                            <Text as="span">
                                Satisfy
                            </Text>
                        </Headtext>
                    </Item>
                </Stack>
            </Container>
        </Segment>
    )
}