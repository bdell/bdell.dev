import React from 'react';

import './AboutMe.scss';

const AboutMe = () => {
    return (
        <div className="FullContainer FlexCentered AboutMeSectionContainer FlexHCentered">
            <div className="FlexCentered">
                <div className="FlexColumn MainAboutMeContainer">
                    <div className="WhoAmIHeader DefaultPadded DefaultBordered">
                        <span>Who am I?</span>
                    </div>
                    <div className="AboutMeSectionText DefaultPadded">
                        <span>
                            My name is Brandon and I have been working in software development for over 8 years.
                        </span>
                        <br />
                        <span>
                            I started out working as a junior developer at The Thomas Jefferson National Laboratory
                            doing statistical simulations for physics research, but over the years I have transitioned
                            to more of a front end focus.
                        </span>
                        <br />
                        <span>
                            During that time I have led teams of developers, worked with a plethora of libraries, and
                            solved quite a few esoteric bugs.
                        </span>
                        <br />
                        <span>I love math, physics, sci-fi, video games, and learning new things.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
