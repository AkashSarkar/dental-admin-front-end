import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import Rating from 'react-rating';
import RatingTooltip from 'react-rating-tooltip';
import 'font-awesome/css/font-awesome.min.css';

class Uirating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltipContent: ["Rate 1", "Rate 2", "Rate 3", "Rate 4", "Rate 5"],
            tooltipContentMore: ["1", "2", "3", "4", "5", "6", "7", "8"],
            tooltipContentHalf: ["6", "7", "8", "9", "10"],
            tooltipContentMiddle: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            tooltipContentStep: ["2", "4", "6", "8", "10"],
            default: '',
            half: '',
            customize: ''
        }
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
                                <h4 className="page-title">Rating</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Rating</BreadcrumbItem>
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

                                    <Row>
                                        <Col xl="3" md="4" sm="6">
                                            <div className="p-4 text-center">
                                                <h5 className="font-16 m-b-15">Default rating</h5>
                                                <RatingTooltip
                                                    max={5}
                                                    onChange={(rate) => this.setState({ default: rate })}
                                                    ActiveComponent={<i className="mdi mdi-star text-primary" style={this.state.starStyle} />}
                                                    InActiveComponent={<i className="mdi mdi-star-outline text-muted" style={this.state.starStyle} />}
                                                />  <span>{this.state.default}</span>
                                            </div>
                                        </Col>

                                        <Col xl="3" md="4" sm="6">
                                            <div className="p-4 text-center">
                                                <h5 className="font-16 m-b-15">Disabled rating</h5>
                                                <Rating
                                                    ActiveComponent={<i className="mdi mdi-star text-primary" style={this.state.starStyle} />}
                                                    InActiveComponent={<i className="mdi mdi-star-outline text-muted" style={this.state.starStyle} />}
                                                    readonly={true}
                                                />
                                            </div>
                                        </Col>

                                        <Col xl="3" md="4" sm="6">
                                            <div className="p-4 text-center">
                                                <h5 className="font-16 m-b-15">Readonly rating with a value</h5>
                                                <Rating
                                                    ActiveComponent={<i className="mdi mdi-star text-primary" style={this.state.starStyle} />}
                                                    InActiveComponent={<i className="mdi mdi-star-outline text-muted" style={this.state.starStyle} />}
                                                    readonly={true}
                                                    initialRating={3}
                                                />
                                            </div>
                                        </Col>

                                        <Col xl="3" md="4" sm="6">
                                            <div className="p-4 text-center">
                                                <h5 className="font-16 m-b-15">Customized heart rating</h5>
                                                <RatingTooltip
                                                    max={5}
                                                    onChange={(rate) => this.setState({ customize: rate })}
                                                    ActiveComponent={<i className="mdi mdi-heart text-danger" style={this.state.starStyle} />}
                                                    InActiveComponent={<i className="mdi mdi-heart-outline text-danger" style={this.state.starStyle} />}
                                                />
                                                <span>{this.state.customize}</span>
                                            </div>
                                        </Col>

                                        <Col xl="3" md="4" sm="6">
                                            <div className="p-4 text-center">
                                                <h5 className="font-16 m-b-15">Handle events</h5>
                                                <Rating
                                                    onChange={(rate) => alert("Rating : " + rate)}
                                                    ActiveComponent={<i className="mdi mdi-star text-primary" style={this.state.starStyle} />}
                                                    InActiveComponent={<i className="mdi mdi-star-outline text-muted" style={this.state.starStyle} />}
                                                />
                                            </div>
                                        </Col>

                                        <Col xl="3" md="4" sm="6">
                                            <div className="p-4 text-center">
                                                <h5 className="font-16 m-b-15">Customize tooltips</h5>
                                                <RatingTooltip
                                                    max={5}
                                                    tooltipContent={this.state.tooltipContent}
                                                    ActiveComponent={<i className="mdi mdi-star text-primary" style={this.state.starStyle} />}
                                                    InActiveComponent={<i className="mdi mdi-star-outline text-muted" style={this.state.starStyle} />}
                                                />
                                            </div>
                                        </Col>

                                        <Col xl="3" md="4" sm="6">
                                            <div className="p-4 text-center">
                                                <h5 className="font-16 m-b-15">Default rating</h5>
                                                <RatingTooltip
                                                    max={8}
                                                    tooltipContent={this.state.tooltipContentMore}
                                                    ActiveComponent={<i className="mdi mdi-star text-primary" style={this.state.starStyle} />}
                                                    InActiveComponent={<i className="mdi mdi-star-outline text-muted" style={this.state.starStyle} />}
                                                />
                                            </div>
                                        </Col>

                                        <Col xl="3" md="4" sm="6">
                                            <div className="p-4 text-center">
                                                <h5 className="font-16 m-b-15">Set start rate to 5 [6..10]</h5>
                                                <RatingTooltip
                                                    max={5}
                                                    tooltipContent={this.state.tooltipContentHalf}
                                                    ActiveComponent={<i className="mdi mdi-star text-primary" style={this.state.starStyle} />}
                                                    InActiveComponent={<i className="mdi mdi-star-outline text-muted" style={this.state.starStyle} />}
                                                />
                                            </div>
                                        </Col>

                                        <Col xl="3" md="4" sm="6">
                                            <div className="p-4 text-center">
                                                <h5 className="font-16 m-b-15">Set start and stop rate [2..10]</h5>
                                                <RatingTooltip
                                                    max={11}
                                                    tooltipContent={this.state.tooltipContentMiddle}
                                                    ActiveComponent={<i className="mdi mdi-star text-primary" style={this.state.starStyle} />}
                                                    InActiveComponent={<i className="mdi mdi-star-outline text-muted" style={this.state.starStyle} />}
                                                />
                                            </div>
                                        </Col>

                                        <Col xl="3" md="4" sm="6">
                                            <div className="p-4 text-center">
                                                <h5 className="font-16 m-b-15">Set start and stop rate [2..10] with step 2</h5>
                                                <RatingTooltip
                                                    max={5}
                                                    tooltipContent={this.state.tooltipContentStep}
                                                    ActiveComponent={<i className="mdi mdi-star text-primary" style={this.state.starStyle} />}
                                                    InActiveComponent={<i className="mdi mdi-star-outline text-muted" style={this.state.starStyle} />}
                                                />
                                            </div>
                                        </Col>

                                        <Col xl="3" md="4" sm="6">
                                            <div className="p-4 text-center">
                                                <h5 className="font-16 m-b-15">Custom icons</h5>
                                                <Rating
                                                    stop={5}
                                                    emptySymbol="mdi mdi-battery-outline fa-2x text-muted"
                                                    fullSymbol={['mdi mdi-battery-20 fa-2x text-primary', 'mdi mdi-battery-50 fa-2x text-primary',
                                                        'mdi mdi-battery-70 fa-2x text-primary', 'mdi mdi-battery-90 fa-2x text-primary']}
                                                />
                                            </div>
                                        </Col>

                                        <Col xl="3" md="4" sm="6">
                                            <div className="p-4 text-center">
                                                <h5 className="font-16 m-b-15">Fractional rating</h5>
                                                <Rating
                                                    ActiveComponent={<i className="mdi mdi-star text-primary" style={this.state.starStyle} />}
                                                    InActiveComponent={<i className="mdi mdi-star-outline text-muted" style={this.state.starStyle} />}
                                                    fractions={6}
                                                />
                                            </div>
                                        </Col>

                                        <Col xl="3" md="4" sm="6">
                                            <div className="p-4 text-center">
                                                <h5 className="font-16 m-b-15">Custom CSS icons</h5>
                                                <Rating fractions={2} />
                                            </div>
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

export default withRouter(connect(null, { activateAuthLayout })(Uirating));