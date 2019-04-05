import React from 'react';

import { Welcome, Examples, PreviousExperience, AboutMe, ContactMe } from './components/sections';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <Welcome />
            <Examples />
            <PreviousExperience />
            <AboutMe />
            <ContactMe />
        </div>
    );
};

export default App;
