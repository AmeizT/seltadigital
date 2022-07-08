import React from 'react'
import { Book, Segment, View } from '../kui'
import { usePresentation } from '../../json/presentation'
import { useWorks } from '../../json/projects'
import Presentation from './Presentation'
import Hero from './Hero'
import Work from './Work'

export default function Home(){
    const presentations = usePresentation()
    const works = useWorks()
    

    return (
        <React.Fragment>
            <Hero presentations={presentations} />
            <Work works={works} />
        </React.Fragment>
    )
}