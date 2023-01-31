// import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
   <div className='stylePic' >
    <Navbar />
   <div className='container my-3' style={{backgroundColor: "tomato", width: "100%", height: "100%", border: "2px solid black" }}>
   <Player />
  
   </div>
   
   </div>
   </>
  );
}

export default App;
