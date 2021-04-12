import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext, isLogin } from "../../State";

const SBprivateRoute = ({component: Component, ...rest}) => {
    const { state } = useContext(AppContext);
    return (
        <Route {...rest} render={props => (
            isLogin(state)
            ? <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default SBprivateRoute;