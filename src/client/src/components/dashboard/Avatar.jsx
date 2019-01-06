import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = {
    bigAvatar: {
        margin: 10,
        width: 150,
        height: 150
    }
};

/**
 * @param {{ classes: { bigAvatar: string } }} props
 */
function AvatarDashboard(props) {
    const { classes } = props;
    return (
        <Grid container justify="center" alignItems="center">
            <Avatar src="https://via.placeholder.com/150" className={classes.bigAvatar} />
        </Grid>
    );
}

const Component = withStyles(styles)(AvatarDashboard);
export { Component as Avatar };
