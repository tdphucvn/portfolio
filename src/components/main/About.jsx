import React from 'react';
import { makeStyles, Container, Typography, Grid, ButtonGroup, Button, Divider } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        overflowY: 'hidden',
        paddingTop: '20px'
    },
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

const About = () => {
    const classes = useStyles();
    return (
        <section name="about" className={classes.container}>
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item md={8} sm={12}>
                        <Typography variant="caption" component="div" color="textSecondary" className={classes.informationHeader}>ABOUT ME</Typography>
                        <Typography variant="body1" gutterBottom>HEY THERE,</Typography>
                        <Typography variant="h6" className={classes.header6}>My name is Philip Tran.</Typography>
                        <Typography variant="h6" gutterBottom className={classes.header6}>I express my creativity through code.</Typography>
                        <Typography variant="body1" paragraph gutterBottom className={classes.body1}>I'm a self-taught full-stack engineer who is passionate about creating extraordinary things. Currently based in Cheb, Czech Republic.</Typography>
                        <Typography variant="body1" paragraph gutterBottom className={classes.body1}>Code has always been a way for me to express my creativity and I strongly believe that this passion will stay with me in the future as well.</Typography>
                        <Typography variant="body1" paragraph gutterBottom className={classes.body1}>Apart from coding I also enjoy writting poetry, even though I will be probably forever locked in my drawer.</Typography>
                        <Typography variant="body1" paragraph gutterBottom className={classes.body1}>To be frank, I believe that a great mind needs a healthy body. Thus gyms or basketball courts are basicly my second home.</Typography>
                    </Grid>
                    <Grid item md={4} sm={0} className={classes.contact}>
                        <Typography variant="caption" color="textSecondary">GET IN TOUCH</Typography>
                        <div className={classes.contactSection}>
                            <Typography variant="caption" color="textSecondary">Elsewhere</Typography>
                            <Divider></Divider>
                            <ButtonGroup className={classes.socialMediasButtons} disableElevation={true} fullWidth={false}>
                                <Button variant="text" style={{opacity: 0.6}}><FacebookIcon /></Button>
                                <Button variant="text" style={{opacity: 0.6}}><InstagramIcon /></Button>
                                <Button variant="text" style={{opacity: 0.6}}><LinkedInIcon /></Button>
                                <Button variant="text" style={{opacity: 0.6}}><GitHubIcon /></Button>
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
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
};

export default About;
