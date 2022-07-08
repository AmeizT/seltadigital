import React from 'react'
import { Item, NavLink, Segment, Stack, Text } from '../../../kui'
import { useNotes } from '../../../../json/notes'

export default function FootNotes(){
    const notes = useNotes()

    return (
        <React.Fragment>
            <Segment space="var(--xxl) 0">
                <Stack>
                    <Item>
                        <Text 
                        as="span" 
                        size="20px"
                        saturation="weak">
                            We&apos;re happy that you&apos;re here. We&apos;d love to work on your next project.
                        </Text>
                    </Item>
                </Stack>
            </Segment>
        </React.Fragment>
    )
}