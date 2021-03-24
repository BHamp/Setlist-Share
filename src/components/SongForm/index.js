import React, {useContext, useState} from 'react';
import {SongContext} from '../../contexts/SongContext'
import './SongForm.css'

const NewSongForm = () => {
    const { dispatch } = useContext(SongContext)
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_SONG', song: {
            title, artist
        }})
        setTitle('');
        setArtist('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Song Name' value={title}
                onChange={(e) => {setTitle(e.target.value)}} required />

            <input type='text' placeholder='Artist' value={artist}
                onChange={(e) => {setArtist(e.target.value)}} required />
            <input type='submit' value='Add Song' />
        </form>
     );
}
 
export default NewSongForm;