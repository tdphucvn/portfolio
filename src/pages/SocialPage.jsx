import React, {useState} from 'react';
import NavBar from '../components/navigation/NavBar';
import DrawerNavigation from '../components/navigation/DrawerNavigation';
import StudyCases from '../components/navigation/StudyCases';
import YoutubeEmbed from '../components/shared/YoutubeEmbed';

import clsx from 'clsx';

import { Typography, makeStyles, Divider, Grid, List, ListItem, ListItemText, ListItemIcon, Container, Button, ButtonGroup } from '@material-ui/core';
import background from '../images/astranecHero.jpg';
import loginPage from '../images/astranec.PNG';
import goalPage from '../images/astranecGoals.PNG';
import profilePage from '../images/astranecProfile.PNG';

import { FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaGithub, FaJs } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { SiTypescript } from "react-icons/si";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    hero: {
        position: 'relative',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: '0% -50%',
        height: '70vh',
        backgroundSize: '100%',
        [theme.breakpoints.down('md')]: {
            backgroundPosition: '0% 0%'
        },
        [theme.breakpoints.down('sm')]: {
            backgroundPosition: '0% 20%'
        },
        [theme.breakpoints.down('xs')]: {
            backgroundPosition: '0% 35%'
        }
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

const SocialPage = () => {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);

    return (
        <div style={{paddingBottom: '30px'}}>
            <NavBar drawerState={[drawer, setDrawer]} />
            <div>
                <div className={classes.hero}>
                    <div className={classes.slider}></div>
                    <div className={classes.heroTitle}>
                        <Typography variant="h4" component="h2">Astranec</Typography>
                        <Divider style={{backgroundColor: 'white'}}></Divider>
                        <Typography variant="subtitle1" component="h4">Place to share your goals and aspirations</Typography>
                    </div>
                </div>
                <Container maxWidth="lg" className={clsx(classes.introduction, classes.container)}>
                    <Typography variant="caption" component="div" color="textSecondary">INTRODUCTION</Typography>
                    <Grid container spacing={3}>
                        <Grid item sm={8}>
                            <Typography variant="h5" gutterBottom>Abstract</Typography>
                            <Typography variant="body1" paragraph gutterBottom>This project was created as a social media for people with various goals and aspirations. The purpose is to provide people with an opportunity to keep track of their goals and share them with others.</Typography>
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
                            <ButtonGroup disableElevation={true}>
                                <Button variant="contained" className={classes.githubButton} component="a" href="https://github.com/tdphucvn/SM-project" target="_blank"><FaGithub style={{marginRight: '5px'}}/>Github</Button>
                                <Button variant="outlined" component="a" href="https://astranec.herokuapp.com" target="_blank"><FiMonitor style={{marginRight: '5px'}}/>Live Demo</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <img src={loginPage} alt="" style={{width: '100%'}}/>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <Typography variant="caption" component="div" color="textSecondary">PROBLEM SOLUTION</Typography>
                    <Typography variant="h5" gutterBottom>Approach to the Problem</Typography>
                    <Typography variant="h6" component="h6" gutterBottom>Authentication</Typography>
                    <Typography variant="body1" paragraph gutterBottom>After setting up the application and the database, the first thing I jumped on was the authentication - Sign In and Sign Up and keeping track of an authenticated user. 
                    As for validation and checking the correctnes of inputs from client I have decided to use <strong>JOI</strong> with the help of regular expressions. 
                    Password hashing is then handled by <strong>bcrypt</strong>. Though, how about keeping track of the state if the user is authenticated or not? 
                    This was done with the help of <strong>jsonwebtoken (JWT)</strong>. 
                    AccessToken and RefreshToken are then sent to the client through HTTPOnly Cookies. 
                    Since both backend and frontend are located on the same domain we don't have to deal with <strong>CORS problems</strong>.</Typography>
                    <Typography variant="h6" component="h6" gutterBottom>Creating Goals, Milestones, Posts</Typography>
                    <Typography variant="body1" paragraph gutterBottom>Create a goal on its own is not very hard to handle. 
                    Its milestones and posts related to the certain goal are something else. 
                    In the database are these objects connected through a reference to the ObjectId of the goal. 
                    In order to provide the client as pleasant experience as possible I'm using <strong>AJAX</strong> request to the server, since I'm then able to update the DOM content without reloading the page. 
                    This method is used for milestone checking and creating posts. Last but not least, clients are provided with the opportunity to change the priority order of the goals to their own preferences. By default new goals has the lowest priority.</Typography>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <img src={goalPage} alt="" style={{width: '100%'}}/>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <Typography variant="caption" component="div" color="textSecondary">PROBLEM SOLUTION</Typography>
                    <Typography variant="h6" gutterBottom>Searching for others</Typography>
                    <Typography variant="body1" paragraph gutterBottom>This was done with an 'onchange' event listener. 
                    Whenever the event listener is triggered it sends an AJAX request to the server with the given query. 
                    The server then with the help of regular expressions and built-in MongoDB functions finds all the possible results from the database. 
                    This data is then displayed to the client.</Typography>
                    <Typography variant="h6" gutterBottom>Follow</Typography>
                    <Typography variant="body1" paragraph gutterBottom>This was a little bit more tricky task to do. 
                    Since using a non-relational database is not quite the best option for it. A graph databse would be a better tool. 
                    The difficulty I have to dealt with was that when a user A follows user B both attributes: namely followers of user B and following user A has to be updated. 
                    This goes hand in hand with unfollowing as well. And know who follows who is quite important as well when it comes to chatting.</Typography>
                    <Typography variant="h6" gutterBottom>Likes and Comments</Typography>
                    <Typography variant="body1" paragraph gutterBottom>This was done very similarly to creating milestones and posts. The only difference was that these object are refering to ObjectId of the post.</Typography>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <img src={profilePage} alt="" style={{width: '100%'}} />
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <Typography variant="caption" component="div" color="textSecondary">PROBLEM SOLUTION</Typography>
                    <Typography variant="h6" gutterBottom>Real-time Chatting</Typography>
                    <Typography variant="body1" paragraph gutterBottom>User can chat with someone else only in case that these two people are following each other. If that's the case, a nick of the other person will appear in the chat section and you can start to chat. All this magic is handled with AJAX on the frontend and on the server with the help of socket.io.</Typography>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <Typography variant="caption" component="div" color="textSecondary">Live Demo</Typography>
                    <Typography variant="h6" gutterBottom>Astranec Demo Showcase</Typography>
                    <YoutubeEmbed videoURL="IykK5f-pNqc"/>
                </Container>
                <StudyCases project="Astranec" />
            </div>
            <DrawerNavigation drawerState={[drawer, setDrawer]} />
        </div>
    )
}

export default SocialPage
