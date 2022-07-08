import { v4 as uuid } from 'uuid'

let menu = [
    {
        id: uuid(),
        name: 'Works',
        uri: '/works',
    },

    {
        id: uuid(),
        name: 'Builder',
        uri: '/builder',
    },

    {
        id: uuid(),
        name: 'Shop',
        uri: '/shop',
    },

    {
        id: uuid(),
        name: 'About',
        uri: '/about',
    },

    {
        id: uuid(),
        name: 'Blog',
        uri: '/blog',
    },

    {
        id: uuid(),
        name: 'Jobs',
        uri: '/jobs',
    },
]

export function useMenu(){
    return menu
}