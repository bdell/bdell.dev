import React, { useState, useEffect } from 'react';
import { Welcome, AboutMe, Projects } from './components';

import './App.scss';

let scrollHandlingTimeout;

const bgColorZoneMapping = {
    '1': '#3bb44b',
    '2': '#27aae2',
    '3': '#da1c5c',
};

const App = () => {
    const [bgColor, setBgColor] = useState(bgColorZoneMapping['1']);
    const determineBackgroundColor = (top, height) => {
        const scrollMagnitude = Math.abs(top);
        if (0 <= scrollMagnitude && scrollMagnitude < height / 2 && bgColor !== bgColorZoneMapping['1']) {
            setBgColor(bgColorZoneMapping['1']);
        } else if (
            height / 2 <= scrollMagnitude &&
            scrollMagnitude < height + height / 2 &&
            bgColor !== bgColorZoneMapping['2']
        ) {
            setBgColor(bgColorZoneMapping['2']);
        } else if (height + height / 2 <= scrollMagnitude && bgColor !== bgColorZoneMapping['3']) {
            setBgColor(bgColorZoneMapping['3']);
        }
    };

    const updateScrollState = () => {
        const topMostElement = document.getElementById('WelcomeSection');
        if (topMostElement) {
            const geometry = topMostElement.getBoundingClientRect();
            const { top, height } = geometry;
            determineBackgroundColor(top, height);
        }
    };
    const handleScroll = () => {
        const timeoutMS = 200;
        if (scrollHandlingTimeout) {
            clearTimeout(scrollHandlingTimeout);
            scrollHandlingTimeout = setTimeout(updateScrollState, timeoutMS);
        } else {
            scrollHandlingTimeout = setTimeout(updateScrollState, timeoutMS);
        }
    };

    useEffect(() => window.addEventListener('resize', handleScroll));

    return (
        <div className="ScrollContainer" onScroll={handleScroll} style={{ backgroundColor: bgColor }}>
            <Welcome />
            <AboutMe />
            <Projects />
        </div>
    );
};

export default App;
