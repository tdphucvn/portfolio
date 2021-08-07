import React from 'react';
import { makeStyles } from '@material-ui/core';
import AboutContent from '../shared/AboutContent';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        overflowY: 'hidden',
        padding: '20px 0',
    },
}));

const About = () => {
    const classes = useStyles();
    return (
        <section name="about" id="about" className={clsx(classes.container, 'js-scroll')}>
            <AboutContent />
        </section>
    )
};

export default About;
