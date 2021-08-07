import React, {useEffect} from 'react'
import { makeStyles, Grid, List, ListItem, Typography, Divider, ButtonGroup, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import '../../css/hero.css';
import clsx from 'clsx';

import astranecBackground from '../../images/astranecHero.jpg';
import wlessbudsBackground from '../../images/wlessBudsHero.jpg';
import hdnetBackground from '../../images/hdnetHero.png';

import NavBar from '../navigation/NavBar';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        position: 'relative',
    },
    gridContainer: {
        height: '100vh'
    },
    leftColumn: {
        paddingTop: '20vh',
        paddingLeft: '20px',
        paddingRight: '20px',
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: '#f9f9f9',
    },
    introduction: {
        fontSize: '1.8rem',
        fontWeight: 500, 
    },
    growContainer: {
        flexGrow: 1,
    }, 
    socialMedias: {
        display: 'flex',
        flexDirection: 'column',
        height: '80px',
    },
    socialMediasButtons: {
        '& button': {
            borderRadius: 0,
        },
        '& .MuiSvgIcon-root': {
            fontSize: '2rem'
        },
    },
    socialMediasDivider: {
        marginTop: theme.spacing(2),
    },
    rightColumn: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: '2',
        backgroundColor: '#f0f0f0',
        position: 'relative', 
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    studyCasesContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: '45%',
    },
    astranec: {
        position: 'absolute',
        backgroundImage: `url(${astranecBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        zIndex: 3,
        backgroundSize: 'cover',
    },
    wlessbuds: {
        position: 'absolute',
        backgroundImage: `url(${wlessbudsBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        zIndex: 3,
        backgroundSize: 'cover',
    },
    hdnet: {
        position: 'absolute',
        backgroundImage: `url(${hdnetBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        zIndex: 3,
        backgroundSize: 'cover',
    },
    slider: {
        height: '100vh',
        width: '100%',
        position: 'absolute',
        zIndex: 4,
        backgroundColor: 'black',
    }
}));


const Hero = ({drawerState}) => {
    const classes = useStyles();
    const [drawer, setDrawer] = drawerState;

    useEffect(() => {
        const astranec = document.getElementById('astranec');
        const astranecBackground = document.querySelector('.astranecBackground');
        const slider = document.querySelector('.sliderBackground');
        astranec.addEventListener('mouseover', () => {
            astranecBackground.classList.add('showBackground');
            slider.classList.add('sliderBackgroundShow');
        });
        astranec.addEventListener('mouseout', () => {
            astranecBackground.classList.remove('showBackground');
            slider.classList.remove('sliderBackgroundShow');
        });

        const wlessbuds = document.getElementById('wlessbuds');
        const wlessbudsBackground = document.querySelector('.wlessbudsBackground');
        wlessbuds.addEventListener('mouseover', () => {
            wlessbudsBackground.classList.add('showBackground');
            slider.classList.add('sliderBackgroundShow');
        });
        wlessbuds.addEventListener('mouseout', () => {
            wlessbudsBackground.classList.remove('showBackground');
            slider.classList.remove('sliderBackgroundShow');
        });
        
        const hdnet = document.getElementById('hdnetmovies');
        const hdnetBackground = document.querySelector('.hdnetBackground');
        hdnet.addEventListener('mouseover', () => {
            hdnetBackground.classList.add('showBackground');
            slider.classList.add('sliderBackgroundShow');
        });
        hdnet.addEventListener('mouseout', () => {
            hdnetBackground.classList.remove('showBackground');
            slider.classList.remove('sliderBackgroundShow');
        });
    }, []);

    return (
        <section className={clsx(classes.container, 'js-scroll')} name="hero">
            <NavBar drawerState={[drawer, setDrawer]} />
            <Grid container className={classes.gridContainer}>
                <Grid item md={12} lg={3} className={clsx(classes.leftColumn, classes.column, 'leftAnimation')}>
                    <div style={{width: '90%', marginBottom: '25px'}} className="animation-first-order">
                        <Typography variant="caption" color="textSecondary">INTRODUCTION</Typography>
                    </div>
                    <div className="animation-first-order">
                        <Typography variant="body1" className={classes.introduction} gutterBottom>Hi there, I'm Philip</Typography>
                        <Typography variant="body1" className={classes.introduction} gutterBottom>A self-taught Full-stack Engineer</Typography>
                        <Typography variant="body1" className={classes.introduction} gutterBottom>Currently based in Cheb, Czech Republic</Typography>
                    </div>
                    <div>
                        <span className="about-link animation-second-order">
                            <Typography component="a" href="#about">About Me</Typography>
                        </span>
                        <span className="about-link animation-second-order" style={{marginLeft: '15px'}}>
                            <Typography component={RouterLink} to="/contact">Contact Me</Typography>
                        </span>
                    </div>
                    <div className={classes.growContainer}></div>
                    <Divider className={classes.socialMediasDivider}></Divider>
                    <div className={clsx(classes.socialMedias, 'animation-first-order')}>
                        <ButtonGroup className={classes.socialMediasButtons} disableElevation={true} fullWidth={false}>
                            <Button variant="text" style={{opacity: 0.6}} component="a" href="https://www.facebook.com/philip.tranphuc/"><FacebookIcon /></Button>
                            <Button variant="text" style={{opacity: 0.6}} component="a" href="https://www.instagram.com/tdphucvn/?hl=cs"><InstagramIcon /></Button>
                            <Button variant="text" style={{opacity: 0.6}} component="a" href="https://www.linkedin.com/in/philip-tran-a65846208/"><LinkedInIcon /></Button>
                            <Button variant="text" style={{opacity: 0.6}} component="a" href="https://github.com/tdphucvn"><GitHubIcon /></Button>
                        </ButtonGroup>
                    </div>
                </Grid>
                <Grid item md={9} className={clsx(classes.rightColumn, classes.column, 'rightAnimation')}>
                    <div style={{paddingTop: '20vh', height: '80vh', width: '100%', zIndex: 5}} className={classes.rightColumnContainer}>
                        <div style={{width: '90%', display: 'flex', justifyContent: 'flex-end'}}>
                            <Typography variant="caption" align="right" style={{width: '100%', marginRight: '16px'}} color="textSecondary">MY PROJECTS</Typography>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end', width: '90%'}}>
                            <List className={classes.studyCasesContainer}>
                                <ListItem component={RouterLink} to={'/astranec'} className="study-cases" id="astranec" style={{width: '100%', justifyContent: 'flex-end'}}>
                                    <Typography variant="h4" component="h2">Astranec</Typography>
                                </ListItem>
                                <ListItem component={RouterLink} to={'/wlessbuds'} className="study-cases" id="wlessbuds" style={{width: '100%', justifyContent: 'flex-end'}}>
                                    <Typography variant="h4" component="h2">WLessBuds</Typography>
                                </ListItem>
                                <ListItem component={RouterLink} to={'/hdnetmovies'} className="study-cases" id="hdnetmovies" style={{width: '100%', justifyContent: 'flex-end'}}>
                                    <Typography variant="h4" component="h2">HDNet Movies</Typography>
                                </ListItem>
                            </List>
                        </div>
                    </div>
                    <div className={clsx(classes.astranec, 'astranecBackground', 'hideBackground', 'backgroundHero')}></div>
                    <div className={clsx(classes.wlessbuds, 'wlessbudsBackground', 'hideBackground', 'backgroundHero')}></div>
                    <div className={clsx(classes.hdnet, 'hdnetBackground', 'hideBackground', 'backgroundHero')}></div>
                    <div className={clsx(classes.slider, 'sliderBackground', 'hideBackground', 'backgroundHero')}></div>
                </Grid>
            </Grid>
        </section>
    )
};

export default Hero;
