import React, { Component } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from '../components/Jumbotron';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Jumbotron />
                <h1>Dashboard</h1>
            </div>
        );
    }
}

export default Dashboard;
