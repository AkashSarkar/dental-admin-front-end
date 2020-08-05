import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import logodark from '../../images/logo-dark.png';
import { activateNonAuthLayout } from '../../store/actions';
import { connect } from 'react-redux';

class Pagesrecoverpw2 extends Component {

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

                            <div className="text-center">
                                <Link to="/dashboard" className="logo"><img src={logodark} height="22" alt="logo" /></Link>
                            </div>

                            <div className="p-3">
                                <h4 className="font-18 m-b-5 text-center">Reset Password</h4>
                                <Alert color="success" className="m-t-30">
                                    Enter your Email and instructions will be sent to you!
                                </Alert>

                                <Form className="form-horizontal m-t-30" action="/dashboard">

                                    <FormGroup>
                                        <Label for="useremail">Email</Label>
                                        <Input type="email" id="useremail" placeholder="Enter email" />
                                    </FormGroup>

                                    <Row className="form-group m-t-20">
                                        <Col md="12" className="text-right">
                                            <Button color="primary" className="w-md waves-effect waves-light" type="submit">Reset</Button>
                                        </Col>
                                    </Row>

                                </Form>
                            </div>

                        </CardBody>
                    </Card>

                    <div className="m-t-40 text-center">
                        <p>Remember It ? <Link to="pages-login-2" className="font-500 text-primary"> Sign In here </Link> </p>
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

export default withRouter(connect(mapStatetoProps, { activateNonAuthLayout })(Pagesrecoverpw2));