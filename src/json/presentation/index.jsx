import { v4 as uuid } from 'uuid'

let presentations = [
    {
        id: uuid(),
        name: 'Selta Digital',
        topic: 'Beyond brilliance.',
        content: 'Selta Digital is multidisciplinary team of remote designers & developers working together to craft some cool stuff on the web.',
        sub: 'We aim to bring concepts to life by building eye-catching scalable web & mobile apps using the most versatile tech stack.',
        action: 'Let\'s build your app',
        // paint: '#e9ecd5',
    },

    {
        id: uuid(),
        name: 'Been there, done that.',
        topic: 'Let the work speak.',
        content: 'We build cool apps when we push ourselves to the limits and during the past few years we have brought some amazing concepts to life from simple static websites, PWAs to more complex e-commerce apps.',
        action: 'Discover our work',
    }
]

export function usePresentation(){
    return presentations
}