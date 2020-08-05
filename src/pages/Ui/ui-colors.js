import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class Uicolors extends Component {
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
                                <h4 className="page-title">Colors</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Colors</BreadcrumbItem>
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
                            <Card>
                                <CardBody>
                                    <div className="color-box bg-primary">
                                        #626ed4
                                        </div>
                                    <h5 className="mb-0 m-t-20 text-primary text-center font-18">Primary</h5>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="3" md="6">
                            <Card>
                                <CardBody>
                                    <div className="color-box bg-success">
                                        #02a499
                                        </div>
                                    <h5 className="mb-0 m-t-20 text-success text-center font-18">Success</h5>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="3" md="6">
                            <Card>
                                <CardBody>
                                    <div className="color-box bg-info">
                                        #38a4f8
                                        </div>
                                    <h5 className="mb-0 m-t-20 text-info text-center font-18">Info</h5>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="3" md="6">
                            <Card>
                                <CardBody>
                                    <div className="color-box bg-warning">
                                        #f8b425
                                        </div>
                                    <h5 className="mb-0 m-t-20 text-warning text-center font-18">Warning</h5>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="3" md="6">
                            <Card>
                                <CardBody>
                                    <div className="color-box bg-danger">
                                        #ec4561
                                        </div>
                                    <h5 className="mb-0 m-t-20 text-danger text-center font-18">Danger</h5>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="3" md="6">
                            <Card>
                                <CardBody>
                                    <div className="color-box bg-dark">
                                        #343a40
                                        </div>
                                    <h5 className="mb-0 m-t-20 text-dark text-center font-18">Dark</h5>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="3" md="6">
                            <Card>
                                <CardBody>
                                    <div className="color-box bg-muted">
                                        #9ca8b3
                                        </div>
                                    <h5 className="mb-0 m-t-20 text-muted text-center font-18">Muted</h5>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(Uicolors));