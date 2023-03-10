import React from 'react';
import './App.css';
import { Footer }  from './components/public/Footer';
import Main from './components/public/Main';
import  Navbar  from './components/public/Navbar';



function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

