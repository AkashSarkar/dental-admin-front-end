import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

import LineChart from '../AllCharts/echart/linechart';
import LineBarChart from '../AllCharts/echart/linebarchart';
import DoughnutChart from '../AllCharts/echart/doughnutchart';
import PieChart from '../AllCharts/echart/piechart';
import ScatterChart from '../AllCharts/echart/scatterchart';
import BubbleChart from '../AllCharts/echart/bubblechart';
import CandlestickChart from '../AllCharts/echart/candlestickchart';
import GaugeChart from '../AllCharts/echart/gaugechart';

class ChartEchart extends Component {
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
                                <h4 className="page-title">E - Chart</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Charts</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>E - Chart</BreadcrumbItem>
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
                                    <h4 className="mt-0 header-title mb-4">Line Chart</h4>
                                    <LineChart />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title mb-4">Mix Line-Bar</h4>
                                    <LineBarChart />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title mb-4">Doughnut Chart</h4>
                                    <DoughnutChart />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title mb-4">Pie Chart</h4>
                                    <PieChart />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title mb-4">Scatter Chart</h4>
                                    <ScatterChart />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title mb-4">Bubble Chart</h4>
                                    <BubbleChart />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title mb-4">Candlestick Chart</h4>
                                    <CandlestickChart />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title mb-4">Gauge Chart</h4>
                                    <GaugeChart />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(ChartEchart));