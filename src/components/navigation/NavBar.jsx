import React from 'react';
import { Typography, makeStyles, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    container: {
        position: 'absolute',
        width: '100%',
        display: 'flex',
    },
    navigation: {
        height: '15vh',
        maxHeight: 400,
        width: '100%',
    },
    leftNavigation: {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: '20px 0 0 20px',
        zIndex: 3,
    },
    rightNavigation: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '20px 20px 0 0',
        zIndex: 3,
    },
    navigationSquare: {
        width: '15vh',
        maxWidth: 400,
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: '10vh',
            maxWidth: 300
        },
    },
    initialsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        backgroundColor: 'black',
        height: '15vh',
        transition: '0.3s ease-out',
        '&:hover': {
            outline: '1px solid black',
            backgroundColor: 'white',
            "& $initials": {
                color: 'black'
            }
        },
        [theme.breakpoints.down('md')]: {
            height: '10vh',
        },
    },
    initials: {
        fontWeight: 900,
        color: 'white'
    },
    hamburger: {
        justifyContent: 'flex-end',
        '& button': {
            height: '64px',
            width: '64px',
            borderRadius: 0,
            [theme.breakpoints.down('md')]: {
                height: '48px',
                width: '48px',
            },
            [theme.breakpoints.down('xs')]: {
                height: '32px',
                width: '32px',
            }    
        },
        '& .MuiSvgIcon-root' :{
            color: 'white',
            fontSize: '2.5rem',
            [theme.breakpoints.down('md')]: {
                fontSize: '2rem'
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '1.5rem'
            }    
        },
    },
}));

const hamburgerButton = {
    backgroundColor: 'black',
};

const NavBar = ({drawerState}) => {
    const classes = useStyles();
    const [drawer, setDrawer] = drawerState;

    return (
        <div className={classes.container}>
            <nav className={clsx(classes.navigation, classes.leftNavigation)}>
                <RouterLink to="/" className={clsx(classes.navigationSquare, classes.initialsContainer)}>
                    <Typography className={classes.initials} variant="h5" component="h2">PT</Typography>
                </RouterLink>
            </nav>
            <nav className={clsx(classes.navigation, classes.rightNavigation)}>
                <div className={clsx(classes.navigationSquare, classes.hamburger)}>
                    <IconButton onClick={() => setDrawer((previousState) => !previousState)} style={hamburgerButton}>
                        <MenuIcon />
                    </IconButton>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;
