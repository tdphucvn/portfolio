import React, {useState} from 'react';
import NavBar from '../components/navigation/NavBar';
import DrawerNavigation from '../components/navigation/DrawerNavigation';
import clsx from 'clsx';

import { Typography, makeStyles, Divider, Grid, List, ListItem, ListItemText, ListItemIcon, Container, Button, ButtonGroup } from '@material-ui/core';

import { FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaGithub, FaReact } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { SiTypescript } from "react-icons/si";

import landingPage from '../images/wlessbuds.PNG';
import authentication from '../images/wlessbudsAuthentication.PNG';

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
                            <Typography variant="body1" paragraph gutterBottom>The task was to create a fully functional ecommerce website with all the common features both for client and admin. For the user it means searching products, view its details, sorting, adding and removing from cart and checking out securely. On the other hand an admin should have a few unique tools such as creating, editing or removing a product.</Typography>                        
                            <Typography variant="h5" gutterBottom>Application Design</Typography>
                            <Typography variant="body1" paragraph gutterBottom>For this project I have decided to use a JavaScript strict superset Typescript. Both for frontend and backend. Website was build as a MERN stack application (React for frontend, non-relational database MongoDB, Node.js and its framework Express.js for backend).</Typography>                        
                            <Typography variant="body1" paragraph gutterBottom>For communication between frontend and backend I have used axios library.</Typography>
                            <Typography variant="body1" paragraph gutterBottom>The application is then built as a REST API.</Typography>
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
                <Container maxWidth="lg" className={classes.container}>
                    <img src={landingPage} alt="" style={{width: '100%'}} />
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <Typography variant="caption" component="div" color="textSecondary">PROBLEM SOLUTION</Typography>
                    <Typography variant="h5" gutterBottom>Approach to the Problem</Typography>
                    <Typography variant="h6" component="h6" gutterBottom>Authentication</Typography>
                    <Typography variant="body1" paragraph gutterBottom>Signing in and signing up have very common features such as checking if the username/email is already used (this is done with the built-in MongoDB functions) or whether the password and the confirmation password are matching.</Typography>
                    <Typography variant="body1" paragraph gutterBottom>The question was how to keep track of authenticated users and admins. I have chosen the method that is using jsonwebtokens (JWT Tokens). However, I have decided to take a little bit different approach that most would. I'm storing authenticated and admin state in redux store and also accessToken is kept there as a variable. The only exception is refreshToken that is located
                     in HTTPOnly cookies.</Typography>
                    <Typography variant="body1" paragraph gutterBottom> With this approach whenever I am accessing private route I am by default sending a request with a header containing accessToken. If the accessToken is invalid, either it has expired or there is some other problem with it, the backend will reach for a refreshToken in cookies a tries to validate it. If it is valid the server send back to the client a new accessToken which will be stored in redux store and update the current refreshToken in cookies. In the opposite case the authenticated state will be set to false and the refreshToken will be destroyed.</Typography>
                    <Typography variant="h6" gutterBototm>Private, Restricted and Admin Routes</Typography>
                    <Typography variant="body1" paragraph gutterBottom>This section is closely realted to the authetication since to be able to enter these routes you have to meet some criterias.</Typography>
                    <Typography variant="body1" paragraph gutterBottom>Firstly Private Routes. These routes are supposed to be accessed by all users that are authenticated. In the application I have used them when accessing client's orders. The way it works is that the page loads the global authenticated state that is kept in redux store. If the user is authenticated the route will let them through,  on the other hand the client will be redirected to the login page.</Typography>
                    <Typography variant="body1" paragraph gutterBottom>Restricted Routes. These ones are quite the opposite to the private routes. The user can access them only if they are not authenticated, in this case I have used them to prevent a client to for instance login twice. The way it works is the same as the Private Routes.</Typography>
                    <Typography variant="body1" paragraph gutterBottom>Last but not least, Admin Routes. As I have already mention, admin has a few unique tools in order to manage the site from frontend. And that's the situation when I use these type of routes. A user must be an admin to be able to access them. This component is build very much the same way as the previous routes. The only difference is that I am no longer checking for authenticated, though for admin state.</Typography>                
                </Container>
                <Container maxWidth="lg" className={classes.container} style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={authentication} alt="" style={{maxWidth: '100%'}}/>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <Typography variant="caption" component="div" color="textSecondary">PROBLEM SOLUTION</Typography>
                    <Typography variant="h6" gutterBottom>Redux Store, Async Thunk</Typography>
                    <Typography variant="body1" paragraph gutterBottom>I have mentioned Redux already in the previous paragraphs, however, now I would like to talk a little bit more about it. Since the website isn't the smallest one it's very important to have such a third party data store to avoid passing multiple states throughout the whole application.</Typography>
                    <Typography variant="body1" paragraph gutterBottom>In this case I have use Redux (redux toolkit) to store authentication, cart and products data. And I have chosen redux-presist library to prevent loosing all the data on every page reload.</Typography>
                    <Typography variant="body1" paragraph gutterBottom>Firstly authentication. As I have already mentioned in authentication store I am keeping multiple variables such as authenticated or admin state. What's more also accessToken or the user object could be found there. Lastly, since the requests to the server always return promises I am using async Thunk function to handle them.</Typography>
                    <Typography variant="body1" paragraph gutterBottom>Cart data are slightly different from authentication. The reason for it is that all the data is generated on the client side, thus there is no need to use async Thunk function to handle promises. Though it was a little more tricky since we have to create more robust inner logic in order to manage the states correctly.</Typography>
                    <Typography variant="body1" paragraph gutterBottom>At the end I have to bring up products data. This time we have to deal with promises again and again I'm using async Thunk function to manage it. The great thing about redux is that since I'm storing all the products there I don't have to make an API call to get the items every single time. All I need is to call the API in the beginning and then whenever I need this data I will just pull it out of the redux store. Also searching is much faster since all the data is already loaded and stored.</Typography>
                    <Typography variant="h6" gutterBottom>Admin Tools</Typography>
                    <Typography variant="body1" paragraph gutterBottom></Typography>
                </Container>    
            </div>
            <DrawerNavigation drawerState={[drawer, setDrawer]} />
        </div>
    )
}

export default EcomPage
