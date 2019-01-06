import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import heroImage from '../../assets/images/luna.jpeg';
import { Avatar } from './Avatar';

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
                    <Avatar />
                </div>
            </Grid>
            <Grid item md={3}>
                <div>
                    <Typography variant="h5" color="inherit" paragraph>
                        {props.userName}
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
