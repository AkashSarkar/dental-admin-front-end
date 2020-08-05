import React, { Component, useEffect } from 'react';
import Layout from './components/Layout/';
import { withRouter, Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

import routes from './routes';
import './custom.css';
import './App.scss';
// Get all Auth methods
import { getUserProfile, isUserAuthenticated } from './helpers/authUtils';
import SideNav from './components/Layout/SideNav';
import { useDispatch, useSelector } from 'react-redux';
import { TOKEN } from './config';
import { getUserProfileThunk, signInError, signInSuccess } from './features/auth/AuthSlice';
import { getCompanySettingsThunk, getSlidersThunk } from './features/dashboard/DashboardSlice';

function withLayout(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    render() {
      return <Layout>
        <WrappedComponent></WrappedComponent>
      </Layout>
    }
  };
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isUserAuthenticated = useSelector(state => state.auth.isAuthed)
  return (
    <Route {...rest} render={(props) => (
      isUserAuthenticated
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
}

const PublicRoute = ({ component: Component, ...rest }) => {
  const isUserAuthenticated = useSelector(state => state.auth.isAuthed)
  return (
    <Route {...rest} render={(props) => (
      !isUserAuthenticated
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
}

const App = () => {
  const dispatch = useDispatch();
  /**
   * preload data if user is logged in
   */
  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    dispatch(getCompanySettingsThunk())
    dispatch(getSlidersThunk())
    if (token) {
      dispatch(getUserProfileThunk())
      dispatch(signInSuccess())
    } else {
      dispatch(signInError())
    }
  }, [])
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {routes.map((route, idx) =>
            route.ispublic ?
              <PublicRoute path={route.path} component={route.component} key={idx} />
              :
              <PrivateRoute path={route.path} component={withLayout(route.component)} key={idx} />
          )}
        </Switch>
      </Router>
    </React.Fragment>
  );
}
export default withRouter(App);


