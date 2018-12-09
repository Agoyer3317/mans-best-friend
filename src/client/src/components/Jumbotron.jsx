import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import heroImage from '../assets/images/luna.jpeg';
import { AvatarDashboard } from '../components/AvatarDashboard';

const styles = {
    heroImage: {
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        height: 400
    }
};

const Jumbotron = (props) => (
    <Paper className={props.classes.heroImage}>
        <Grid container>
            <Grid item md={3}>
                <div>
                    <AvatarDashboard />
                </div>
            </Grid>
            <Grid item md={3}>
                <div>
                    <Typography variant="h5" color="inherit" paragraph>
                        Allison Scollan
                    </Typography>
                </div>
            </Grid>
        </Grid>
    </Paper>
);

// styles = styles object on line 5
// Jumbotron = Component definition on line 12
const Component = withStyles(styles)(Jumbotron);
export { Component as Jumbotron };
