import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

import LineApexChart from '../AllCharts/apex/chartapex';
import BarApexChart from '../AllCharts/apex/barchart';
import AreaChart from '../AllCharts/apex/areachart';
import DonutChart from '../AllCharts/apex/dountchart';
import StackedBarChart from '../AllCharts/apex/stackedbarchart';

class ChartApex extends Component {
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
                                <h4 className="page-title">Apex Chart</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Charts</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Apex Chart</BreadcrumbItem>
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

                                    <h4 className="mt-0 header-title">Line Chart</h4>
                                    <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">25610</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">56210</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">12485</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>

                                    <LineApexChart />

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Bar Chart</h4>
                                    <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">6,95,412</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">1,63,542</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                        </ul>

                                    <BarApexChart />

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Area Chart</h4>
                                    <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">86541</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">2541</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">102030</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>

                                    <AreaChart />

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-1 header-title">Donut Chart</h4>
                                    <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">3201</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">85120</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">65214</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
                                    <div className="m-3 p-3">
                                        <DonutChart />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col md="12">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 mb-5 header-title">Area Chart</h4>
                                    <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">86541</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">2541</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">102030</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
                                    <StackedBarChart />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(ChartApex));