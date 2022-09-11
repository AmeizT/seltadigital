import { v4 as uuid } from 'uuid'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

let menu = [
    [
        {
            id: uuid(),
            name: 'Menu',
            icon: <HiOutlineMenuAlt4 />,
        },

        {
            id: uuid(),
            name: 'Menu',
            icon: <HiOutlineMenuAlt4 />,
        },
    ],

    [
        {
            id: uuid(),
            name: 'Work',
            uri: '/work',
        },

        {
            id: uuid(),
            name: 'About',
            uri: '/about',
        },

        {
            id: uuid(),
            name: 'Shop',
            uri: '/shop',
        },


        {
            id: uuid(),
            name: 'Blog',
            uri: '/blog',
        },

        {
            id: uuid(),
            name: 'Builder',
            uri: '/builder',
        },
    ],
]

export function useMenu(){
    return menu
}