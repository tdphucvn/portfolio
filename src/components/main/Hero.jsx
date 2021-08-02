import React from 'react'
import { makeStyles, Grid, List, ListItem, Typography, Divider, ButtonGroup, IconButton } from '@material-ui/core';
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
        backgroundColor: '#f5f5f5',
        display: 'flex', 
        flexDirection: 'column'
    },
    introduction: {
        fontSize: '1.5rem'
    },
    growContainer: {
        flexGrow: 1,
    }, 
    socialMedias: {
        display: 'flex',
        flexDirection: 'column',
        height: '100px',
    },
    socialMediasButtons: {
        '& button': {
            borderRadius: 0,
        },
        '& .MuiSvgIcon-root': {
            fontSize: '2rem'
        },
    },
    rightColumn: {
        paddingTop: '20vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
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
                <Grid item md={4} className={clsx(classes.leftColumn, classes.column)}>
                    <div style={{width: '90%', marginBottom: '25px'}}>
                        <Typography variant="caption" color="textSecondary">INTRODUCTION</Typography>
                    </div>
                    <div>
                        <Typography variant="body1" className={classes.introduction} gutterBottom>Hi there, I'm Philip</Typography>
                        <Typography variant="body1" className={classes.introduction} gutterBottom>A self-taught Full-stack Engineer</Typography>
                        <Typography variant="body1" className={classes.introduction} gutterBottom>Currently based in Cheb, Czech Republic</Typography>
                    </div>
                    <div className={classes.growContainer}></div>
                    <Divider></Divider>
                    <div className={classes.socialMedias}>
                        <ButtonGroup className={classes.socialMediasButtons}>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton>
                                <GitHubIcon />
                            </IconButton>
                        </ButtonGroup>
                    </div>
                </Grid>
                <Grid item md={8} className={clsx(classes.rightColumn, classes.column)}>
                    <div style={{width: '90%', display: 'flex', justifyContent: 'flex-end'}}>
                        <Typography variant="caption" align="right" style={{width: '100%', marginRight: '16px'}} color="textSecondary">MY PROJECTS</Typography>
                    </div>
                    <List className={classes.studyCasesContainer}>
                        <ListItem component={RouterLink} to={'/astranec'} className="study-cases" style={{width: '100%', justifyContent: 'flex-end'}}>
                            <Typography variant="h4" component="h2">Astranec</Typography>
                        </ListItem>
                        <ListItem component={RouterLink} to={'/wlessbuds'} className="study-cases" style={{width: '100%', justifyContent: 'flex-end'}}>
                            <Typography variant="h4" component="h2">WLessBuds</Typography>
                        </ListItem>
                        <ListItem component={RouterLink} to={'/hdnetmovies'} className="study-cases" style={{width: '100%', justifyContent: 'flex-end'}}>
                            <Typography variant="h4" component="h2">HDNet Movies</Typography>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </section>
    )
};

export default Hero;
