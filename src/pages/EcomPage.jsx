import React, {useState} from 'react';
import NavBar from '../components/navigation/NavBar';
import DrawerNavigation from '../components/navigation/DrawerNavigation';
import clsx from 'clsx';

import { Typography, makeStyles, Divider, Grid, List, ListItem, ListItemText, ListItemIcon, Container, Button, ButtonGroup } from '@material-ui/core';
import background from '../images/astranecHero.jpg';
import loginPage from '../images/astranec.PNG';
import goalPage from '../images/astranecGoals.PNG';
import profilePage from '../images/astranecProfile.PNG';


import { FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaGithub, FaReact } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { SiTypescript } from "react-icons/si";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    hero: {
        position: 'relative',
        height: '70vh',
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

const EcomPage = () => {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);

    return (
        <div>
            <NavBar drawerState={[drawer, setDrawer]} />
            <div>
                <div className={classes.hero}>
                    <div className={classes.slider}></div>
                    <div className={classes.heroTitle}>
                        <Typography variant="h4" component="h2">WLessBuds</Typography>
                        <Divider style={{backgroundColor: 'white'}}></Divider>
                        <Typography variant="subtitle1" component="h4">Fully functional ecommerce page.</Typography>
                    </div>
                </div>
                <Container maxWidth="lg" className={clsx(classes.introduction, classes.container)}>
                    <Typography variant="caption" component="div" color="textSecondary">INTRODUCTION</Typography>
                    <Grid container spacing={3}>
                        <Grid item sm={8}>
                            <Typography variant="h5" gutterBottom>Abstract</Typography>
                            <Typography variant="body1" paragraph gutterBottom>This project was build using React.js and Material UI for frontend. All the magic behind the scenes is handled with Express.js and payments are securely managed by Stripe.</Typography>
                            <Typography variant="h5" gutterBottom>Given Problem</Typography>
                            <Typography variant="body1" paragraph gutterBottom>The task was to create a fully functional social media (with the focus on personal goals) with all the features: unique ones such as creating goals, milestones, posts and familiar ones for instance following, searching other users or real-time chatting with each other.</Typography>                        
                            <Typography variant="h5" gutterBottom>Application Design</Typography>
                            <Typography variant="body1" paragraph gutterBottom>I have decided to use JavaScript language for both frontend and backend (backend is a little bit different since I have used a JavaScript strict superset TypeScript). And as for database I have chosen non-relational database MongoDB.</Typography>                        
                            <Typography variant="body1" paragraph gutterBottom>For rendering data from backend to frontend I have chosen EJS as the view engine.</Typography>
                            <Typography variant="body1" paragraph gutterBottom>The application is based on REST API where all the magic behind the scenes is handled by Node.js framework Express.js.</Typography>
                        </Grid>
                        <Grid item sm={4}>
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
                            <ButtonGroup disableElevation={true}>
                                <Button variant="contained" className={classes.githubButton} component="a" href="https://github.com/tdphucvn/Ecomm" target="_blank"><FaGithub style={{marginRight: '5px'}}/>Github</Button>
                                <Button variant="outlined" component="a" href="https://wlessbuds.herokuapp.com" target="_blank"><FiMonitor style={{marginRight: '5px'}}/>Live Demo</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <DrawerNavigation drawerState={[drawer, setDrawer]} />
        </div>
    )
}

export default EcomPage
