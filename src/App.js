import React from 'react';
import { Welcome, AboutMe, Projects, TopBar } from './components';

import './App.scss';

const App = () => {
    return (
        <div className="App">
            <TopBar />
            <div className="ScrollContainer">
                <Welcome />
                <AboutMe />
                <Projects />
            </div>
        </div>
    );
};

export default App;
