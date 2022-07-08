import { v4 as uuid } from 'uuid'

let contacts = [
    {
        id: uuid(),
        number: '+263 71 941 3653',
        city: 'Harare',
    },

    {
        id: uuid(),
        number: '+267 77 011 583',
        city: 'Gaborone',
    },
]

export function useContact(){
    return contacts
}