import React from "react"
import Image from "next/image"
import { RiArrowRightUpLine } from "react-icons/ri"
import { StickSector } from "../../../components"
import { Button, Card, Container, Headtext, Icon, imageLoader, Item, pluralize, Sector, Segment, Stack, Text, Tiny } from "../../../@fastor"

export default function Showcase({ showcaseMap }){
    const [showcase] = React.useState([...showcaseMap])
    const d = new Date()
    const year = d.getFullYear().toString().slice(2, 4)

    const textProps = {
        fs3x: "var(--fs3x)", 
        writemode: "vert",
    }

    const text = {
        textpos: "start",
    }

    return (
        <StickSector name="Showcase">
            <Item space="var(--sz50) 0 var(--sz70)">
                <Text fs={18} mute={true}>
                    Some recent works from 18/{year} that we are proud to showcase.
                </Text>
            </Item>

            <Item move="y">
                {showcase.map((showcase, key) => (
                    <React.Fragment key={key}>
                        <Segment move="y" mb="var(--sz50)" view="none">
                            <Headtext key={key} {...text}>
                                {showcase[0]}
                            </Headtext>

                            <Tiny {...text} mute={true} prefs="upper">
                                {showcase[1].length}&nbsp;
                                {pluralize(showcase[1].length, "Project")}
                            </Tiny>
                        </Segment>

                        <Segment move="y" gap="var(--sz40) 0">
                            {showcase[1].map(showcase => (
                                <Card key={showcase.id} as="article" pos="rtv" mb="var(--sz70)">
                                    <Container space="0">
                                        <Stack move="y">
                                            <Item h="50vh" pos="rtv" imgFilter="grayscale(100%)">
                                                <Image
                                                src={showcase.image}
                                                alt={showcase.name}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition={showcase?.pos}
                                                loader={imageLoader} />

                                                <Item pos="abs" pbase="var(--sz50)" pstart="var(--sz50)" zx={1}>
                                                    <Headtext fw={70} fs3x="20vw" hue="#ffffff5c" leading={1}>
                                                        {showcase.name}
                                                    </Headtext>
                                                </Item>
                                            </Item>

                                            <Item move="y" pt="var(--sz50)">
                                                <Text fs={18} fw={60} prefs="lower">
                                                    {showcase.content.length > 199 ? `${showcase.content.slice(0, 199)}[...]` : 
                                                    showcase.content}
                                                </Text>

                                                <Tiny fs={10} pt="var(--sz50)" mute={true} prefs="upper">
                                                    {showcase.category}
                                                </Tiny>
                                            </Item>

                                            <Item space="var(--sz50) 0">
                                                <Button fw={70} space="var(--sz20) 0" bb="2px dotted var(--dark40)" hue="var(--dark40)">
                                                    {showcase.action}&nbsp;
                                                    <Icon size={24} hex="#fff">
                                                        <RiArrowRightUpLine />
                                                    </Icon>
                                                </Button>
                                            </Item>
                                        </Stack>
                                    </Container>
                                </Card>
                            ))}
                        </Segment>
                    </React.Fragment>
                ))}
            </Item>
        </StickSector>
    )
}