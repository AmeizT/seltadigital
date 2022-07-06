import React from 'react'
import { Book, View } from '../kui'
import { usePresentation } from '../../json/presentation'
import Presentation from './Presentation'

export default function Home(){
    const presentations = usePresentation()

    return (
        <View>
            <Book
            device="phone"
            ht="100vh"
            rw={`repeat(${presentations.length}, minmax(100%, 1fr))`}
            snapType="y mandatory"
            posx="center"
            pos="relative"
            of="hidden scroll">
                {presentations.map(presentation => (
                    <React.Fragment key={presentation.id}>
                        <Presentation presentation={presentation} />
                    </React.Fragment>
                ))}
            </Book>
        </View>
    )
}