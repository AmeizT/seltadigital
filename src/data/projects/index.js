import { v4 as uuid } from 'uuid'

const showcase = new Map([
    ["2021", [
        {
            id: uuid(),
            name: 'discava',
            content: 'E-commerce business specializing in ergonomics, smart home, massage, vr and more.',
            brand: '#0066b2',
            category: 'e-Commerce',
            action: 'Discover',
            scope: [
                {
                    id: uuid(),
                    name: 'Branding',
                },

                {
                    id: uuid(),
                    name: 'Website desgin & development',
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
            image: "/brands/discava-brand.jpg",
            uri: 'https://discava.vercel.app',
        },]
    ],

    ["2022", [
        {
            id: uuid(),
            name: 'oqpy homes',
            content: 'Real estate app directly connects home seekers to landlords.',
            brand: '#00ccb0',
            category: 'Websites',
            action: 'Discover',
            scope: [
                {
                    id: uuid(),
                    name: 'Branding',
                },

                {
                    id: uuid(),
                    name: 'Website desgin & development',
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
            pos: "right center",
            image: "/brands/oqpy.jpg",
            notes: "The app was built to change the narrative that real estate agents charge home seekers exobitant rates to help them secure decent homes. Oqpy Homes therefore tries to eliminate the middleman [real estate agents] by acting as a virtual agent and promoting direct communication between landlords and tenants.",
            uri: 'https://okkupy.vercel.app',
        },

        {
            id: uuid(),
            name: 'truckire',
            content: 'Truck hire and booking app.',
            brand: '#000000',
            category: 'Websites',
            action: 'Discover',
            scope: [
                {
                    id: uuid(),
                    name: 'Branding',
                },

                {
                    id: uuid(),
                    name: 'Website desgin & development',
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
            image: "/brands/truckire.jpg",
            uri: 'https://truckire.vercel.app',
        },]
    ],
])

export function useShowcase(){
    return showcase
}