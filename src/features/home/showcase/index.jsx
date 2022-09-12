import React from "react"
import { StickSector } from "../../../components"
import { Card, Container, Headtext, Item, pluralize, Sector, Segment, Stack, Text, Tiny } from "../../../@fastor"

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
                                <Card key={showcase.id} as="article" bg="var(--snow20)">
                                    <Container space="var(--sz50)">
                                        <Stack move="y">
                                            <Item>
                                                <Text>
                                                    {showcase.content.length > 199 ? `${showcase.content.slice(0, 199)}[...]` : 
                                                    showcase.content}
                                                </Text>
                                            </Item>
                                            <Item></Item>
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