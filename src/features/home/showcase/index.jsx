import React from "react"
import Image from "next/image"
import { Button, Card, Container, Headtext, imageLoader, Item, Segment, Stack, Text, Tiny } from "../../../@fastor"

export default function Showcase({ count, showcaseMap }){
    const [showcase] = React.useState([...showcaseMap])

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
        space: "var(--hs50) 0 0",
        oy: "scroll",
    }

    return (
        <Segment {...section} data-active={count === 1 ? "active" : "inactive"}>
            <Container h="100%" pos="rtv" space="0" move="y">
                <Stack space="0 var(--sz50)">
                    <Item move="y">
                        <Headtext {...headtext}>
                            <Text as="span">
                                show
                            </Text>
                            <Text as="span" {...stroke}>
                                case.
                            </Text>
                        </Headtext>

                        <Tiny pt="var(--sz50)" prefs="upper">
                            Works we&apos;ve done in the past <br />that we&apos;re proud to show off...
                        </Tiny>
                    </Item>
                </Stack>

                <Stack move="y" mt="var(--sz70)">
                    {showcase.map((showcase, key) => (
                    <React.Fragment key={key}>
                        {showcase[1].map(showcase => (
                            <Card key={showcase.id} as="article">
                                <Stack move="y">
                                    <Item h="44vh" pos="rtv" imgFilter="hue-rotate(180deg)">
                                        <Image
                                        src={showcase.image}
                                        alt={showcase.name}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition={showcase?.pos}
                                        loader={imageLoader} />

                                        <Item w="fit" pos="abs" pbase="var(--sz50)" pstart="var(--sz50)" zx={1}>
                                            <Headtext fw={70} fs3x="var(--fs3x)" hue="#ffffff5c" leading={1}>
                                                {showcase.name}
                                            </Headtext>
                                        </Item>
                                    </Item>

                                    <Item view="none" move="y" space="var(--sz50) 0">
                                        <Tiny fs={10} space="var(--sz50) 0" mute={true} prefs="upper">
                                            {showcase.category}
                                        </Tiny>

                                        <Text leading="1.5">
                                            {showcase.content.length > 199 ? `${showcase.content.slice(0, 199)}[...]` : 
                                            showcase.content}
                                        </Text>
                                    </Item>
                                </Stack>
                            </Card>
                        ))}
                    </React.Fragment>))}
                </Stack>
            </Container>
        </Segment>
    )
}