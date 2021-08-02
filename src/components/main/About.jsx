import React from 'react';
import { makeStyles } from '@material-ui/core';
 
const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        backgroundColor: 'pink'
    },
}));

const About = () => {
    const classes = useStyles();
    return (
        <section name="about" className={classes.container}>
        </section>
    )
};

export default About;
