import React, {useState} from 'react';
import AboutContent from '../components/shared/AboutContent';
import NavBar from '../components/navigation/NavBar';
import DrawerNavigation from '../components/navigation/DrawerNavigation';

const AboutPage = () => {
    const [drawer, setDrawer] = useState(false);

    return (
        <div style={{overflowY: 'auto'}}>
            <NavBar drawerState={[drawer, setDrawer]} />
            <div style={{paddingTop: '20vh', paddingBottom: '30px'}}>
                <AboutContent />
            </div>
            <DrawerNavigation drawerState={[drawer, setDrawer]} />
        </div>
    )
}

export default AboutPage
