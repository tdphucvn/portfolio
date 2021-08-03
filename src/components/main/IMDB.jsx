import React from 'react'
import { makeStyles, Container, Grid, List, ListItem, ListItemText, ListItemIcon, Typography, Button, ButtonGroup } from '@material-ui/core';
import background from '../../images/hdnet.PNG'; 
import { Link as RouterLink } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";


const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        paddingTop: '20px'
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
        alignItems: 'flex-end'
    }
}));

const IMDB = () => {
    const classes = useStyles();
    return (
        <section name="movies" className={classes.container}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={5} sm={12}>
                        <Typography variant="caption" color="textSecondary">MY PROJECTS</Typography>
                        <div>
                            <Typography variant="h4" component="h3">HDNet Movies</Typography>
                            <Typography variant="subtitle1">Movie Database using TMDB API</Typography>
                            <Typography variant="body1" paragraph>This project was build using React.js and Material UI for frontend. All the magic behind the scenes is handled with Express.js and payments are securely managed by Stripe.</Typography>
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
                    <Grid item md={7} sm={0} className={classes.projectContainer}>
                        <div className="project-image-container">
                            <img src={background} alt="wlessbudsBackground"/>
                            <img src={background} alt="wlessbudsBackground"/>
                            <img src={background} alt="wlessbudsBackground"/>
                            <img src={background} alt="wlessbudsBackground"/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
};

export default IMDB;
