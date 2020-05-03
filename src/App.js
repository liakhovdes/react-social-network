import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componetns/Header';
import Navbar from './componetns/Navbar';
import Profile from './componetns/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
