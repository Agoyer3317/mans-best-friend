import { Grid, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { CardsDashboard } from '../components/CardsDashboard';
import { Jumbotron } from '../components/Jumbotron';

const pets = ['Luna', 'Oogie', 'Simon', 'Nemo', 'Kitty', 'Daisy', 'Luna', 'Oogie', 'Simon', 'Nemo', 'Kitty', 'Daisy'];

const styles = {
    gridRoot: {
        flexGrow: 1,
        padding: 60
    }
};

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <Jumbotron />
                <Typography variant="h1">Dashboard</Typography>
                <div className={this.props.classes.gridRoot}>
                    <Grid container spacing={40}>
                        {pets.map((e, i) => (
                            <Grid item md={4} sm={12} key={i}>
                                <CardsDashboard name={e} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </>
        );
    }
}

const Component = withStyles(styles)(Dashboard);
export { Component as Dashboard };
