import { v4 as uuid } from 'uuid'

let presentations = [
    {
        id: uuid(),
        name: 'Selta Digital',
        topic: 'Hello, world!',
        content: 'Selta Digital is multidisciplinary team of remote designers & developers working together to build some cool stuff on the web.',
        action: 'Let\'s build your app',
        paint: '#e9ecd5',
    },

    {
        id: uuid(),
        name: 'Been there, done that.',
        topic: 'Let the works speak for us.',
        content: 'We build amazing apps when we\'re in a good mood.',
        action: 'Explore projects',
        paint: '#e6f3e6',
    }
]

export function usePresentation(){
    return presentations
}