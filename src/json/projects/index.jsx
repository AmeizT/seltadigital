import { v4 as uuid } from 'uuid'

let projects = [
    {
        id: uuid(),
        name: 'discava',
        content: 'Discava Store is an online store specializing in ergonomics, massage, smart home, vr & solar gadgets.',
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
                name: 'Web desgin & development',
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
                name: 'Vercel',
            },
        ],
        uri: 'https://discava.vercel.app',
    },

    {
        id: uuid(),
        name: 'oqpy homes',
        content: 'Oqpy (/ˈɒkjʊpʌɪ/) Homes is a real estate app designed, developed & managed by Selta Digital.',
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
                name: 'Web desgin & development',
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

            {
                id: uuid(),
                name: 'Vercel',
            },
        ],
        uri: 'https://okkupy.vercel.app',
    },

    {
        id: uuid(),
        name: 'truckire',
        content: 'Truckire is a logistics & booking app for haulage trucks.',
        brand: '#0066b2',
        category: 'Web',
        action: 'Explore',
        scope: [
            {
                id: uuid(),
                name: 'Branding',
            },

            {
                id: uuid(),
                name: 'Web desgin & development',
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

            {
                id: uuid(),
                name: 'Vercel',
            },
        ],
        uri: 'https://truckire.vercel.app',
    },
]

export function useWorks(){
    return projects
}