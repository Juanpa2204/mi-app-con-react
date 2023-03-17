import React from 'react';
import './App.css';
import { Footer } from './components/public/Footer';
import { Route, Routes} from 'react-router-dom';
import Main from './components/public/Main';
import Navbar from './components/public/Navbar';
import UserForm from './components/public/UserForm';
import { Details } from './components/public/Details';
import secondPag from './components/public/secondPag';

function App() {
  return (
    <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/details/:id" element={<Details/>} />
          <Route path="/user-form" element={<UserForm/>} />
          <Route pata="/segundaPage" element={<secondPag/>}/>
        </Routes>
        <Footer />  
    </div>
  );
}

export default App;

