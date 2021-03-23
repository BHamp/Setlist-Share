import React, {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const SongContext = createContext();

const SongContextProvider = (props) => {
    const [songs, setSongs] = useState([
        {title: `Everything In It's Right Place`, artist: `Radiohead`, id: 1},
        {title: `Kid A`, artist: `Radiohead`, id: 2},
        {title: `The National Anthem`, artist: `Radiohead`, id: 3},
        {title: `How to Disappear Completely`, artist: `Radiohead`, id: 4},
        {title: `Treefingers`, artist: `Radiohead`, id: 5},
        {title: `Optimistic`, artist: `Radiohead`, id: 6},
        {title: `In Limbo`, artist: `Radiohead`, id: 7},
        {title: `Idioteque`, artist: `Radiohead`, id: 8},
        {title: `Morning Bell`, artist: `Radiohead`, id: 9},
        {title: `Motion Picture Soundtrack`, artist: `Radiohead`, id: 10},
    ]);

    const addSong = (title, artist) => {
        setSongs([...songs, {title, artist, id: uuidv4()}])
    };

    const removeSong = (id) => {
        setSongs(songs.filter((song) => {
            return song.id !== id
        }))
    };
    
    return ( 
        <SongContext.Provider value={{songs, addSong, removeSong}}>
            {props.children}
        </SongContext.Provider>
     );
}
 
export default SongContextProvider;