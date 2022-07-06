import React from 'react'
import { Item, NavLink, Segment, Stack, Text } from '../../../kui'
import { useNotes } from '../../../../json/footnotes'

export default function FootNotes({ region, hibernate }){
    const notes = useNotes()

    return (
        <React.Fragment>
        {hibernate && 
            <Segment border="base">
                <Stack pt={3} pb={4} dn="column">
                    <Item>
                        <Text as="small" size="xs" leading="20px">
                            <Text as="sup">* </Text>Available only in Botswana, Zimbabwe and South Africa. Availability varies by region. Free delivery available only for purchases above {region && region.country === 'BW' ? <Text size="xs" typeface="secondary">BWP1,000</Text> : region && region.country === 'ZA' ? <Text size="xs" typeface="secondary">R1,000</Text> : <Text size="xs" typeface="secondary">$100</Text>} and limited to places in close proximity to {region && region.country === 'BW' ? 'Gaborone or Francistown' : 'Gaborone, Francistown, Harare & Jo\'burg'}. Intercity shipping services are provided by third party courier service providers and the customer is responsible for all the shipping costs.
                        </Text>
                    </Item>

                    {notes.map((note, index) => (
                        <Item key={note.id}>
                            <Text as="small" size="xs" leading="20px">
                                {index === 0 ? <Text as="sup">** </Text> : index === 1 ? <Text as="sup">&dagger; </Text> : index === 2 ? <Text as="sup">&dagger; &dagger; </Text> : index === 3 && <Text as="sup">&Dagger; </Text>}{note.content} <br /> {note.extContent}
                            </Text>
                        </Item>
                    ))}
                </Stack>
            </Segment>}
        </React.Fragment>
    )
}