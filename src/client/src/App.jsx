import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { PetHome } from './pages/PetHome';
import { Settings } from './pages/Settings';
import { SignUpIn } from './pages/SignUpIn';

export const App = () => (
    <CssBaseline>
        <BrowserRouter>
            <>
                <NavigationBar />
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/pet/:id" component={PetHome} />
                <Route path="/settings" component={Settings} />
                <Route path="/sign-up-in" component={SignUpIn} />
            </>
        </BrowserRouter>
    </CssBaseline>
);
