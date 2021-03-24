import './App.css';
import Navbar from './components/Navbar';
import NewSongForm from './components/SongForm';
import SongList from './components/SongList';
import SongContextProvider from './contexts/SongContext';

function App() {
  return (
    <div className="App">
      <SongContextProvider>
        <Navbar />
        <SongList />
        <NewSongForm />
      </SongContextProvider>
    </div>
  );
}

export default App;
