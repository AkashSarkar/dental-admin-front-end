import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem, Alert } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class Uialerts extends Component {
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
                                <h4 className="page-title">Alerts</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Alerts</BreadcrumbItem>
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
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Examples</h4>
                                    <p className="text-muted m-b-30 ">Alerts are available for any length of
                                        text, as well as an optional dismiss button. For proper styling, use one
                                            of the for <strong>Color</strong> (e.g., <code
                                            className="highlighter-rouge">success</code>). For inline
                                            dismissal, use the alerts.</p>
                                    <div className="">
                                        <Alert color="success">
                                            <strong>Well done!</strong> You successfully read this important alert message. </Alert>
                                        <Alert color="info">
                                            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.</Alert>
                                        <Alert color="warning">
                                            <strong>Warning!</strong> Better check yourself, you're not looking too good.</Alert>
                                        <Alert color="danger mb-0">
                                            <strong>Oh snap!</strong> Change a few things up and try submitting again.</Alert>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Link color</h4>
                                    <p className="text-muted m-b-30 ">Use the <code
                                        className="highlighter-rouge">Link</code> utility className to
                                            quickly provide matching colored links within any alert.</p>
                                    <div className="">
                                        <Alert color="success">
                                            <strong>Well done!</strong> You successfully read <Link to="#" className="alert-link">this important alert message</Link>.
                                            </Alert>
                                        <Alert color="info">
                                            <strong>Heads up!</strong> This <Link to="#" className="alert-link">alert needs your attention</Link>, but it's not super important.
                                            </Alert>
                                        <Alert color="warning">
                                            <strong>Warning!</strong> Better check yourself, you're <Link to="#" className="alert-link">not looking too good</Link>.
                                            </Alert>
                                        <Alert color="danger mb-0">
                                            <strong>Oh snap!</strong> <Link to="#" className="alert-link">Change a few things up</Link> and try submitting again.
                                            </Alert>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Dismissing</h4>
                                    <p className="text-muted m-b-30 ">You can see this in action with a live demo:</p>

                                    <div className="">
                                        <Alert color="success" isOpen={this.state.alert1} toggle={() => this.setState({ alert1: false })}>
                                            <strong>Well done!</strong> You successfully read this important alert message.
                                        </Alert>
                                        <Alert color="info" isOpen={this.state.alert2} toggle={() => this.setState({ alert2: false })}>
                                            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                        </Alert>
                                        <Alert color="warning" isOpen={this.state.alert3} toggle={() => this.setState({ alert3: false })}>
                                            <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                        </Alert>
                                        <Alert color="danger" className="mb-0" isOpen={this.state.alert4} toggle={() => this.setState({ alert4: false })}>
                                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                        </Alert>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Additional content</h4>
                                    <p className="text-muted m-b-30 ">Alerts can also contain additional HTML elements like headings and paragraphs.</p>
                                    <div className="">
                                        <Alert color="success" className="mb-0">
                                            <h4 className="alert-heading font-18">Well done!</h4>
                                            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                        </Alert>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Examples</h4>
                                    <p className="text-muted m-b-30 ">Alerts are available for any length of
                                        text, as well as an optional dismiss button. For proper styling, use one
                                            of the four <strong>color</strong> (e.g., <code
                                            className="highlighter-rouge">warning</code> also we can pass class as <code>bg-success</code> ). For inline
                                            dismissal, use the alerts.</p>
                                    <div className="">
                                        <Alert color="success" className="bg-success text-white">
                                            <strong>Well done!</strong> You successfully read this important alert message.
                                        </Alert>
                                        <Alert color="info" className="bg-info text-white">
                                            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                        </Alert>
                                        <Alert color="warning" className="bg-warning text-white">
                                            <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                        </Alert>
                                        <Alert color="danger" className="bg-danger text-white mb-0">
                                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                        </Alert>
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

export default withRouter(connect(null, { activateAuthLayout })(Uialerts));