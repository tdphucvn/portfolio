import React from 'react'
import { makeStyles, Grid, List, ListItem, Typography, Divider, ButtonGroup, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import '../../css/hero.css';
import clsx from 'clsx';

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
        paddingTop: '20vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: '2',
        backgroundColor: '#f0f0f0',
    },
    studyCasesContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: '90%',
    },
}));

const Hero = ({drawerState}) => {
    const classes = useStyles();
    const [drawer, setDrawer] = drawerState;

    return (
        <section className={classes.container} name="hero">
            <NavBar drawerState={[drawer, setDrawer]} />
            <Grid container className={classes.gridContainer}>
                <Grid item md={4} className={clsx(classes.leftColumn, classes.column, 'leftAnimation')}>
                    <div style={{width: '90%', marginBottom: '25px'}} className="animation-first-order">
                        <Typography variant="caption" color="textSecondary">INTRODUCTION</Typography>
                    </div>
                    <div className="animation-first-order">
                        <Typography variant="body1" className={classes.introduction} gutterBottom>Hi there, I'm Philip</Typography>
                        <Typography variant="body1" className={classes.introduction} gutterBottom>A self-taught Full-stack Engineer</Typography>
                        <Typography variant="body1" className={classes.introduction} gutterBottom>Currently based in Cheb, Czech Republic</Typography>
                    </div>
                    <span className="about-link animation-second-order">
                        <Typography component="a" href="#about">About Me</Typography>
                    </span>
                    <div className={classes.growContainer}></div>
                    <Divider className={classes.socialMediasDivider}></Divider>
                    <div className={clsx(classes.socialMedias, 'animation-first-order')}>
                        <ButtonGroup className={classes.socialMediasButtons} disableElevation={true} fullWidth={false}>
                            <Button variant="text" style={{opacity: 0.6}}><FacebookIcon /></Button>
                            <Button variant="text" style={{opacity: 0.6}}><InstagramIcon /></Button>
                            <Button variant="text" style={{opacity: 0.6}}><LinkedInIcon /></Button>
                            <Button variant="text" style={{opacity: 0.6}}><GitHubIcon /></Button>
                        </ButtonGroup>
                    </div>
                </Grid>
                <Grid item md={8} className={clsx(classes.rightColumn, classes.column, 'rightAnimation')}>
                    <div style={{width: '90%', display: 'flex', justifyContent: 'flex-end'}}>
                        <Typography variant="caption" align="right" style={{width: '100%', marginRight: '16px'}} color="textSecondary">MY PROJECTS</Typography>
                    </div>
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
                </Grid>
            </Grid>
        </section>
    )
};

export default Hero;
