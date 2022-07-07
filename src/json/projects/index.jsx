import { v4 as uuid } from 'uuid'

let projects = [
    {
        id: uuid(),
        name: 'discava',
        content: 'Discava is an online store which operates in Botswana, Zimbabwe and South Africa specializing in ergonomics, massages, smart home, vr and solar technology.',
        brand: '#0066b2',
        category: 'e-Commerce',
        action: 'Explore',
        scope: [
            {
                id: uuid(),
                name: 'branding',
            },

            {
                id: uuid(),
                name: 'web design',
            },

            {
                id: uuid(),
                name: 'web development',
            },
        ]
    },

    {
        id: uuid(),
        name: 'oqpy homes',
        content: 'Oqpy (/ˈɒkjʊpʌɪ/) Homes is a real estate app designed, developed and managed by Selta Digital.',
        brand: '#00ccb0',
        category: 'web',
        action: 'Explore',
        scope: [
            {
                id: uuid(),
                name: 'branding',
            },

            {
                id: uuid(),
                name: 'web design',
            },

            {
                id: uuid(),
                name: 'web development',
            },
        ]
    },
]

export function useWorks(){
    return projects
}