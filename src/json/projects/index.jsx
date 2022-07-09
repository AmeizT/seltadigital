import { v4 as uuid } from 'uuid'

let projects = [
    {
        id: uuid(),
        name: 'discava',
        content: 'Discava is an online store specializing in ergonomics, massage, smart home, vr & solar tech available only in Botswana, South Africa & Zimbabwe.',
        brand: '#0066b2',
        category: 'e-Commerce',
        action: 'Explore',
        scope: [
            {
                id: uuid(),
                name: 'Branding',
            },

            {
                id: uuid(),
                name: 'Web Design & Dev',
            },
        ],
        tech: [
            {
                id: uuid(),
                name: 'Next.js | React.js',
            },

            {
                id: uuid(),
                name: 'Sanity CMS',
            },
        ],
        uri: 'https://discava.vercel.app',
    },

    {
        id: uuid(),
        name: 'oqpy homes',
        content: 'Oqpy (/ˈɒkjʊpʌɪ/) Homes is a real estate app designed, developed, owned & managed by Selta Digital.',
        brand: '#00ccb0',
        category: 'Web',
        action: 'Explore',
        scope: [
            {
                id: uuid(),
                name: 'Branding',
            },

            {
                id: uuid(),
                name: 'Web Design & Dev',
            },
        ],

        tech: [
            {
                id: uuid(),
                name: 'Next.js | React.js',
            },

            {
                id: uuid(),
                name: 'Sanity CMS',
            },

            {
                id: uuid(),
                name: 'Python Django',
            },

            {
                id: uuid(),
                name: 'PostgreSQL',
            },
        ],
        uri: 'https://okkupy.vercel.app',
    },
]

export function useWorks(){
    return projects
}