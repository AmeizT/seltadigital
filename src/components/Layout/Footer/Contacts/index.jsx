import { Item, List, ListItem, Segment, Stack, Text } from '../../../kui'

export default function Contacts({ contacts }){
    return (
        <Segment space="var(--md) 0 0">
            <List dn="column">
                {contacts.map(contact => (
                    <ListItem key={contact.id} dn="column" wt="100%" space="var(--sm) 0">
                        <Item>
                            <Text as="h5" variant={300} size="20px" color="var(--snow20)">
                                {contact.city} <Text as="span" color="var(--primary)">.</Text>
                            </Text>
                        </Item>

                        <Item space="6px 0 0">
                            <Text as="small" size="14px" saturation="weak">
                                {contact.number}
                            </Text>
                        </Item>
                    </ListItem>
                ))}
            </List>
        </Segment>
    )
}