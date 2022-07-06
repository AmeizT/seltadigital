import { v4 as uuid } from 'uuid'

let presentations = [
    {
        id: uuid(),
        name: 'Selta Digital',
        topic: 'It all starts with Hello, world!',
        content: 'We\'re a team of talented designers and developers working remotely to build cool stuff for the web and mobile devices.',
        action: 'Let\'s build your app',
    },

    {
        id: uuid(),
        name: 'Recent Work',
        topic: 'Next level code writing',
        content: 'Web, software, app design & development',
        action: 'Learn more',
    }
]

export function usePresentation(){
    return presentations
}