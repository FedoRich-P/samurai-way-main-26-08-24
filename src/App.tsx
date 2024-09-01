import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Aside} from "./layout/aside/Aside";
import {Dialogs} from "./layout/dialogs/Dialogs";
import {Profile} from "./layout/profile/Profile";

function App() {
    return (
        <div className={'container'}>
            <div className={'app-wrapper'}>
                <Header/>
                <Aside/>

                <main className="main">
                    <Profile/>
                    {/*<Dialogs/>*/}
                </main>
            </div>
        </div>
    );
}

export default App;
