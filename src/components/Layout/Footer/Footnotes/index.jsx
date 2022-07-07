import React from 'react'
import { Item, NavLink, Segment, Stack, Text } from '../../../kui'
import { useNotes } from '../../../../json/notes'

export default function FootNotes(){
    const notes = useNotes()

    return (
        <React.Fragment>
            <Segment>

            </Segment>
            
            <Segment view="none" border="base">
                <Stack pt={3} pb={4} dn="column">
                    {notes.map((note, index) => (
                        <Item key={note.id}>
                            <Text as="small" size="md" leading="24px" saturation="weak">
                                {note.content}
                            </Text>
                        </Item>
                    ))}
                </Stack>
            </Segment>
        </React.Fragment>
    )
}