import React from 'react';

import './AboutMe.scss';

const AboutMe = () => {
    return (
        <div className="FullContainer FlexCentered ScrollStop">
            <div className="AboutMeSectionText">
                <span>
                    My name is Brandon and I have been working in software development for over 8 years. I started out
                    working as a junior developer at The Thomas Jefferson National Laboratory doing statistical
                    simulations for physics research, but over the years I have transitioned to more of a front end
                    focus. During that time I have led teams of developers, worked with a plethora of libraries, and
                    solved quite a few esoteric bugs. I love math, physics, sci-fi, video games, and learning new
                    things.
                </span>
            </div>
        </div>
    );
};

export default AboutMe;
