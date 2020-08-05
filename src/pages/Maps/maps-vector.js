import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import Vector from './Vectormap';
import { connect } from 'react-redux';
import SettingMenu from '../Subpages/Settingmenu';


class VectorMap extends Component {
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
                                <h4 className="page-title">Vector Map</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Maps</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Vector Map</BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                            <Col sm="6">
                                <div className="float-right d-none d-md-block">
                                    <SettingMenu />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">World Map</h4>
                                    <p className="text-muted m-b-30">Example of vector map.</p>
                                    <div id="world-map-markers" class="vector-map-height">
                                        <Vector value="world_mill" width="500" color="rgb(98, 110, 212)" />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">USA Map</h4>
                                    <p className="text-muted m-b-30">Example of vector map.</p>
                                    <div id="usa" class="vector-map-height">
                                        <Vector value="us_aea" width="500" color="rgb(98, 110, 212)" />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Canada Map</h4>
                                    <p className="text-muted m-b-30">Example of vector map.</p>
                                    <div id="uk" class="vector-map-height">
                                        <Vector value="ca_lcc" width="500" color="rgb(98, 110, 212)" />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Asia Vector Map</h4>
                                    <p className="text-muted m-b-30">Example of vector map.</p>
                                    <div id="chicago" class="vector-map-height">
                                        <Vector value="asia_mill" width="500" color="rgb(98, 110, 212)" />
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

export default withRouter(connect(null, { activateAuthLayout })(VectorMap));