import React from 'react'
import { View } from '../../kui'
import Presentation from '../Presentation'

export default function Hero({ presentations }){
    return (
        <React.Fragment>
            {presentations.filter(presentation => presentation.category === 'hero').map((presentation, index) => (
                <React.Fragment key={presentation.id}>
                    <Presentation presentation={presentation} index={index} />
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}