import { combineReducers } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication Module
import Account from './auth/register/reducer';
import Login from './auth/login/reducer';
import authReducer from '../features/auth/AuthSlice'
import dashboardReducer from '../features/dashboard/DashboardSlice'
import Forget from './auth/forgetpwd/reducer';


const rootReducer = combineReducers({

  // public
  Layout,

  // Authentication
  auth: authReducer,
  dashboard: dashboardReducer,
  Account,
  Login,
  Forget

});

export default rootReducer;
