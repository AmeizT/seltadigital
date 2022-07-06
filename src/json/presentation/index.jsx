import { v4 as uuid } from 'uuid'

let presentations = [
    {
        id: uuid(),
        name: 'Selta Digital',
        topic: 'It all starts with',
        topic2: 'Hello, world!',
        content: 'We\'re a small and talented team of remote designers & developers working together to build some cool stuff on the web.',
        action: 'Let\'s build your app',
        paint: '#e9ecd5',
    },

    {
        id: uuid(),
        name: 'Been there, done that.',
        topic: 'Proud to showcase what we can do on a good day.',
        content: 'We build amazing apps when we\'re in a good mood.',
        action: 'Explore projects',
        paint: '#e6f3e6',
    }
]

export function usePresentation(){
    return presentations
}