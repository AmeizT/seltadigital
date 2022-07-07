import { v4 as uuid } from 'uuid'

let notes = [
    {
        id: uuid(),
        content: 'Selta Digital is multidisciplinary team of remote designers & developers working together to craft some cool stuff on the web.',
    }
]

export function useNotes(){
    return notes
}