import React from 'react'
import { makeStyles } from '@material-ui/core';
 
const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        backgroundColor: 'green',
    },
}));

const Ecom = () => {
    const classes = useStyles();
    return (
        <section name="ecom" className={classes.container}>
            
        </section>
    )
};

export default Ecom;
