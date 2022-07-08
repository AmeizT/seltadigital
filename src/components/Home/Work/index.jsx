import { Book, Button, Card, Container, Item, Segment, Stack, Text } from '../../kui'
import Project from './Project'

export default function Work({ works }){
    return (
        <Segment 
        as="section" 
        ht="100vh"
        dn="column"
        pos="relative">
            <Stack
            wt="fit" 
            ht="fit" 
            pos="absolute"
            top="var(--md)">
                <Item wt="fit" space="0 var(--md)">
                    <Text
                    size="14px"
                    prefers="upper"
                    saturation="weak"
                    tracking="0.10ex">
                        Featured Projects
                    </Text>
                </Item>
            </Stack>

            <Book
            ht="maxFill"
            device="phone"
            columns={`repeat(${works.length}, minmax(100%, 1fr))`}
            snapType="x mandatory"
            of="scroll hidden"
            space="var(--md) 0"
            paint="var(--snow20)">
                {works.map((work, index) => (
                    <Project key={work.id} work={work} idx={index} len={works.length} />
                ))}
            </Book>
        </Segment>
    )
}