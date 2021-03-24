import { v4 as uuidv4 } from 'uuid';

export const songReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_SONG':
            return [...state, {
                title: action.song.title, 
                artist: action.song.artist,
                id: uuidv4()
            }]
        case 'REMOVE_BOOK':
            return state.filter((song) => {
                return song.id !== action.id
            })
        default:
            return state
    }
}