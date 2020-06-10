import React from 'react';
import './styles/App.css'
import Navbar from './components/Navbar'
import GetStarted from './components/GetStarted'
const App = () =>  {
  return (
    <div className="container">
     <Navbar/>
     <GetStarted/>
    </div>
  );
}

export default App;
