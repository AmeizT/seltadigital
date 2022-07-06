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
                        <Item dn="column" posx="center">
                            <Text as="small" size="14px" pos="center" variant={700}>
                                {presentation.name}
                            </Text>

                            <Text as="h3" size="32px" pt={3} variant={700} leading="1.1" pos="center">
                                {presentation.topic} <br /> {presentation.topic2 && presentation.topic2}
                            </Text>
                        </Item>

                        <Item pt={3} posx="center">
                            <Text pos="center">
                                {presentation.content}
                            </Text>
                        </Item>

                        <Item pt={3} posx="center">
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