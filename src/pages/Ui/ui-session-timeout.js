import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class UisessionTimeout extends Component {
    constructor(props) {
        super(props);
        this.state = { timeralert: null, timerswitch: false, seconds: 0 };
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
        }, 1000);
    }

    componentDidMount() { this.main_function(); }

    hideAlert() { window.location = '/login'; }
    confirmAlert() { this.setState({ timeralert: null }); }
    main_function() {
        setTimeout(function () {
            setTimeout(function () { this.function1() }.bind(this), 10000);
            this.function2()
        }.bind(this), 10000);
    }
    function1() {
        if (window.location.pathname === "/ui-session-timeout") { window.location = '/login'; }
        else { }
    }
    function2() {
        this.tick();
        const nextmsg = () => (
            <SweetAlert showCancel confirmBtnText="Stay Connected" cancelBtnText="Logout" confirmBtnBsStyle="success" cancelBtnBsStyle="danger"
                title="Your Session is About to Expire!" onCancel={() => this.hideAlert()} onConfirm={() => this.confirmAlert()}>
                Redirecting in 10s seconds.<br></br></SweetAlert>);
        this.setState({ timeralert: nextmsg() });
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    {this.state.timeralert}

                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <h4 className="page-title">Session Timeout</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Session Timeout</BreadcrumbItem>
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
                        <Col md="12">
                            <Card>
                                <CardBody>

                                    <h5 className="mt-0 header-title">Bootstrap-session-timeout</h5>
                                    <p className="text-muted m-b-30">Session timeout and keep-alive control
                                            with a nice Bootstrap warning dialog.</p>

                                    <div>
                                        <p>After a set amount of idle time, a Bootstrap warning dialog is shown
                                            to the user with the option to either log out, or stay connected. If
                                            "Logout" button is selected, the page is redirected to a logout URL.
                                            If "Stay Connected" is selected the dialog closes and the session is
                                            kept alive. If no option is selected after another set amount of
                                            idle time, the page is automatically redirected to a set timeout
                                                URL.</p>

                                        <p>
                                            Idle time is defined as no mouse, keyboard or touch event activity registered by the browser.
                                            </p>

                                        <p className="mb-0">
                                            As long as the user is active, the (optional) keep-alive URL keeps
                                            getting pinged and the session stays alive. If you have no need to
                                            keep the server-side session alive via the keep-alive URL, you can
                                            also use this plugin as a simple lock mechanism that redirects to
                                            your lock-session or log-out URL after a set amount of idle time.
                                            </p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(UisessionTimeout));