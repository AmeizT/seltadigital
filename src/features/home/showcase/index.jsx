import React from "react"
import { RiArrowRightUpLine } from "react-icons/ri"
import { StickSector } from "../../../components"
import { Button, Card, Container, Headtext, Icon, Item, pluralize, Sector, Segment, Stack, Text, Tiny } from "../../../@fastor"

export default function Showcase({ showcaseMap }){
    const [showcase] = React.useState([...showcaseMap])

    const textProps = {
        fs3x: "var(--fs3x)", 
        writemode: "vert",
    }

    const text = {
        textpos: "end",
    }

    return (
        <StickSector space="var(--sz70) 0" name="Showcase">
            <Item move="y">
                {showcase.map((showcase, key) => (
                    <React.Fragment key={key}>
                        <Segment move="y" mb="var(--sz50)">
                            <Headtext key={key} {...text}>
                                {showcase[0]}
                            </Headtext>

                            <Tiny {...text} mute={true} prefs="upper">
                                {showcase[1].length}&nbsp;
                                {pluralize(showcase[1].length, "Project")}
                            </Tiny>
                        </Segment>

                        <Segment move="y" gap="var(--sz40) 0" mb="var(--sz70)">
                            {showcase[1].map(showcase => (
                                <Card key={showcase.id} as="article" pos="rtv" bg={showcase.brand}>
                                    <Container space="var(--sz50)">
                                        <Stack move="y">
                                            <Item zx={2}>
                                                <Text hue="var(--snow10)">
                                                    {showcase.content.length > 199 ? `${showcase.content.slice(0, 199)}[...]` : 
                                                    showcase.content}
                                                </Text>
                                            </Item>

                                            <Item space="var(--sz50) 0">
                                                <Button fw={70} space="var(--sz20) 0" bb="2px dotted #fff" hue="#fff">
                                                    {showcase.action}&nbsp;
                                                    <Icon size={24} hex="#fff">
                                                        <RiArrowRightUpLine />
                                                    </Icon>
                                                </Button>
                                            </Item>

                                            <Item pbase="0" pend="0" zx={1}>
                                                <Headtext fw={70} fs3x="var(--fs3x)" hue="#ffffff5c" leading={1}>
                                                    {showcase.name}
                                                </Headtext>
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