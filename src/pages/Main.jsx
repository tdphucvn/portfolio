import React, {useState, useEffect} from 'react';
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

    useEffect(() => {
        const scrollElements = document.querySelectorAll(".js-scroll");

        const elementInView = (el, dividend = 1.5) => {
          const elementTop = el.getBoundingClientRect().top;
          return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
          );
        };
        
        const displayScrollElement = (element) => {
          element.classList.add("scrolled");
        };
        
        const handleScrollAnimation = () => {
          scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
              displayScrollElement(el);
            };
          })
        }
        
        window.addEventListener('wheel', () => {
            handleScrollAnimation();
        });
    }, []);

    return (
        <div className={classes.container} id="main-page">
            <Hero drawerState={[drawer, setDrawer]}/>
            <About />
            <Social />
            <Ecom />
            <Movies />
            <DrawerNavigation drawerState={[drawer, setDrawer]} />
        </div>
    )};

export default Main;
