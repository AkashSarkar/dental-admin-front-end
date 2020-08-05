import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {

        return (
            <React.Fragment>
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <h4 className="page-title">Pricing</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Extra Pages</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Pricing</BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                            <Col sm="6">
                                <div className="float-right d-none d-md-block">
                                    <Settingmenu />
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col xl="3" md="6">
                            <Card className="pricing-box">
                                <CardBody>
                                    <div className="mb-4 pt-3 pb-3">
                                        <div className="pricing-icon float-left">
                                            <i className="ion ion-ios-airplane"></i>
                                        </div>
                                        <div className="text-right">
                                            <h5 className="mt-0">Starter</h5>
                                            <p className="text-muted">Sed ut neque unde</p>
                                        </div>
                                    </div>
                                    <div className="pricing-features mb-4">
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> Free Live Support</p>
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> Unlimited User</p>
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> No Time Tracking</p>
                                        <p><i className="mdi mdi-close text-primary mr-2"></i> Free Setup</p>
                                    </div>
                                    <div className="text-center pt-3 pb-3">
                                        <h2><sup><small>$</small></sup>19/<span className="font-16">Per month</span></h2>
                                    </div>
                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-primary btn-block waves-effect waves-light">Sign up
                                            Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl="3" md="6">
                            <Card className="pricing-box">
                                <CardBody>
                                    <div className="mb-4 pt-3 pb-3">
                                        <div className="pricing-icon float-left">
                                            <i className="ion ion-ios-trophy"></i>
                                        </div>
                                        <div className="text-right">
                                            <h5 className="mt-0">Professional</h5>
                                            <p className="text-muted">Sed ut neque unde</p>
                                        </div>
                                    </div>
                                    <div className="pricing-features mb-4">
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> Free Live Support</p>
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> Unlimited User</p>
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> No Time Tracking</p>
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> Free Setup</p>
                                    </div>
                                    <div className="text-center pt-3 pb-3">
                                        <h2><sup><small>$</small></sup>29/<span className="font-16">Per month</span></h2>
                                    </div>
                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-primary btn-block waves-effect waves-light">Sign up
                                            Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl="3" md="6">
                            <Card className="pricing-box">
                                <CardBody>
                                    <div className="mb-4 pt-3 pb-3">
                                        <div className="pricing-icon float-left">
                                            <i className="ion ion-ios-umbrella"></i>
                                        </div>
                                        <div className="text-right">
                                            <h5 className="mt-0">Enterprise</h5>
                                            <p className="text-muted">Sed ut neque unde</p>
                                        </div>
                                    </div>
                                    <div className="pricing-features mb-4">
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> Free Live Support</p>
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> Unlimited User</p>
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> No Time Tracking</p>
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> Free Setup</p>
                                    </div>
                                    <div className="text-center pt-3 pb-3">
                                        <h2><sup><small>$</small></sup>39/<span className="font-16">Per month</span></h2>
                                    </div>
                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-primary btn-block waves-effect waves-light">Sign up
                                            Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl="3" md="6">
                            <Card className="pricing-box">
                                <CardBody>
                                    <div className="mb-4 pt-3 pb-3">
                                        <div className="pricing-icon float-left">
                                            <i className="ion ion-ios-cube"></i>
                                        </div>
                                        <div className="text-right">
                                            <h5 className="mt-0">Unlimited</h5>
                                            <p className="text-muted">Sed ut neque unde</p>
                                        </div>
                                    </div>
                                    <div className="pricing-features mb-4">
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> Free Live Support</p>
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> Unlimited User</p>
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> No Time Tracking</p>
                                        <p><i className="mdi mdi-check text-primary mr-2"></i> Free Setup</p>
                                    </div>
                                    <div className="text-center pt-3 pb-3">
                                        <h2><sup><small>$</small></sup>49/<span className="font-16">Per month</span></h2>
                                    </div>
                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-primary btn-block waves-effect waves-light">Sign up
                                            Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </ Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(Pricing));