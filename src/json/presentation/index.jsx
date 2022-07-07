import { v4 as uuid } from 'uuid'

let presentations = [
    {
        id: uuid(),
        name: 'Selta Digital',
        topic: 'Beyond brilliance.',
        content: 'Selta Digital is a multidisciplinary team of remote designers & developers working together to craft some cool apps.',
        sub: 'We aim to bring concepts to life by building stunning & scalable web or mobile apps using the most versatile tech stack.',
        action: 'Let\'s build your app',
        // paint: '#e9ecd5',
    },

    {
        id: uuid(),
        name: 'Been there, done that.',
        topic: 'Let the work speak.',
        content: 'We are held in high repute by our clients and our professional timeline ranges from simple static websites to advanced e-commerce apps.',
        action: 'See all works',
    }
]

export function usePresentation(){
    return presentations
}