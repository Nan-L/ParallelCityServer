import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Link as RouterLink} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/HomeRounded';
import InfoIcon from '@material-ui/icons/Info';
import '../styles/NavBar.css';
import logo from '../asserts/images/logo.svg';

const iconLayout = {
    position: "relative",
    bottom: "0.2vh"
};


class NavBar extends Component {
    render() {
        return (
            <div className="navigation">
                <AppBar position="static">
                    <Toolbar>
                        <Grid container spacing={16} alignItems="center">
                            <Grid item>
                                <RouterLink to="/home">
                                    <img width={100} src={logo} alt=""/>
                                </RouterLink>
                            </Grid>
                            <Grid item>
                                <Button component={RouterLink} className="navButton, active" variant="contained" color="inherit" to="/home">
                                    <HomeIcon style={iconLayout} />
                                    Home
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button component={RouterLink} className="navButton" variant="contained" color="inherit" to="/event">Event</Button>
                            </Grid>
                            <Grid item style={{flexGrow: 1}}>
                                <Button component={RouterLink} className="navButton" variant="contained" color="inherit" to="/about">
                                    <InfoIcon style={iconLayout} />
                                    About
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button component={RouterLink} color="inherit" to="/login">Login</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar;