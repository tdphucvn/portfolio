import React from 'react';
import { Container, Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none'
    },
    linkContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        height: '64px'
    }
}));

const socials = [
    {
        title: 'Facebook',
        link: 'https://www.facebook.com/philip.tranphuc/',
    },
    {
        title: 'Instagram',
        link: 'https://www.instagram.com/tdphucvn/?hl=cs',
    },
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/philip-tran-a65846208/',
    },
    {
        title: 'GitHub',
        link: 'https://github.com/tdphucvn',
    }
]

const Footer = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="sm" className={classes.container}>
            <Grid container style={{height: '100%'}}>
                {socials.map((media, index) => (
                    <Grid item sm={3} xs={12} className={classes.linkContainer} key={index}>
                        <Typography component="a" target="_blank" href={`${media.link}`} color="textSecondary" className={classes.link}>{media.title}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Footer;
