import './App.css';
import {Route,Routes} from 'react-router-dom';
 import Home from './Pages/Home'
import History from './Pages/History';
import TopNavBar from './Components/Navbar/TopNavbar'
import { useState } from 'react';


function App() {
  const [history,setHistory]= useState([])
  console.log(history);
  return (
    <div className='App'>
     <TopNavBar/>     
     <Routes>
     <Route path="/*" element={<Home  setHistory={setHistory}history={history}/>}/>
      <Route path="history" element={<History history={history}/>}/>
     </Routes>
    </div>
    
     
  );
}

export default App;
