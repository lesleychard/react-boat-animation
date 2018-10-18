import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Routes from './Routes';
import {Nav} from './components';
import {Theme} from './theme';

export default function App() {
    return (
        <Theme>
            <Router>
                <Fragment>
                    <Route path="/" component={Nav} />
                    <Routes />
                </Fragment>
            </Router>
        </Theme>
    );
}
