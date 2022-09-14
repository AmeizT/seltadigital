import { v4 as uuid } from 'uuid'

let community = [
    {
        id: uuid(),
        name: 'Facebook',
        uri: 'https://facebook.com/seltadigital',
    },

    {
        id: uuid(),
        name: 'Twitter',
        uri: 'https://twitter.com/seltadigital',
    },

    {
        id: uuid(),
        name: 'LinkedIn',
        uri: 'https://linkedin.com/seltadigital',
    },

    {
        id: uuid(),
        name: 'Github',
        uri: 'https://github.com/seltatech',
    },
]

export function useCommunity(){
    return community
}