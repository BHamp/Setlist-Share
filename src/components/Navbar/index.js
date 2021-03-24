import React, { useContext } from 'react';
import { SongContext } from '../../contexts/SongContext'
import './Navbar.css'

const Navbar = () => {
    const {songs} = useContext(SongContext)
    return ( 
        <div className='navbar'>
            <h1>Show Set List</h1>
            <p>Currently you have {songs.length} song(s) in the set</p>
        </div>
     );
}
 
export default Navbar;