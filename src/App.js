import './App.css';
import Navbar from './components/Navbar';
import SongList from './components/SongList';
import SongContextProvider from './contexts/SongContext';

function App() {
  return (
    <div className="App">
      <SongContextProvider>
        <Navbar />
        <SongList />
      </SongContextProvider>
    </div>
  );
}

export default App;
