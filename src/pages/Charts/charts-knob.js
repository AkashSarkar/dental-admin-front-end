import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import Knob from '../AllCharts/knob/knob';

class ChartKnob extends Component {
    state = {
        value: 50, value_cur: 12, value_prev: 62, angle: 85, steps: 45,
        angleArc: 70, ang_offset_arc: 52, readonly: 85
    };

    handleChange = (newValue) => {
        this.setState({ value: newValue });
    };
    handleChangecursor = (newValue) => {
        this.setState({ value_cur: newValue });
    };
    handleChangeprev = (newValue) => {
        this.setState({ value_prev: newValue });
    };

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
                                <h4 className="page-title">Knob Chart</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Charts</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Knob Chart</BreadcrumbItem>
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

                                    <h4 className="mt-0 header-title">Examples</h4>
                                    <p className="text-muted m-b-30">Nice, downward compatible, touchable, jQuery dial</p>

                                    <Row className="text-center mb-5">
                                        <Col lg="4" className="text-center">
                                            <h5 className="font-16 m-b-20">Disable display input</h5>
                                            <Knob
                                                value={this.state.value}
                                                height={150}
                                                width={150}
                                                fgColor="#3c4ccf"
                                                displayCustom="false"
                                                onChange={this.handleChange}
                                            />
                                        </Col>
                                        <Col lg="4" className="text-center">
                                            <h5 className="font-16 m-b-20">Cursor mode</h5>
                                            <Knob
                                                value={this.state.value_cur}
                                                height={150}
                                                width={150}
                                                fgColor="#02a499"
                                                cursor={true}
                                                displayCustom="false"
                                                onChange={this.handleChangecursor}
                                            />
                                        </Col>
                                        <Col lg="4" className="text-center">
                                            <h5 className="font-16 m-b-20">Display previous value</h5>
                                            <Knob
                                                value={this.state.value_prev}
                                                height={150}
                                                width={150}
                                                fgColor="#ffbb44"
                                                onChange={this.handleChangeprev}
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg="4" className="text-center mb-5">
                                            <h5 className="font-16 m-b-20">Angle offset</h5>
                                            <Knob
                                                value={this.state.angle}
                                                fgColor="#ec4561"
                                                lineCap="round"
                                                height={150}
                                                width={150}
                                                onChange={(e) => { this.setState({ angle: e }); }}
                                            />
                                        </Col>
                                        <Col lg="4" className="text-center">
                                            <h5 className="font-16 m-b-20"> 5-digit values, step 1000</h5>
                                            <Knob
                                                value={this.state.steps}
                                                fgColor="#2a3142"
                                                step="10"
                                                height={150}
                                                width={150}
                                                onChange={(e) => { this.setState({ steps: e }); }}
                                            />
                                        </Col>
                                        <Col lg="4" className="text-center">
                                            <h5 className="font-16 m-b-20">Angle offset and arc</h5>
                                            <Knob
                                                value={this.state.angleArc}
                                                fgColor="#f06292"
                                                angleArc="360"
                                                angleOffset="5"
                                                cursor={true}
                                                height={150}
                                                width={150}
                                                onChange={(e) => { this.setState({ angleArc: e }); }}
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg="4" className="text-center mb-5">
                                            <h5 className="font-16 m-b-20">Readonly</h5>
                                            <Knob
                                                value={this.state.readonly}
                                                fgColor="#38a4f8"
                                                thickness="0.12"
                                                readOnly={true}
                                                height={150}
                                                width={150}
                                            />
                                        </Col>
                                        <Col lg="4" className="text-center">
                                            <h5 className="font-16 m-b-20"> Angle offset and arc</h5>
                                            <Knob
                                                value={this.state.ang_offset_arc}
                                                fgColor="#8d6e63"
                                                thickness="0.18"
                                                angleArc="300"
                                                angleOffset="5"
                                                cursor={true}
                                                height={150}
                                                width={150}
                                                onChange={(e) => { this.setState({ ang_offset_arc: e }); }}
                                            />
                                        </Col>
                                    </Row>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(ChartKnob));