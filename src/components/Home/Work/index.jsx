import { Book, Button, Card, Container, Item, Segment, Stack, Text, View } from '../../kui'
import Project from './Project'

export default function Work({ works }){
    return (
        <View 
        as="section" 
        mh="100vh"
        dn="column"
        pos="relative"
        space="0 0 var(--md)"
        paint="var(--snow20)"
        paintd="var(--dark70)">
            <Segment space="var(--md) 0">
                <Stack
                wt="fit" 
                ht="fit" 
                pos="relative"
                top="0"
                zx="900">
                    <Item wt="fit" space="0 var(--sm)">
                        <Text
                        as="span"
                        size="14px"
                        prefers="upper"
                        tracking="0.10ex">
                            Featured Projects
                        </Text>
                    </Item>
                </Stack>
            </Segment>

            <Segment ht="maxFill" space="0 var(--sm)">
                <Book
                device="phone"
                columns={`repeat(${works.length}, minmax(90%, 1fr))`}
                snapType="x mandatory"
                of="scroll hidden"
                gap="var(--sm)">
                    {works.map((work, index) => (
                        <Project key={work.id} work={work} idx={index} len={works.length} />
                    ))}
                </Book>
            </Segment>
        </View>
    )
}