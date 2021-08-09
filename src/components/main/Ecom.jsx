import React from 'react'
import { makeStyles, Container, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Button, ButtonGroup } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { SiTypescript } from "react-icons/si";

import clsx from 'clsx';

import background from '../../images/wlessbuds.PNG'; 

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

const Ecom = () => {
    const classes = useStyles();
    return (
        <section name="ecom" className={clsx(classes.container, 'js-scroll')}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={5} sm={12}>
                        <Typography variant="caption" color="textSecondary">MY PROJECTS</Typography>
                        <div>
                            <Typography variant="h4" component="h3">WLessBuds</Typography>
                            <Typography variant="subtitle1">Fully functional ecommerce page.</Typography>
                            <Typography variant="body1" paragraph>This project was built using React.js and Material UI for frontend. All the magic behind the scenes is handled with Express.js and payments are securely managed by Stripe.</Typography>
                        </div>
                        <div className="about-link" style={{margin: '0 0 30px 0'}}>
                            <Typography component={RouterLink} to="/wlessbuds">WLessBuds Details</Typography>
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
                                    <ListItemIcon style={{minWidth: 20}}><SiTypescript /></ListItemIcon>
                                    <ListItemText>Typescript</ListItemText>
                                </ListItem>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><FaReact /></ListItemIcon>
                                    <ListItemText>React</ListItemText>
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
                            <Button variant="contained" className={classes.githubButton} component="a" href="https://github.com/tdphucvn/Ecomm" target="_blank"><FaGithub style={{marginRight: '5px'}}/>Github</Button>
                            <Button variant="outlined" component="a" href="https://wlessbuds.herokuapp.com" target="_blank"><FiMonitor style={{marginRight: '5px'}}/>Live Demo</Button>
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
                            <img src={background} alt="wlessbudsBackground" style={{width: '100%'}}/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
};

export default Ecom;
