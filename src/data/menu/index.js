import { v4 as uuid } from 'uuid'

let menu = [
    {
        id: uuid(),
        name: 'Home',
        uri: '/',
    },

    {
        id: uuid(),
        name: 'Showcase',
        uri: '/showcase',
    },

    {
        id: uuid(),
        name: 'Read & Learn',
        uri: '/learn',
    },

    {
        id: uuid(),
        name: 'Estimator',
        uri: '/estimator',
    },

    {
        id: uuid(),
        name: 'Agency',
        uri: '/about',
    },

    {
        id: uuid(),
        name: 'Shop',
        uri: '/shop',
    },

    {
        id: uuid(),
        name: 'Contact',
        uri: '/contact',
    },
]

export function useMenu(){
    return menu
}