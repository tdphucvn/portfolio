import React from 'react'
import { makeStyles } from '@material-ui/core';
 
const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        backgroundColor: 'red',
    },
}));

const IMDB = () => {
    const classes = useStyles();
    return (
        <section name="movies" className={classes.container}>

        </section>
    )
};

export default IMDB;
