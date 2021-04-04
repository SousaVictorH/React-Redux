import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';

function Routes() {

    const renderRoutes = () => {
        return(
            <>
                <Route path="/" exact component={Home} />
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
