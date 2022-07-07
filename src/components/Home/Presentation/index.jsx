
import Image from 'next/image'
import { Book, Button, Card, Container, Item, Segment, Stack, Text, View } from '../../kui'

export default function Presentation({ presentation, index, works }){
    const imageLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <View
        as="section"
        ht="auto"
        mh="100vh"
        pos="relative"
        posx="center"
        posv="start"
        snap="start"
        snapStop="always"
        paint={presentation.paint}>
            <Container dn="column" space="var(--bar10) var(--md)">
                <Segment>
                    <Stack dn="column">
                        <Item dn="column" posx="start">
                            <Text as="small" size="12px" pos="start" variant={600} prefers="upper" tracking="0.15ex" saturation="weak">
                                {presentation.name}
                            </Text>

                            <Text as="h3" size={index === 0 ? "60px" : '32px'} pt={2} variant={600} leading="1.1" pos="start">
                                {presentation.topic} <br /> {presentation.topic2 && presentation.topic2}
                            </Text>
                        </Item>

                        <Item dn="column" pt={2} posx="start">
                            <Text pos="start" leading="26px">
                                {presentation.content}
                            </Text>

                            {presentation.sub && 
                                <Text as="small" size="14px" pt={2}>
                                    {presentation.sub}
                                </Text>
                            }
                        </Item>

                        <Item pt={3} posx="start">
                            {index !== 1 &&
                                <Button
                                space="14px 20px"
                                color="var(--snow20)"
                                paint="var(--primary)">
                                    {presentation.action}
                                </Button>
                            }
                        </Item>

                        {index === 0 &&
                            <Item
                            pos="absolute"
                            base="calc(var(--bar10) + var(--md))">
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

                {index === 1 && 
                    <Segment dn="column">
                        {works.map(work => (
                            <Card 
                            key={work.id} 
                            mb={3}
                            paint={work.brand}>
                                <Container dn="column" space="var(--md)">
                                    <Segment view="none">
                                        <Image
                                        src={work.brand}
                                        alt={work.name}
                                        width={work.name === 'discava' ? 45 : 30}
                                        height={30}
                                        loader={imageLoader} />
                                    </Segment>

                                    <Segment>
                                        <Stack dn="column">
                                            <Item>
                                                <Text color="var(--snow20)" size="14px" prefers="upper" variant={700}>
                                                    {work.name} / {work.category}
                                                </Text>
                                            </Item>

                                            <Item pt={1}>
                                                <Text size="16px" color="var(--snow20)">
                                                    {work.content.length > 98 ? `${work.content.slice(0, 95)}${'...'}` : `${work.content}`}
                                                </Text>
                                            </Item>
                                        </Stack>
                                    </Segment>
                                </Container>
                            </Card>
                        ))}

                        <Item>
                            <Button
                            space="8px 0"
                            variant={600}
                            color="var(--primary)">
                                {presentation.action}
                            </Button>
                        </Item>
                    </Segment>
                }
            </Container>
        </View>
    )
}