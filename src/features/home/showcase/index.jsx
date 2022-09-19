import React from "react"
import Image from "next/image"
import { Button, Card, Container, Headtext, imageLoader, Item, Segment, Stack, Text, Tiny } from "../../../@fastor"

export default function Showcase({ count, showcaseMap }){
    const [showcase] = React.useState([...showcaseMap])

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
        <Segment {...section} data-active={count === 1 ? "active" : "inactive"}>
            <Container h="100%" pos="rtv" space="0" move="y">
                <Stack space="0 var(--sz50)">
                    <Item move="y">
                        <Headtext {...headtext}>
                            <Text as="span">
                                featured&nbsp;
                            </Text><br />
                            <Text as="span" {...stroke}>
                                projects.
                            </Text>
                        </Headtext>

                        <Tiny pt="var(--sz60)" prefs="upper">
                            We had the opportunity to work with some amazing brands & people over the past few years. These are some works we&apos;ve done in the past that we&apos;re proud to show off...
                        </Tiny>
                    </Item>
                </Stack>

                <Stack move="y" mt="var(--sz70)" view="none">
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