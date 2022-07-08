import { Card, Container, Item, List, ListItem, Segment, Stack, Text } from '../../../kui'

export default function Project({ work, idx, len }){
    return (
        <Card 
        key={work.id} 
        as="article"
        wt="100%"
        ht="100vh"
        pos="relative"
        posx="center"
        posv="start"
        snap="start"
        snapStop="always">
            <Container dn="column" space="var(--bar10) var(--md) 0">
                <Segment dn="column">
                    <Stack dn="column">
                        <Item dn="column" space="var(--sm) 0">
                            <Text 
                            size="60px" 
                            prefers="caps" 
                            leading={1}
                            variant={700}>
                                {work.name}
                            </Text>
                        </Item>

                        <Item>
                            <Text>
                                {work.content}
                            </Text>
                        </Item>
                    </Stack>

                    <Stack dn="column" space="var(--md) 0 0">
                        <Item>
                            <Text 
                            size="14px"
                            prefers="upper"
                            saturation="weak">
                                Category
                            </Text>
                        </Item>

                        <Item>
                            <Text>
                                {work.category}
                            </Text>
                        </Item>
                    </Stack>

                    <Stack dn="column" space="var(--md) 0 0">
                        <Item>
                            <Text 
                            size="14px"
                            prefers="upper"
                            saturation="weak">
                                The work
                            </Text>
                        </Item>

                        <Item>
                            <List dn="column">
                                {work.scope.map(scope => (
                                    <ListItem 
                                    key={scope.id} 
                                    wt="100%"
                                    prefers="caps">
                                        {scope.name}
                                    </ListItem>
                                ))}
                            </List>
                        </Item>
                    </Stack>

                    <Stack dn="column" space="var(--md) 0 0">
                        <Item>
                            <Text 
                            size="14px"
                            prefers="upper"
                            saturation="weak">
                                Tech stack
                            </Text>
                        </Item>

                        <Item>
                            <List dn="column">
                                {work.tech.map(tech => (
                                    <ListItem 
                                    key={tech.id} 
                                    wt="100%"
                                    prefers="caps">
                                        {tech.name}
                                    </ListItem>
                                ))}
                            </List>
                        </Item>
                    </Stack>
                </Segment>
            </Container>

            <Stack
            wt="fit" 
            ht="fit" 
            pos="absolute"
            base="var(--bar10)"
            end="0">
                <Item wt="fit" posv="center" space="var(--md)">
                    <Text 
                    as="span"
                    size="16px"
                    space="0 var(--xs)"
                    tracking="0.10ex"
                    color="var(--primary)">
                        0{idx + 1}
                    </Text>

                    <Item 
                    as="span"
                    wt="20px"
                    ht="2px"
                    paint="var(--primary)">

                    </Item>

                    <Text 
                    as="span"
                    size="16px"
                    space="0 0 0 var(--xs)"
                    tracking="0.10ex"
                    color="var(--primary)">
                        0{len}
                    </Text>
                </Item>
            </Stack>
        </Card>
    )
}