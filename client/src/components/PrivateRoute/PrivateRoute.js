import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../../utils/isAuth';

// Check if the user is logged in
export function PrivateRoute({ component: Component, ...rest }) {

    const [isAuthed, setIsAuthed] = useState(false);
    useEffect(() => {
        setIsAuthed(isAuth());
        // returning false when should be true
        console.log(isAuthed);
    }, []);

    return (
        <Route
            {...rest}
            render={props =>
                isAuthed
                    ? <Component {...props} />
                    : <Redirect
                        to='/login'
                    />}
        />
    );
}