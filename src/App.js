import './App.css';
import Navbar from './components/Navbar';
import SongContextProvider from './contexts/SongContext';

function App() {
  return (
    <div className="App">
      <SongContextProvider>
        <Navbar />
      </SongContextProvider>
    </div>
  );
}

export default App;
