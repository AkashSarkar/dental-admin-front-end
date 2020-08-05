import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { CHECK_LOGIN } from './actionTypes';
import { apiError, loginUserSuccessful } from './actions';

// AUTH related methods
import { setLoggeedInUser, postLogin, getUserProfile } from '../../../helpers/authUtils';

//If user is login then dispatch redux action's are directly from here.
function* loginUser({ payload: { username, password, history } }) {
  try {
    const response = yield call(postLogin, '/api-token-auth/',
      { username, password });
    setLoggeedInUser(response.token);
    const user = yield call(getUserProfile, '/patient-profile/')
    console.log(user)
    yield put(loginUserSuccessful(response));
    history.push('/dashboard');
  } catch (error) {
    yield put(apiError(error));
  }
}

export function* watchUserLogin() {
  yield takeEvery(CHECK_LOGIN, loginUser)
}

function* loginSaga() {
  yield all([fork(watchUserLogin)]);
}

export default loginSaga;
