import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component,setX, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component setX={setX}{...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;