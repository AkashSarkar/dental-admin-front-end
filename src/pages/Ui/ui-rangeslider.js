import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem, Badge } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class Uirangeslider extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            default: 5, min_max: 70, step: 25, prefix: 50, postfix: 85, custom_val: 5, handleLabel: 10, float_val: 55.5, extra: 52,
            hide: 5, labels: { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' }
        }
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {
        const formatkg = value => '$ ' + value;
        const formatdollar = value => value + ' kg';
        const extra_age = value => value + ' Age';
        return (
            <React.Fragment>
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <h4 className="page-title">Range Slider</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Range Slider</BreadcrumbItem>
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

                                    <h4 className="mt-0 header-title">React Rangeslider</h4>
                                    <p className="text-muted m-b-30">A fast & lightweight react component as a drop in replacement for HTML5 input range slider element.</p>

                                    <Row>
                                        <Col md="6">
                                            <div className="p-3">
                                                <h5 className="font-14 m-b-20 mt-0 pb-3">Default</h5>
                                                <Badge color="primary" id="left_badge">0</Badge><Badge color="primary" id="right_badge">100</Badge>
                                                <Slider value={this.state.default} orientation="horizontal" onChange={(value) => { this.setState({ default: value }) }} />
                                            </div>
                                        </Col>

                                        <Col md="6">
                                            <div className="p-3">
                                                <h5 className="font-14 m-b-20 mt-0 pb-3">Min-Max</h5>
                                                <Badge color="primary" id="left_badge">30</Badge> <Badge color="primary" id="right_badge">90</Badge>
                                                <Slider value={this.state.min_max} min={30} max={90} orientation="horizontal" onChange={(value) => { this.setState({ min_max: value }) }} />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="6">
                                            <div className="p-3">
                                                <h5 className="font-14 m-b-20 mt-0 pb-3">Prefix</h5>
                                                <Badge color="primary" id="left_badge">0</Badge> <Badge color="primary" id="right_badge">100</Badge>
                                                <Slider min={0} max={100} format={formatkg} value={this.state.prefix} onChange={(value) => { this.setState({ prefix: value }) }} />
                                            </div>
                                        </Col>

                                        <Col md="6">
                                            <div className="p-3">
                                                <h5 className="font-14 m-b-20 mt-0 pb-3">Range</h5>
                                                <Badge color="primary" id="left_badge">0</Badge> <Badge color="primary" id="right_badge">100</Badge>
                                                <Slider min={0} max={100} format={formatdollar} value={this.state.postfix} onChange={(value) => { this.setState({ postfix: value }) }} />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="6">
                                            <div className="p-3">
                                                <h5 className="font-14 m-b-20 mt-0 pb-3">Step</h5>
                                                <Badge color="primary" id="left_badge">0</Badge> <Badge color="primary" id="right_badge">100</Badge>
                                                <Slider value={this.state.step} step={10} orientation="horizontal" onChange={(value) => { this.setState({ step: value }) }} />
                                            </div>
                                        </Col>

                                        <Col md="6">
                                            <div className="p-3">
                                                <h5 className="font-14 m-b-20 mt-0 pb-3">Custom Values</h5>
                                                <Badge color="primary" id="left_badge">1</Badge> <Badge color="primary" id="right_badge">12</Badge>
                                                <Slider value={this.state.custom_val} min={1} max={12} labels={this.state.labels} orientation="horizontal" onChange={(value) => { this.setState({ custom_val: value }) }} />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="6">
                                            <div className="p-3">
                                                <h5 className="font-14 m-b-20 mt-0 pb-3">Prettify Numbers</h5>
                                                <Badge color="primary" id="left_badge">0</Badge> <Badge color="primary" id="right_badge">100</Badge>
                                                <Slider value={this.state.float_val} step={0.5} orientation="horizontal" onChange={(value) => { this.setState({ float_val: value }) }} />

                                            </div>
                                        </Col>

                                        <Col md="6">
                                            <div className="p-3">
                                                <h5 className="font-14 m-b-20 mt-0 pb-3">Extra Example</h5>
                                                <Badge color="primary" id="left_badge">0</Badge> <Badge color="primary" id="right_badge">100</Badge>
                                                <Slider min={0} max={100} format={extra_age} value={this.state.extra} onChange={(value) => { this.setState({ extra: value }) }} />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="6">
                                            <div className="p-3">
                                                <h5 className="font-14 m-b-20 mt-0 pb-3">Postfixes</h5>
                                                <Badge color="primary" id="left_badge">0</Badge> <Badge color="primary" id="right_badge">100</Badge>
                                                <Slider value={this.state.step} step={1} orientation="horizontal" onChange={(value) => { this.setState({ step: value }) }} />
                                            </div>
                                        </Col>

                                        <Col md="6">
                                            <div className="p-3">
                                                <h5 className="font-14 m-b-20 mt-0 pb-3">Hide</h5>
                                                <Badge color="primary" id="left_badge">0</Badge> <Badge color="primary" id="right_badge">100</Badge>
                                                <Slider min={0} max={100} value={this.state.hide} reverse={true} onChange={(value) => { this.setState({ hide: value }) }} />
                                            </div>
                                        </Col>
                                    </Row>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </React.Fragment >
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(Uirangeslider));