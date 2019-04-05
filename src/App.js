import React from 'react';

import { Welcome, Examples, PreviousExperience, AboutMe, ContactMe } from './components/sections';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="ScrollContainer">
                <Welcome />
                <Examples />
                <PreviousExperience />
                <AboutMe />
                <ContactMe />
            </div>
        </div>
    );
};

export default App;
