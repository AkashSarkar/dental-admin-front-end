import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import logodark from '../../images/logo-dark.png';
import user6 from '../../images/users/user-6.jpg';
import { activateNonAuthLayout } from '../../store/actions';
import { connect } from 'react-redux';

class Pageslockscreen2 extends Component {

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
                                <h4 className="font-18 m-b-5 text-center">Locked</h4>
                                <p className="text-muted text-center">Hello Smith, enter your password to unlock the screen!</p>

                                <Form className="form-horizontal m-t-30" action="/">

                                    <div className="user-thumb text-center m-b-30">
                                        <img src={user6} className="rounded-circle img-thumbnail" alt="thumbnail" />
                                        <h6>Robert Smith</h6>
                                    </div>

                                    <FormGroup>
                                        <Label for="userpassword">Password</Label>
                                        <Input type="password" id="userpassword" placeholder="Enter password" />
                                    </FormGroup>

                                    <Row className="form-group m-t-20">
                                        <Col md="12" className="text-right">
                                            <Button color="primary" className="w-md waves-effect waves-light" type="submit">Unlock</Button>
                                        </Col>
                                    </Row>

                                </Form>
                            </div>

                        </CardBody>
                    </Card>

                    <div className="m-t-40 text-center">
                        <p>Not you ? return <Link to="pages-login-2" className="font-500 text-primary"> Sign In </Link> </p>
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

export default withRouter(connect(mapStatetoProps, { activateNonAuthLayout })(Pageslockscreen2));