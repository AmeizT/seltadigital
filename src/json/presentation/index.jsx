import { v4 as uuid } from 'uuid'

let presentations = [
    {
        id: uuid(),
        name: 'Selta Digital',
        topic: 'It all starts with',
        topic2: 'Hello, world!',
        content: 'We\'re a small team of talented designers and developers working remotely & building cool stuff for the web.',
        action: 'Let\'s build your app',
        paint: '#e9ecd5',
    },

    {
        id: uuid(),
        name: 'Recent Work',
        topic: 'Next level code writing',
        content: 'Web, software, app design & development',
        action: 'Learn more',
        paint: '#e6f3e6',
    }
]

export function usePresentation(){
    return presentations
}