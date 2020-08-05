import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import logodark from '../../images/logo-dark.png';
import { activateNonAuthLayout } from '../../store/actions';
import { connect } from 'react-redux';

class Pagesregister2 extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.activateNonAuthLayout();
    }

    render() {

        return (
            <React.Fragment>

                <div className="home-btn d-none d-sm-block">
                    <Link to="/dashboard" className="text-white"><i className="fas fa-home h2"></i></Link>
                </div>

                <div className="accountbg"></div>

                <div className="wrapper-page account-page-full">

                    <Card>
                        <CardBody>

                            <h3 className="text-center">
                                <Link to="/dashboard" className="logo"><img src={logodark} height="22" alt="logo" /></Link>
                            </h3>

                            <div className="p-3">
                                <h4 className="font-18 m-b-5 text-center">Free Register</h4>
                                <p className="text-muted text-center">Get your free Veltrix account now.</p>

                                <Form className="form-horizontal m-t-30" action="/dashboard">

                                    <FormGroup>
                                        <Label for="useremail">Email</Label>
                                        <Input type="email" id="useremail" placeholder="Enter email" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="username">Username</Label>
                                        <Input type="text" id="username" placeholder="Enter username" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="userpassword">Password</Label>
                                        <Input type="password" id="userpassword" placeholder="Enter password" />
                                    </FormGroup>

                                    <Row className="form-group m-t-20">
                                        <Col md="12" className="text-right">
                                            <Button color="primary" className="w-md waves-effect waves-light" type="submit">Register</Button>
                                        </Col>
                                    </Row>

                                    <Row className="form-group m-t-10 mb-0">
                                        <Col md="12" className="m-t-20">
                                            <p className="mb-0">By registering you agree to the Veltrix <Link to="#" className="text-primary">Terms of Use</Link></p>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </CardBody>
                    </Card>
                    
                    <div className="m-t-40 text-center">
                        <p>Already have an account ? <Link to="pages-login-2" className="font-500 text-primary"> Login </Link> </p>
                        <p>© {new Date().getFullYear()} Veltrix. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}


const mapStatetoProps = state => {
    return {};
}

export default withRouter(connect(mapStatetoProps, { activateNonAuthLayout })(Pagesregister2));