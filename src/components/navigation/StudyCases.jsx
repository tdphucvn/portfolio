import React, {useEffect, useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import { Grid, makeStyles, Typography, Container } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    projectLink: {
        textDecoration: 'none',
        color: 'black'
    },
    linkContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const projects = [{title: 'Astranec', path: '/astranec'}, {title: 'WLessBuds', path: '/wlessbuds'}, {title: 'HDNet Movies', path: '/hdnetmovies'}]

const StudyCases = ({project}) => {
    const [displayedProjects, setDisplayedProjects] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const projectsToDisplay = projects.filter((pro) => pro.title !== project);
        setDisplayedProjects(projectsToDisplay);
    }, [project]);

    return (
        <Container maxWidth="md">
            <Typography align="center" variant="h5" color="textSecondary">Other Projects</Typography>
            <Grid container>
                {displayedProjects.map((project, index) => (
                    <Grid item md={6} xs={12} key={index} className={classes.linkContainer}>
                        <RouterLink to={`${project.path}`} className={clsx(classes.projectLink, 'about-link')} style={{marginTop: '15px'}}>
                            <Typography variant="h6" className="about-link">{project.title}</Typography>
                        </RouterLink>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
};

export default StudyCases;
