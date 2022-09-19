import { Container, Headtext, Item, Segment, Stack, Text, Tiny } from "../../../@fastor"

export default function Hero({ count }){
    const headtext = {
        textpos: "start",
        fs3x: "var(--fs3x)",
        leading: 1,
        prefs: "lower",
    }

    const stroke = {
        hue: "transparent",
        stroke: "2px var(--dark40)",
    }

    const section = {
        h: "100%",
        pos: "fxd",
        space: "calc(var(--hs40) + var(--sz70)) 0 0",
        pstart: 0,
        ptop: 0,
    }

    return (
        <Segment {...section} data-active={count === 0 ? "active" : "inactive"}>
            <Container h="100%" pos="rtv">
                <Stack>
                    <Item move="y">
                        <Headtext {...headtext}>
                            <Text as="span">
                                Build.
                            </Text><br />
                            <Text as="span" {...stroke}>
                                Solve.
                            </Text><br />
                            <Text as="span">
                                Satisfy.
                            </Text>
                        </Headtext>

                        <Text pt="var(--sz60)" fs="var(--fs24)" leading={1.25}>
                            A team of talented magicians building satisfying digital solutions.
                        </Text>
                    </Item>
                </Stack>
            </Container>
        </Segment>
    )
}