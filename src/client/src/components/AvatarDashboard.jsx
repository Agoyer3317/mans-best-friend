import { Avatar, Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
    bigAvatar: {
        margin: 10,
        width: 150,
        height: 150
    }
};

function AvatarDashboard(props) {
    const { classes } = props;
    return (
        <Grid container justify="center" alignItems="center">
            <Avatar src="https://via.placeholder.com/150" className={classes.bigAvatar} />
        </Grid>
    );
}

AvatarDashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

const Component = withStyles(styles)(AvatarDashboard);
export { Component as AvatarDashboard };
