import React, {} from 'react';
import {Route, Switch} from 'react-router-dom';
import {
    About,
    Contact,
    Home,
    Portfolio,
} from './pages';

export default function Routes() {
    return (
        <Switch>
            <Route
                exact
                path="/"
                component={Home}
            />
            <Route
                exact
                path="/about"
                component={About}
            />
            <Route
                exact
                path="/portfolio"
                component={Portfolio}
            />
            <Route
                exact
                path="/contact"
                component={Contact}
            />
        </Switch>
    );
}
