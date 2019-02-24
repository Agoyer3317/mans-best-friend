import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { DashboardCard } from '../components/dashboard/Card';
import { Jumbotron } from '../components/dashboard/Jumbotron';
import { AddPetButton } from '../components/dashboard/AddPetButton';

const styles = {
    gridRoot: {
        flexGrow: 1,
        padding: 60
    }
};

/**
 * After sending the POST request to add a pet, we want to update the pets
 * in real time, therefore we need to rework the Dashboard to use state instead
 * of props.
 *
 */

class Dashboard extends React.Component {
    render() {
        return (
            this.props.user && (
                <>
                    <Jumbotron userName={`${this.props.user.first_name} ${this.props.user.last_name}`} />
                    <Typography variant="h1">Dashboard</Typography>
                    <div className={this.props.classes.gridRoot}>
                        <Grid container spacing={40}>
                            {/* 
                                This needs to be changed so that it updates
                                whenever we click the "Add" button.
                            */}
                            {this.props.user.pets.map((pet) => (
                                <Grid item md={4} sm={12} key={pet.id}>
                                    <DashboardCard id={pet.id} name={pet.name} />
                                </Grid>
                            ))}
                        </Grid>
                        <AddPetButton />
                    </div>
                </>
            )
        );
    }
}

const Component = withStyles(styles)(Dashboard);
export { Component as Dashboard };
