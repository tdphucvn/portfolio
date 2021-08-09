import React from 'react';
import { Container, Grid, Typography, Divider, Button, ButtonGroup, makeStyles, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import { FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaReact, FaJs, FaPython } from "react-icons/fa";
import { SiTypescript, SiCsharp } from "react-icons/si";


const useStyles = makeStyles((theme) => ({
    socialMediasButtons: {
        '& button': {
            borderRadius: 0,
        },
        '& .MuiSvgIcon-root': {
            fontSize: '2rem'
        },
    },
    informationHeader: {
        marginBottom: theme.spacing(3),
    },
    contact: {
        display: 'flex',
        flexDirection: 'column',
    },
    contactSection: {
        marginTop: theme.spacing(3)
    },
    header6: {
        fontSize: '2rem',
    },
    body1: {
        fontSize: '1.4rem',
    }
}));

const AboutContent = () => {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item md={8} sm={12}>
                        <div>
                            <Typography variant="caption" component="div" color="textSecondary" className={classes.informationHeader}>ABOUT ME</Typography>
                            <Typography variant="body1" gutterBottom>HEY THERE,</Typography>
                            <Typography variant="h6" className={classes.header6}>My name is Philip Tran.</Typography>
                            <Typography variant="h6" gutterBottom className={classes.header6}>I express my creativity through code.</Typography>
                            <Typography variant="body1" paragraph gutterBottom className={classes.body1}>I'm a self-taught full-stack engineer who is passionate about creating extraordinary things. Currently based in Cheb, Czech Republic.</Typography>
                            <Typography variant="body1" paragraph gutterBottom className={classes.body1}>Code has always been a way for me to express my creativity and I strongly believe that this passion will stay with me in the future as well.</Typography>
                            <Typography variant="body1" paragraph gutterBottom className={classes.body1}>Apart from coding I also enjoy writting poetry, even though I will be probably forever locked in my drawer, or wondering about various start-up ideas.</Typography>
                            <Typography variant="body1" paragraph gutterBottom className={classes.body1}>To be frank, I believe that a great mind needs a healthy body. Thus gyms or basketball courts are basicly my second home.</Typography>
                            <Typography variant="body1" paragraph gutterBottom className={classes.body1}>Among my other activities I would mention researching cryptocurrencies, stocks and finance in general.</Typography>
                        </div>
                        
                    </Grid>
                    <Grid item md={4}className={classes.contact}>
                        <div>
                            <Typography variant="caption" color="textSecondary">GET IN TOUCH</Typography>
                            <div className={classes.contactSection}>
                                <Typography variant="caption" color="textSecondary">Social Medias</Typography>
                                <Divider></Divider>
                                <ButtonGroup className={classes.socialMediasButtons} disableElevation={true} fullWidth={false}>
                                    <Button variant="text" style={{opacity: 0.6}} component="a" href="https://www.facebook.com/philip.tranphuc/" target="_blank"><FacebookIcon /></Button>
                                    <Button variant="text" style={{opacity: 0.6}} component="a" href="https://www.instagram.com/tdphucvn/?hl=cs" target="_blank"><InstagramIcon /></Button>
                                    <Button variant="text" style={{opacity: 0.6}} component="a" href="https://www.linkedin.com/in/philip-tran-a65846208/" target="_blank"><LinkedInIcon /></Button>
                                    <Button variant="text" style={{opacity: 0.6}} component="a" href="https://github.com/tdphucvn" target="_blank"><GitHubIcon /></Button>
                                </ButtonGroup>
                            </div>
                            <div className={classes.contactSection}>
                                <Typography variant="caption" color="textSecondary">Email Address</Typography>
                                <Divider></Divider>
                                <Typography component="a" href="mailto:tran.philip02@gmail.com" variant="body2" color="textPrimary" style={{textDecoration: 'none'}}>tran.philip02@gmail.com</Typography>
                            </div>
                            <div className={classes.contactSection}>
                                <Typography variant="caption" color="textSecondary">Phone Number</Typography>
                                <Divider></Divider>
                                <Typography variant="body2" color="textPrimary">+420 773 578 018</Typography>
                            </div>
                            <div className="about-link">
                                <Typography component={RouterLink} to="/contact">Contact Me</Typography>
                            </div>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <Typography variant="h6">Technologies I'm familiar with</Typography>
                            <List>
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
                                    <ListItemIcon style={{minWidth: 20}}><FaJs /></ListItemIcon>
                                    <ListItemText>Javascript</ListItemText>
                                </ListItem>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><SiCsharp /></ListItemIcon>
                                    <ListItemText>C#</ListItemText>
                                </ListItem>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><FaPython /></ListItemIcon>
                                    <ListItemText>Python</ListItemText>
                                </ListItem>
                                <ListItem style={{padding: '0 16px'}}>
                                    <ListItemIcon style={{minWidth: 20}}><FaReact /></ListItemIcon>
                                    <ListItemText>React</ListItemText>
                                </ListItem>
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
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default AboutContent;
