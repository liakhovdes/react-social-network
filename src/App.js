import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componetns/Header/Header';
import Navbar from './componetns/Navbar/Navbar';
import Profile from './componetns/Profile/Profile';
import Dialogs from "./componetns/Dialogs/Dialogs";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Dialogs />
            </div>
            {/*<Profile />*/}
        </div>
    );
}

export default App;
