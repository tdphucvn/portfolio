import React, {useState} from 'react';
import NavBar from '../components/navigation/NavBar';
import DrawerNavigation from '../components/navigation/DrawerNavigation';
import StudyCases from '../components/navigation/StudyCases';
import YoutubeEmbed from '../components/shared/YoutubeEmbed';

import clsx from 'clsx';

import { Typography, makeStyles, Divider, Grid, List, ListItem, ListItemText, ListItemIcon, Container, Button, ButtonGroup } from '@material-ui/core';
import background from '../images/hdnetHero.png';
import moviePreview from '../images/hdnet.PNG';
import movieLand from '../images/hdnetLand.PNG';
import movieActor from '../images/hdnetActor.PNG';


import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaJs } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";

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
        backgroundPosition: 'center',
        height: '70vh',
        backgroundSize: 'cover',
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

const IMDBPage = () => {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);

    return (
        <div style={{paddingBottom: '30px'}}>
            <NavBar drawerState={[drawer, setDrawer]} />
            <div>
                <div className={classes.hero}>
                    <div className={classes.slider}></div>
                    <div className={classes.heroTitle}>
                        <Typography variant="h4" component="h2">HDNet Movies</Typography>
                        <Divider style={{backgroundColor: 'white'}}></Divider>
                        <Typography variant="subtitle1" component="h4">Movie Database using TMDB API.</Typography>
                    </div>
                </div>
                <Container maxWidth="lg" className={clsx(classes.introduction, classes.container)}>
                    <Typography variant="caption" component="div" color="textSecondary">INTRODUCTION</Typography>
                    <Grid container spacing={3}>
                        <Grid item sm={8}>
                            <Typography variant="h5" gutterBottom>Abstract</Typography>
                            <Typography variant="body1" paragraph gutterBottom>This is a movie database containing thousands of movies with all their information. Furthermore also actors and their personal information could be found there. User can also use various features such as search, filter, sort or discover. The application itself was then built using React.js as the frontend framework. All the data that is displayed is fetched from the TMDB API.</Typography>
                            <Typography variant="h5" gutterBottom>Given Problem</Typography>
                            <Typography variant="body1" paragraph gutterBottom>The task was to create a fully functional movie database with features such as search, sort or discover and to put an emphasis on the design.</Typography>                        
                            <Typography variant="h5" gutterBottom>Application Design</Typography>
                            <Typography variant="body1" paragraph gutterBottom>For this particular application I have decided to use an external API, thus I don't have to have my own backend set up. I'm fetching from TMDB API and for the frontend I have chosen React.js framework and Material UI library for styling.</Typography>                        
                            <Typography variant="body1" paragraph gutterBottom>In order to be able to communicate with the API I am using Javascript built-in Fetch API.</Typography>
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
                                    <ListItemIcon style={{minWidth: 20}}><FaJs /></ListItemIcon>
                                    <ListItemText>Javascript</ListItemText>
                                </ListItem>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><FaReact /></ListItemIcon>
                                    <ListItemText>React</ListItemText>
                                </ListItem>
                            </List>
                            <ButtonGroup disableElevation={true}>
                                <Button variant="contained" className={classes.githubButton} component="a" href="https://github.com/tdphucvn/IMDB-API" target="_blank"><FaGithub style={{marginRight: '5px'}}/>Github</Button>
                                <Button variant="outlined" component="a" href="https://hdnetmovies.netlify.app/" target="_blank"><FiMonitor style={{marginRight: '5px'}}/>Live Demo</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <img src={moviePreview} alt="" style={{width: '100%'}}/>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <Typography variant="caption" component="div" color="textSecondary">DESIGN SOLUTION</Typography>
                    <Typography variant="h5" gutterBottom>Design</Typography>
                    <Typography variant="h6" component="h6" gutterBottom>Landing Page</Typography>
                    <Typography variant="body1" paragraph gutterBottom>On the first glance of the website you can spot a simple slideshow of trending movies. At first I am fetching last week trending movies. After that I make an array of the displayed movies, where the middle one is highlighted. In order to always keep the array to contain 5 elements I am adding empty elements to the array when we are approaching one of the ends.</Typography>
                    <Typography variant="h6" component="h6" gutterBottom>Discover Feature</Typography>
                    <Typography variant="body1" paragraph gutterBottom>The discover section has three options. The first one is to display top 20 movies depending on whether they were trending last week. The second option is to sort them in the descending order by the revenue they have made. And the last option is to sort them according to their date of release. Furthermore I have also added an option of a custom search, where the clients can discover movies however they want it to be.</Typography>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <img src={movieLand} alt="" style={{width: '100%'}}/>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <Typography variant="caption" component="div" color="textSecondary">DESIGN SOLUTION</Typography>
                    <Typography variant="h6" gutterBottom>Actors</Typography>
                    <Typography variant="body1" paragraph gutterBottom>The user is given an opportunity to search for an actor, but not only them. Producers, directors and other crew members are also in the database. And when it comes to displaying data about a certain person I'm fetching their biography, all the general personal information and the movies their are best known for.</Typography>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <img src={movieActor} alt="" style={{width: '100%'}}/>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <Typography variant="caption" component="div" color="textSecondary">DESIGN SOLUTION</Typography>
                    <Typography variant="h6" gutterBottom>Movies</Typography>
                    <Typography variant="body1" paragraph gutterBottom>The user is given an opportunity to search for a movie, with its title or the release year. When it comes to displaying the data about the movie I am fetching all the general information such as title, descirption, release year, rating etc. What's more on the landing page I am showing the most important members of the crew like producer or director. In the section above it the user can find the whole cast of the movie and movies that are similar or are recommended to the original one.</Typography>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <Typography variant="caption" component="div" color="textSecondary">Live Demo</Typography>
                    <Typography variant="h6" gutterBottom>HDNet Movies Demo Showcase</Typography>
                    <YoutubeEmbed videoURL="BGZOmnE5RUI"/>
                </Container>
                <StudyCases project="HDNet Movies" />
            </div>
            <DrawerNavigation drawerState={[drawer, setDrawer]} />
        </div>
    )
}

export default IMDBPage
