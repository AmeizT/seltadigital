import { Button, Container, Item, Segment, Stack, Text, View } from '../../kui'

export default function Presentation({ presentation, index }){
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

                            <Text as="h3" size={index === 0 ? "60px" : '40px'} pt={2} variant={600} leading="1.1" pos="start">
                                {presentation.topic} <br /> {presentation.topic2 && presentation.topic2}
                            </Text>
                        </Item>

                        <Item dn="column" pt={2} posx="start">
                            <Text pos="start" leading="28px">
                                {presentation.content}
                            </Text>

                            {presentation.sub && 
                                <Text as="small" size="14px" pt={2}>
                                    {presentation.sub}
                                </Text>
                            }
                        </Item>

                        <Item pt={3} posx="start">
                            <Button
                            space="10px 20px"
                            color="var(--snow20)"
                            paint="var(--primary)">
                                {presentation.action}
                            </Button>
                        </Item>

                        {index === 0 &&
                            <Item
                            pos="absolute"
                            base="var(--bar10)">
                                <Text 
                                as="h2" 
                                size="70px" 
                                variant={700} 
                                leading="1" 
                                color="var(--snow30)" 
                                colord="var(--dark40)">
                                    Selta <br /> Digital
                                </Text>
                            </Item>
                        }
                    </Stack>
                </Segment>
            </Container>
        </View>
    )
}