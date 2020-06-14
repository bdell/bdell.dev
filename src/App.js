import React from 'react';
import { Welcome, AboutMe, Projects } from './components';

import './App.scss';

const App = () => {
    return (
        <div className="App">
            <div className="ScrollContainer">
                <Welcome />
                <AboutMe />
                <Projects />
            </div>
        </div>
    );
};

export default App;
