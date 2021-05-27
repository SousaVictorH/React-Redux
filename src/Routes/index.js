import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import UseDetails from '../Pages/UserDetails';

function Routes() {

    const renderRoutes = () => {
        return(
            <>
                <Route exact path="/" component={Home} />
                <Route exact path="/user/:userId" component={UseDetails} />
            </>
        );
    };

    return(
        <BrowserRouter>
            <Switch>
                {renderRoutes()}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
