import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { PetHome } from './pages/PetHome';
import { Settings } from './pages/Settings';
import { SignUpIn } from './pages/SignUpIn';

export class App extends React.Component {
    state = {
        user: null
    };

    async componentDidMount() {
        try {
            // make the ajax call here
            const { data } = await axios.get('/api/users/1');

            console.log(data);

            this.setState({ user: data });
            // update user in the state
        } catch (err) {
            console.error(err);
        }
    }

    DashboardRoute = (props) => <Dashboard user={this.state.user} {...props} />;

    render() {
        return (
            <CssBaseline>
                <BrowserRouter>
                    <>
                        <NavigationBar />
                        <Route path="/" exact component={Home} />
                        <Route path="/dashboard" component={this.DashboardRoute} />
                        <Route path="/pet/:id" component={PetHome} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/sign-up-in" component={SignUpIn} />
                    </>
                </BrowserRouter>
            </CssBaseline>
        );
    }
}
