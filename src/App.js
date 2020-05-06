import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componetns/Header/Header';
import Navbar from './componetns/Navbar/Navbar';
import Profile from './componetns/Profile/Profile';
import Dialogs from "./componetns/Dialogs/Dialogs";
import News from "./componetns/News/News";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./componetns/Music/Music";
import Settings from "./componetns/Settings/Settings";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={Profile} />
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
