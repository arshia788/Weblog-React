import React from 'react';
import {Route, Routes} from 'react-router-dom'


// campo
import Navbar from './components/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Register />}/>
      </Routes>
      
    </div>
  );
};

export default App;