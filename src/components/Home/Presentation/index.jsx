import { Button, Container, Item, Segment, Stack, Text, View } from '../../kui'

export default function Presentation({ presentation }){
    return (
        <View
        as="section"
        ht="100vh"
        pos="relative"
        posx="center"
        posv="start"
        snap="start"
        snapStop="always"
        paint={presentation.paint}>
            <Container space="var(--bar10) var(--md)">
                <Segment>
                    <Stack dn="column">
                        <Item dn="column" posx="start">
                            <Text as="small" size="12px" pos="start" variant={600} prefers="upper" tracking="0.15ex" saturation="weak">
                                {presentation.name}
                            </Text>

                            <Text as="h3" size="32px" pt={2} variant={600} leading="1.1" pos="start">
                                {presentation.topic} <br /> {presentation.topic2 && presentation.topic2}
                            </Text>
                        </Item>

                        <Item pt={2} posx="start">
                            <Text pos="start" size="20px" leading="30px">
                                {presentation.content}
                            </Text>
                        </Item>

                        <Item pt={2} posx="start">
                            <Button
                            space="10px 20px"
                            color="var(--snow20)"
                            paint="var(--dark40)">
                                {presentation.action}
                            </Button>
                        </Item>
                    </Stack>
                </Segment>
            </Container>
        </View>
    )
}