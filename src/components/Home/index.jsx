import React from 'react'
import { Book, View } from '../kui'
import { usePresentation } from '../../json/presentation'
import { useWorks } from '../../json/projects'
import Presentation from './Presentation'

export default function Home(){
    const presentations = usePresentation()
    const works = useWorks()

    return (
        <View>
            <Book
            device="phone"
            ht="100vh"
            rw={`repeat(${presentations.length}, minmax(100%, 1fr))`}
            snapType="both mandatory"
            posx="center"
            pos="relative"
            of="hidden scroll">
                {presentations.map((presentation, index) => (
                    <React.Fragment key={presentation.id}>
                        <Presentation presentation={presentation} index={index} works={works} />
                    </React.Fragment>
                ))}
            </Book>
        </View>
    )
}