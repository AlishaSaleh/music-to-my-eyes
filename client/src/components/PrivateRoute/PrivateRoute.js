import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../../utils/isAuth';

// Check if the user is logged in
export function PrivateRoute({ component: Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={props =>
                isAuth()
                    ? <Component {...props} />
                    : <Redirect
                        to='/login'
                    />}
        />
    );
}