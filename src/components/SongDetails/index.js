import React, { useContext } from "react";
import { SongContext } from "../../contexts/SongContext";
import './SongDetails.css'

const SongDetails = ({song}) => {
    const {removeSong} = useContext(SongContext);
    return ( 
        <li>
            <div className='title'>{ song.title }</div>
            <div className='artist'>{ song.artist }</div>
            <div className='remove-song' onClick={() => removeSong(song.id)}>X</div>
        </li>
     );
}
 
export default SongDetails;
