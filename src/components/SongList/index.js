import React, { useContext } from 'react';
import { SongContext } from '../../contexts/SongContext'
import SongDetails from '../SongDetails'
import './SongList.css'

const SongList = () => {
    const { songs } = useContext(SongContext)
    return songs.length ? ( 
        <div className='song-list'>
            <ul>
                {songs.map((song) => {
                    return <SongDetails song={song} key={song.id} />
                })}
            </ul>
        </div>
     ) : (
        <div className='empty'>There are currently no songs in this set</div>
     );
}
 
export default SongList;