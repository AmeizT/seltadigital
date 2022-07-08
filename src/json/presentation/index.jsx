import { v4 as uuid } from 'uuid'

let presentations = [
    {
        id: uuid(),
        name: 'About Selta',
        topic: 'Beyond brilliance',
        content: 'Selta Digital is a multidisciplinary team of remote designers & developers working together to craft some cool apps.',
        sub: 'We aim to bring concepts to life by building stunning & scalable web or mobile apps using the most versatile tech stack.',
        action: 'Let\'s build your app',
        category: 'hero',
        // paint: '#e9ecd5',
    },

    {
        id: uuid(),
        name: 'Featured Projects',
        content: 'We are held in high repute by our clients and our professional timeline ranges from simple static websites to advanced e-commerce apps.',
        action: 'See all works',
        paint: 'var(--dark90)',
        image: '/code.jpg', 
        position: 'center center',
    }
]

export function usePresentation(){
    return presentations
}