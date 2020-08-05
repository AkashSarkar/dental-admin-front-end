import React, { Component } from 'react';
import { Alert, Button, Card, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser, emptyError } from '../../store/actions';
import logosm from '../../images/logo-sm.png';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class Pagesregister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, values) {
        this.props.registerUser(values)
    }


    render() {
        return (
            <React.Fragment>
                <div className="home-btn d-none d-sm-block">
                    <Link to="/" className="text-dark"><i className="fas fa-home h2"></i></Link>
                </div>

                <div className="wrapper-page">

                    <Card className="overflow-hidden account-card mx-3">

                        <div className="bg-primary p-4 text-white text-center position-relative">
                            <h4 className="font-20 m-b-5">Free Register</h4>
                            <p className="text-white-50 mb-4">Get your free Veltrix account now.</p>
                            <Link to="/" className="logo logo-admin"><img src={logosm} height="24" alt="logo" /></Link>
                        </div>
                        <div className="account-card-content">

                            {this.props.user && <Alert color="success">
                                Registration Done Successfully.</Alert>}

                            {this.props.registrationError && <Alert color="danger">
                                {this.props.registrationError}</Alert>}

                            <AvForm className="form-horizontal m-t-30" onValidSubmit={this.handleSubmit} >
                                <AvField name="username" label="Username" value={this.state.username} placeholder="Enter Username" type="text" required />
                                <AvField name="email" label="Email" value={this.state.email} placeholder="Enter Email" type="email" required />
                                <AvField name="password" label="Password" value={this.state.password} placeholder="Enter Password" type="password" required />

                                <Row className="form-group m-t-20">
                                    <Col md="12" className="text-right">
                                        {this.props.loading ? <Button color="primary" className="w-md waves-effect waves-light">Loading ...</Button> :
                                            <Button color="primary" className="w-md waves-effect waves-light" type="submit">Register</Button>}
                                    </Col>
                                </Row>

                                <Row className="form-group m-t-10 mb-0">
                                    <Col md="12" className="m-t-20">
                                        <p className="mb-0">By registering you agree to the Veltrix <Link to="#" className="text-primary">Terms of Use</Link></p>
                                    </Col>
                                </Row>

                            </AvForm>

                        </div>
                    </Card>

                    <div className="m-t-40 text-center">
                        <p>Already have an account ? <Link to="/login" className="font-500 text-primary"> Login </Link> </p>
                        <p>© {new Date().getFullYear()} Veltrix. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {

    const { user, registrationError, loading } = state.Account;
    return { user, registrationError, loading };
}

export default connect(mapStatetoProps, { registerUser, emptyError })(Pagesregister);

