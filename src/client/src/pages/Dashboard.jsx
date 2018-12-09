import { Typography } from '@material-ui/core';
import React from 'react';
import { CardsDashboard } from '../components/CardsDashboard';
import { Jumbotron } from '../components/Jumbotron';

export class Dashboard extends React.Component {
    render() {
        return (
            <>
                <Jumbotron />
                <CardsDashboard />
                <CardsDashboard />
                <CardsDashboard />
                <CardsDashboard />
                <CardsDashboard />
                <CardsDashboard />
                <Typography variant="h1">Dashboard</Typography>
            </>
        );
    }
}
