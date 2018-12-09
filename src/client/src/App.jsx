import React from 'react';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import PetHome from './pages/pet_home';
import Settings from './pages/settings';
import SignInUp from './pages/sign_up_in';

import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';

export const App = () => (
    <CssBaseline>
        <BrowserRouter>
            <>
                <NavigationBar />
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/pet/:id" component={PetHome} />
                <Route path="/settings" component={Settings} />
                <Route path="/sign-up-in" component={SignInUp} />
            </>
        </BrowserRouter>
    </CssBaseline>
);
