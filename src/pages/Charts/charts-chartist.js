import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

import BarChart from '../AllCharts/chartist/barchart';
import StackBarChart from '../AllCharts/chartist/stackedbarchart';
import DountChart from '../AllCharts/chartist/dountchart';
import PieChart from '../AllCharts/chartist/piechart';
import SmilAnimationsChart from '../AllCharts/chartist/smilanimations';
import LineChart from '../AllCharts/chartist/linechart';
import ChartBar from '../AllCharts/chartist/chartbar';
import LineAreaChart from '../AllCharts/chartist/lineareachart';

import 'chartist/dist/scss/chartist.scss';

class ChartChartist extends Component {
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
                                <h4 className="page-title">Chartist Chart</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Charts</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Chartist Chart</BreadcrumbItem>
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

                                    <h4 className="mt-0 header-title">Overlapping bars on mobile</h4>
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

                                    <BarChart />

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Stacked bar chart</h4>

                                    <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">5241</h5>
                                            <p className="text-muted">Activated</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">65411</h5>
                                            <p className="text-muted">Pending</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">51654</h5>
                                            <p className="text-muted">Deactivated</p>
                                        </li>
                                    </ul>
                                    <div className="stackbarchart">
                                        <StackBarChart />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Animating a Donut with Svg.animate</h4>

                                    <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">748949</h5>
                                            <p className="text-muted">Activated</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">5181</h5>
                                            <p className="text-muted">Pending</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">101025</h5>
                                            <p className="text-muted">Deactivated</p>
                                        </li>
                                    </ul>

                                    <DountChart />

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Simple pie chart</h4>

                                    <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">48484</h5>
                                            <p className="text-muted">Activated</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">48652</h5>
                                            <p className="text-muted">Pending</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">85412</h5>
                                            <p className="text-muted">Deactivated</p>
                                        </li>
                                    </ul>
                                    <div className="piechart">
                                        <PieChart />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Advanced Smil Animations</h4>

                                    <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">45410</h5>
                                            <p className="text-muted">Activated</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">4442</h5>
                                            <p className="text-muted">Pending</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">3201</h5>
                                            <p className="text-muted">Deactivated</p>
                                        </li>
                                    </ul>

                                    <SmilAnimationsChart />

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Simple line chart</h4>

                                    <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">44242</h5>
                                            <p className="text-muted">Activated</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">75221</h5>
                                            <p className="text-muted">Pending</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">65212</h5>
                                            <p className="text-muted">Deactivated</p>
                                        </li>
                                    </ul>

                                    <LineChart />

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Bar Diagram</h4>

                                    <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">5677</h5>
                                            <p className="text-muted">Activated</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">5542</h5>
                                            <p className="text-muted">Pending</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">12422</h5>
                                            <p className="text-muted">Deactivated</p>
                                        </li>
                                    </ul>

                                    <ChartBar />

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Line chart with area</h4>

                                    <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">4234</h5>
                                            <p className="text-muted">Activated</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">64521</h5>
                                            <p className="text-muted">Pending</p>
                                        </li>
                                        <li className="list-inline-item">
                                            <h5 className="mb-0">94521</h5>
                                            <p className="text-muted">Deactivated</p>
                                        </li>
                                    </ul>

                                    <LineAreaChart />

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(ChartChartist));