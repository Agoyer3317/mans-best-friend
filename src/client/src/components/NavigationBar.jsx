import { AppBar, Button, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

// Navigation Bar Props
const HomeLink = (props) => <Link to="/" {...props} />;
const DashboardLink = (props) => <Link to="/dashboard" {...props} />;
const PetsPage = (props) => <Link to="/pet/2" {...props} />;
const Settings = (props) => <Link to="/settings" {...props} />;
const Sign_up_in = (props) => <Link to="/sign-up-in" {...props} />;

function NavigationBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Man's Best Friend
                    </Typography>
                    <Button color="inherit" component={HomeLink}>
                        Home
                    </Button>
                    <Button color="inherit" component={DashboardLink}>
                        Dashboard
                    </Button>
                    <Button color="inherit" component={PetsPage}>
                        Pet's Page
                    </Button>
                    <Button color="inherit" component={Settings}>
                        Settings
                    </Button>
                    <Button color="inherit" component={Sign_up_in}>
                        Sign Up/In
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const Component = withStyles(styles)(NavigationBar);
export { Component as NavigationBar };
