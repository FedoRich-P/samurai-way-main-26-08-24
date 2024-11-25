import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/navbar/Navbar";
import {Profile} from "./layout/profile/Profile";
import {Route, Routes} from "react-router-dom";
import {News} from "./layout/news/News";
import {Settings} from "./layout/settings/Settings";
import {Music} from "./layout/music/Music";
import {DialogsContainer} from "./layout/dialogs/DialogsContainer";
import {UsersContainer} from "./layout/users/UsersContainer";

type AppProps = {
}

function App() {
    return (
        <div className={'container'}>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <main className="main">
                    <Routes>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                        <Route path={'/users'} element={<UsersContainer/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
