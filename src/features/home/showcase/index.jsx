import { Container, Headtext, Item, Segment, Stack, Text, Tiny } from "../../../@fastor"

export default function Showcase({ count }){
    const headtext = {
        textpos: "start",
        fs3x: "var(--fs3x)",
        leading: 0.8,
        prefs: "lower",
    }

    const stroke = {
        hue: "transparent",
        stroke: "2px var(--dark40)",
    }

    const section = {
        h: "100%",
        pos: "fxd",
        pstart: 0,
        ptop: 0,
        space: "var(--hs50) 0 0"
    }

    return (
        <Segment {...section} data-active={count === 1 ? "active" : "inactive"}>
            <Container h="100%" pos="rtv">
                <Stack>
                    <Item move="y">
                        <Headtext {...headtext}>
                            <Text as="span">
                                show
                            </Text>
                            <Text as="span" {...stroke}>
                                case.
                            </Text>
                        </Headtext>

                        <Tiny pt="var(--sz60)" fs={12} prefs="upper">
                            What we have created in the past.
                        </Tiny>
                    </Item>
                </Stack>
            </Container>
        </Segment>
    )
}