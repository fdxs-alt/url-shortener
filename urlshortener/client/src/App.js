import React from 'react';
import './styles/App.css'
import Navbar from './components/Navbar'
import GetStarted from './components/GetStarted'
import Shortener from './components/Shortener'
const App = () =>  {
  return (
    <div className="container">
     <Navbar/>
     <GetStarted/>
     <Shortener/>
    </div>
  );
}

export default App;
