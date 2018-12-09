import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import heroImage from '../assets/images/luna.jpeg';

const styles = {
    heroImage: {
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover'
    }
};

const Jumbotron = (props) => (
    <Paper className={props.classes.heroImage}>
        <Grid container>
            <Grid item md={6}>
                <div>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        Title of a longer featured blog post
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                        Multiple lines of text that form the lede, informing new readers quickly and efficiently about
                        what&apos;s most interesting in this post&apos;s contents…
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
