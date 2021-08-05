import React from 'react'
import { makeStyles, Container, Grid, Typography, List, ListItem, ListItemText, ListItemIcon, ButtonGroup, Button } from '@material-ui/core';
import { FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaGithub, FaJs } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { SiTypescript } from "react-icons/si";
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

import background from '../../images/astranec.PNG';
import '../../css/project.css';

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100vh',
        paddingTop: '20px',
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

const Social = () => {
    const classes = useStyles();
    return (
        <section className={clsx(classes.container, 'js-scroll')} name="social" >
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={5} sm={12}>
                        <Typography variant="caption" color="textSecondary">MY PROJECTS</Typography>
                        <div>
                            <Typography variant="h4" component="h3">Astranec</Typography>
                            <Typography variant="subtitle1">Place to share your goals and aspirations</Typography>
                            <Typography variant="body1" paragraph>This project was created for people with various goals and aspirations. The purpose is to provide people with an opportunity to keep track of their goals and share them with others.</Typography>
                        </div>
                        <div className="about-link" style={{margin: '0 0 30px 0'}}>
                            <Typography component={RouterLink} to="/astranec">Astranec Details</Typography>
                        </div>
                        <div>
                            <Typography variant="h5">Used Technologies</Typography>
                            <List>
                                <Typography variant="h6">Frontend</Typography>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><FaHtml5 /></ListItemIcon>
                                    <ListItemText>HTML (EJS view engine)</ListItemText>
                                </ListItem>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><FaCss3Alt /></ListItemIcon>
                                    <ListItemText>CSS</ListItemText>
                                </ListItem>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><SiTypescript /></ListItemIcon>
                                    <ListItemText>Typescript</ListItemText>
                                </ListItem>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><FaJs /></ListItemIcon>
                                    <ListItemText>JavaScript</ListItemText>
                                </ListItem>
                                <Typography variant="h6">Backend</Typography>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><FaNodeJs /></ListItemIcon>
                                    <ListItemText>Node.js (Express.js)</ListItemText>
                                </ListItem>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><FaDatabase /></ListItemIcon>
                                    <ListItemText>MongoDB</ListItemText>
                                </ListItem>
                            </List>
                        </div>
                        <ButtonGroup disableElevation={true}>
                            <Button variant="contained" className={classes.githubButton} component="a" href="https://github.com/tdphucvn/SM-project" target="_blank"><FaGithub style={{marginRight: '5px'}}/>Github</Button>
                            <Button variant="outlined" component="a" href="https://astranec.herokuapp.com" target="_blank"><FiMonitor style={{marginRight: '5px'}}/>Live Demo</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item md={7} className={clsx(classes.projectContainer, 'scroll')}>
                        <div className="project-image-container">
                            <img src={background} alt="astranecBackground"/>
                            <img src={background} alt="astranecBackground"/>
                            <img src={background} alt="astranecBackground"/>
                            <img src={background} alt="astranecBackground"/>
                            <Button variant="contained" className="live-demo-button">Live Demo</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
};

export default Social;
