import React from 'react'
import { makeStyles, Container, Grid, List, ListItem, ListItemText, ListItemIcon, Typography, Button, ButtonGroup } from '@material-ui/core';
import background from '../../images/hdnet.PNG'; 
import { Link as RouterLink } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaGithub } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";

import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '20px 0',
    },
    githubButton: {
        color: 'white',
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: '#464646',
        },
    },
    projectContainer: {
        height: 'calc(88vh)',
        display: 'flex',
        alignItems: 'flex-end',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    mobileImage: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
    }
}));

const IMDB = () => {
    const classes = useStyles();
    return (
        <section name="movies" className={clsx(classes.container, 'js-scroll')}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={5} sm={12}>
                        <Typography variant="caption" color="textSecondary">MY PROJECTS</Typography>
                        <div>
                            <Typography variant="h4" component="h3">HDNet Movies</Typography>
                            <Typography variant="subtitle1">Movie Database using TMDB API</Typography>
                            <Typography variant="body1" paragraph gutterBottom>This application was built using React.js as the frontend framework. All the data that is displayed is then fetched from the TMDB API.</Typography>
                        </div>
                        <div className="about-link" style={{margin: '0 0 30px 0'}}>
                            <Typography component={RouterLink} to="/hdnetmovies">HDNet Movies</Typography>
                        </div>
                        <div>
                            <Typography variant="h5">Used Technologies</Typography>
                            <List>
                                <Typography variant="h6">Frontend</Typography>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><FaHtml5 /></ListItemIcon>
                                    <ListItemText>HTML</ListItemText>
                                </ListItem>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><FaCss3Alt /></ListItemIcon>
                                    <ListItemText>CSS / Material UI</ListItemText>
                                </ListItem>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><FaJs /></ListItemIcon>
                                    <ListItemText>Javascript</ListItemText>
                                </ListItem>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><FaReact /></ListItemIcon>
                                    <ListItemText>React</ListItemText>
                                </ListItem>
                            </List>
                        </div>
                        <ButtonGroup disableElevation={true}>
                            <Button variant="contained" className={classes.githubButton} component="a" href="https://github.com/tdphucvn/IMDB-API" target="_blank"><FaGithub style={{marginRight: '5px'}}/>Github</Button>
                            <Button variant="outlined" component="a" href="https://hdnetmovies.netlify.app/" target="_blank"><FiMonitor style={{marginRight: '5px'}}/>Live Demo</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item md={7} className={classes.projectContainer}>
                        <div className="project-image-container">
                            <img src={background} alt="wlessbudsBackground"/>
                            <img src={background} alt="wlessbudsBackground"/>
                            <img src={background} alt="wlessbudsBackground"/>
                            <img src={background} alt="wlessbudsBackground"/>
                            <Button variant="contained" className="live-demo-button">Live Demo</Button>
                        </div>
                    </Grid>
                    <Grid item md={7} style={{padding: '20px 0'}} className={classes.mobileImage}>
                        <div>
                            <img src={background} alt="astranecBackground" style={{width: '100%'}}/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
};

export default IMDB;
