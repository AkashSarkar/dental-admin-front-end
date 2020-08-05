import React, { useState } from 'react';
import { Alert, Button, Col, Row, Card } from 'reactstrap';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { checkLogin } from '../../store/actions';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import logosm from '../../images/logo-sm.png';
import { useDispatch, useSelector } from 'react-redux';
import { handleLoginThunk } from './AuthSlice';

const Pageslogin = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state.auth.user)
  const errors = useSelector(state => state.auth.errors)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    dispatch(handleLoginThunk({ username, password }, history))
  }
  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark"><i className="fas fa-home h2"></i></Link>
      </div>

      <div className="wrapper-page">

        <Card className="overflow-hidden account-card mx-3">

          <div className="bg-primary p-4 text-white text-center position-relative">
            <h4 className="font-20 m-b-5">Welcome Back !</h4>
            <p className="text-white-50 mb-4">Sign in to continue to Veltrix.</p>
            <Link to="/" className="logo logo-admin"><img src={logosm} height="24" alt="logo" /></Link>
          </div>
          <div className="account-card-content">
            <AvForm className="form-horizontal m-t-30" onValidSubmit={handleLogin}>
              <AvField
                name="username"
                label="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Email"
                type="text"
                required />
              <AvField
                name="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                type="password"
                required
              />
              {errors && <div className="alert alert-danger" role="alert">
                Username or Password is incorrect.
              </div>}

              <Row className="form-group m-t-20">
                <Col sm="6">

                </Col>
                <Col sm="6" className="text-right">
                  <Button color="primary" className="w-md waves-effect waves-light" type="submit">Log In</Button>
                </Col>
              </Row>

              <Row className="form-group m-t-10 mb-0">
                <Col md="12" className="m-t-20">
                  <Link to="/forget-password"><i className="mdi mdi-lock"></i> Forgot your password?</Link>
                </Col>
              </Row>
            </AvForm>
          </div>
        </Card>

        <div className="m-t-40 text-center">
          {/* <p>Don't have an account ? <Link to="/register" className="font-500 text-primary"> Signup now </Link></p>*/}
          <p>© {new Date().getFullYear()} Dental</p>
        </div>

      </div>
    </React.Fragment>
  );
}
export default withRouter(Pageslogin);



