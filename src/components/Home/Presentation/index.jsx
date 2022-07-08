
import Image from 'next/image'
import { IconContext } from 'react-icons'
import { MdArrowForward } from 'react-icons/md'
import { BackDrop, Book, Button, Card, Container, Item, Segment, Stack, Text, View } from '../../kui'

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
                        <Item dn="column" posx="start" pt={2}>
                            <Text as="small" size="14px" pos="start" prefers="upper" tracking="0.10ex" saturation="weak">
                                {presentation.name}
                            </Text>

                            {presentation.topic && 
                                <Text as="h3" size={index === 0 ? "60px" : '32px'} variant={600} leading="1.1" pos="start">
                                    {presentation.topic}{index === 0 && <Text as="span" color="var(--primary)">.</Text>} <br /> {presentation.topic2 && presentation.topic2} 
                                </Text>
                            }
                        </Item>

                        <Item dn="column" pt={2} posx="start">
                            <Text size={index === 0 && '20px'} pos="start" leading="26px">
                                {presentation.content}
                            </Text>

                            {presentation.sub && 
                                <Text as="small" size="16px" pt={2} saturation="weak">
                                    {presentation.sub}
                                </Text>
                            }
                        </Item>

                        <Item pt={3} posx="start">
                            {index !== 1 &&
                                <Button
                                space="12px 0"
                                color="var(--primary)"
                                variant={700}>
                                    <Stack posv="center">
                                        <Item pr={1}>
                                            {presentation.action}
                                        </Item>

                                        <Item
                                        wt="fit"
                                        ht="fit"
                                        space="6px"
                                        rad="50px"
                                        border="2px solid var(--primary)">
                                            <IconContext.Provider value={{ size: 20, color: 'var(--primary)' }}>
                                                <MdArrowForward />
                                            </IconContext.Provider>
                                        </Item>
                                    </Stack>
                                </Button>
                            }
                        </Item>

                        {index === 0 &&
                            <Item
                            wt="fit"
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
            </Container>
        </View>
    )
}