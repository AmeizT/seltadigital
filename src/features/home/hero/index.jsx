import { Container, Headtext, Item, Segment, Stack, Text, Tiny } from "../../../@fastor"

export default function Hero(){
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
        pos: "abs",
        pstart: 0,
        ptop: 0,
    }

    return (
        <Segment {...section}>
            <Container h="100%" pos="rtv" my="center">
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

                        <Tiny pt="var(--sz60)" fs={12} prefs="upper">
                            We are a team of talented web development magicians working remotely to build satisfying digital experiences on the web.
                        </Tiny>
                    </Item>
                </Stack>
            </Container>
        </Segment>
    )
}