import { createSlice } from '@reduxjs/toolkit';
import { API, PUBLIC_API, TOKEN } from '../../config';

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    user: {},
    isAuthed: false,
    errors: false,
    isRegistered: false
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    signInSuccess: (state) => {
      state.isAuthed = true;
      state.errors = false;
    },
    logoutSuccess: (state) => {
      state.isAuthed = false;
      state.errors = false;
      state.user = {};
    },
    signInError: (state) => {
      state.isAuthed = false;
    },
    setLoginError: (state) => {
      state.errors = true;
    },
    registrationSuccess: (state) => {
      state.isRegistered = true;
    },
    registrationError: (state) => {
      state.isRegistered = false;
    }
  }
});
export const {
  getUser, signInSuccess, logoutSuccess, signInError, setLoginError,
  registrationError, registrationSuccess
} = AuthSlice.actions;

export const handleLoginThunk = (postData, history = null) => dispatch => {
  PUBLIC_API.post('/api-token-auth/', postData)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem(TOKEN, res.data.token)
      dispatch(signInSuccess())
      history.push('/dashboard')
      // dispatch(getUser(res.data.user))
    })
    .catch((e) => {
      console.log('error')
      dispatch(setLoginError())
      dispatch(signInError())
    })
}
export const logOutThunk = (history = null) => dispatch => {
  localStorage.removeItem(TOKEN)
  dispatch(logoutSuccess())
  history.replace('/login')
}
export const handleRegistrationThunk = (postData) => dispatch => {
  PUBLIC_API.post('/patient-profile/', postData)
    .then((res) => {
      dispatch(registrationSuccess())
    })
    .catch((e) => {
      dispatch(registrationError())
    })
}
export const getUserProfileThunk = (postData) => dispatch => {
  API.get('/patient-profile/')
    .then((res) => {
      dispatch(getUser(res.data.profiles))
    })
    .catch((e) => {
    })
}
export default AuthSlice.reducer;
