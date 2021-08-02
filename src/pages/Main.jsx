import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';

import Hero from '../components/main/Hero';
import About from '../components/main/About';
import Social from '../components/main/Social';
import Ecom from '../components/main/Ecom';
import Movies from '../components/main/IMDB';
import DrawerNavigation from '../components/navigation/DrawerNavigation';


const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
    },
}));

const Main = () => {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);

    return (
        <div className={classes.container}>
            <Hero drawerState={[drawer, setDrawer]}/>
            <About />
            <Social />
            <Ecom />
            <Movies />
            <DrawerNavigation drawerState={[drawer, setDrawer]} />
        </div>
    )};

export default Main;
