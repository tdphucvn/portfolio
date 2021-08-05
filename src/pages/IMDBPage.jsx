import React, {useState} from 'react';
import NavBar from '../components/navigation/NavBar';
import DrawerNavigation from '../components/navigation/DrawerNavigation';
import clsx from 'clsx';

import { Typography, makeStyles, Divider, Grid, List, ListItem, ListItemText, ListItemIcon, Container, Button, ButtonGroup } from '@material-ui/core';
import background from '../images/hdnetHero.png';
import loginPage from '../images/astranec.PNG';
import goalPage from '../images/astranecGoals.PNG';
import profilePage from '../images/astranecProfile.PNG';


import { FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaGithub, FaJs } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { SiTypescript } from "react-icons/si";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    hero: {
        position: 'relative',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        height: '70vh',
        backgroundSize: 'cover',
    },
    slider: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 2,
        backgroundColor: 'black',
        opacity: 0.7,
    },
    heroTitle: {
        position: 'absolute',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%) scale(1.5)',
        color: 'white',
        zIndex: 3,
    },
    introduction: {
        
    },
    githubButton: {
        color: 'white',
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: '#464646',
        },
    },
}));

const IMDBPage = () => {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);

    return (
        <div>
            <NavBar drawerState={[drawer, setDrawer]} />
            <div>
                <div className={classes.hero}>
                    <div className={classes.slider}></div>
                    <div className={classes.heroTitle}>
                        <Typography variant="h4" component="h2">HDNet Movies</Typography>
                        <Divider style={{backgroundColor: 'white'}}></Divider>
                        <Typography variant="subtitle1" component="h4">Movie Database using TMDB API.</Typography>
                    </div>
                </div>
            </div>
            <DrawerNavigation drawerState={[drawer, setDrawer]} />
        </div>
    )
}

export default IMDBPage
