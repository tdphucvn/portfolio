import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import NavBar from '../components/navigation/NavBar';
import DrawerNavigation from '../components/navigation/DrawerNavigation';

import { Typography, Container, TextField, FormControl, Button, makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: '20vh',
        paddingBottom: '30px'
    },
    formContainer: {
        width: '100%',
        '& .MuiTextField-root': {
            margin: '10px 0'
        }
    },
    sendButton: {
        marginTop: theme.spacing(3),
    },
})); 

const Contact = () => {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        const target = e.target;
        emailjs.sendForm('service_7gj5i4i', 'template_531ujxa', target, 'user_MgmPzjT9bk2INTZbpke4k')
            .then((result) => {
                alert('Thank you for your email!')
                target.reset();
                setLoading(false);
            }, (error) => {
                alert('Something went wrong.')
                console.log(error.text);
                setLoading(false);
            });
    };

    return (
        <div style={{overflowY: 'auto'}}>
            <NavBar drawerState={[drawer, setDrawer]} />
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h4" component="h2" align="center" gutterBottom>Contact Us</Typography>
                <FormControl component="form" onSubmit={sendEmail} className={classes.formContainer}>
                    <TextField label="Subject" name="subject" type="text" variant="outlined" autoFocus/>
                    <TextField label="Name" name="name" type="text" variant="outlined"/>
                    <TextField label="Email" name="email" type="email" variant="outlined"/>
                    <TextField label="Message" name="message" type="text" multiline rows={8} variant="outlined" fullWidth={true}/>
                    <Button type="submit" variant="contained" style={{backgroundColor: 'black', color: 'white'}} className={classes.sendButton}>
                        {loading ? <CircularProgress style={{color: 'white'}} /> : 'Send'}
                    </Button>
                </FormControl>
            </Container>
            <DrawerNavigation drawerState={[drawer, setDrawer]} />
        </div>
    )
};

export default Contact;
