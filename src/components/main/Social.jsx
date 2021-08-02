import React from 'react'
import { makeStyles } from '@material-ui/core';
 
const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        backgroundColor: 'blue',
    },
}));

const Social = () => {
    const classes = useStyles();
    return (
        <section className={classes.container} name="social" >
            
        </section>
    )
};

export default Social;
