import React from 'react';
import { Drawer, List, ListItem, makeStyles, Typography, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import '../../css/drawer.css';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    drawer: {
        height: '100vh',
        width: '30vw',
        [theme.breakpoints.down('md')]: {
            width: '50vw'
        },
        [theme.breakpoints.down('xs')]: {
            width: '70vw'
        }
    },
    drawerContainer: {
        position: 'relative',
    },
    closeButton: {
        backgroundColor: 'black',
        borderRadius: 0,
        position: 'absolute',
        zIndex: 999,
        top: 20,
        right: 20,
        '& .MuiSvgIcon-root' :{
            color: 'white',
            fontSize: '2.5rem',
            [theme.breakpoints.down('md')]: {
                fontSize: '2rem'
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '1.5rem'
            }
        },
        '& :hover': {
            cursor: 'pointer',
        },
        [theme.breakpoints.down('md')]: {
            padding: '8px'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '4px'
        }
    },
}));

const hamburgerButton = {
    backgroundColor: 'black',
};

const DrawerNavigation = ({drawerState}) => {
    const classes = useStyles();
    const [drawer, setDrawer] = drawerState;

    const toggleDrawer = (open) => ( event ) => {
        if (
            event.type === 'keydown' &&
            ((event).key === 'Tab' ||
            (event).key === 'Shift')
        ) return;

        setDrawer(open);
    };

    const list = () => (
        <div role="presentation" onKeyDown={toggleDrawer(false)} onClick={toggleDrawer(false)} className={classes.drawer}>
            <List style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',               
            }}>
                <ListItem component={RouterLink} to={'/'} className="link" style={{width: 'auto'}}>
                    <Typography variant="h4" component="h2">Home</Typography>
                </ListItem>
                <ListItem component={RouterLink} to={'/about'} className="link" style={{width: 'auto'}}>
                    <Typography variant="h4" component="h2">About Me</Typography>
                </ListItem>
                <ListItem component={RouterLink} to={'/astranec'} className="link" style={{width: 'auto'}}>
                    <Typography variant="h4" component="h2">Astranec</Typography>
                </ListItem>
                <ListItem component={RouterLink} to={'/wlessbuds'} className="link" style={{width: 'auto'}}>
                    <Typography variant="h4" component="h2">WLessBuds</Typography>
                </ListItem>
                <ListItem component={RouterLink} to={'/hdnetmovies'} className="link" style={{width: 'auto'}}>
                    <Typography variant="h4" component="h2">HDNet Movies</Typography>
                </ListItem>
                <ListItem component={RouterLink} to={'/contact'} className="link" style={{width: 'auto'}}>
                    <Typography variant="h4" component="h2">Contact</Typography>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
          <Drawer anchor="right" open={drawer} onClose={toggleDrawer(false)} transitionDuration={{enter: 700, exit: 700}} className={classes.drawerContainer}>
              <IconButton onClick={() => setDrawer(previousState => !previousState)} className={classes.closeButton} style={hamburgerButton}>
                <CloseIcon />
              </IconButton>
            {list()}
          </Drawer>
        </div>
    );
};

export default DrawerNavigation;
