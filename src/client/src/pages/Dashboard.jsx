import React from 'react';
import { Jumbotron } from '../components/Jumbotron';

export class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron />
                <h1>Dashboard</h1>
            </div>
        );
    }
}
