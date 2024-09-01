import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/aside/Navbar";
import {Dialogs} from "./layout/dialogs/Dialogs";
import {Profile} from "./layout/profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {News} from "./layout/News/News";
import {Settings} from "./layout/settings/Settings";
import {Music} from "./layout/Music/Music";

function App() {
    return (
        <BrowserRouter>
            <div className={'container'}>
                <div className={'app-wrapper'}>
                    <Header/>
                    <Navbar/>
                    <main className="main">
                        <Routes>
                            <Route path={'/profile'} element={<Profile/>}/>
                            <Route path={'/dialogs/*'} element={<Dialogs/>}/>
                            <Route path={'/news'} element={<News/>}/>
                            <Route path={'/music'} element={<Music/>}/>
                            <Route path={'/settings'} element={<Settings/>}/>
                        </Routes>
                        {/*<Profile/>*/}
                        {/*<Dialogs/>*/}
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
