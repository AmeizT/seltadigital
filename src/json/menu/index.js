import { v4 as uuid } from 'uuid'

let menu = [
    {
        id: uuid(),
        name: 'Shop',
        uri: '/shop',
    },

    {
        id: uuid(),
        name: 'Works',
        uri: '/works',
    },

    {
        id: uuid(),
        name: 'About',
        uri: '/about',
    },

    {
        id: uuid(),
        name: 'Careers',
        uri: '/careers',
    },

    {
        id: uuid(),
        name: 'Blog',
        uri: '/blog',
    },

    {
        id: uuid(),
        name: 'Contact',
        uri: '/contact',
    }
]

export function useMenu(){
    return menu
}