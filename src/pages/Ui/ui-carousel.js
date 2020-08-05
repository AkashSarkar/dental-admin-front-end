import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

// Carousel 
import Slide from './CarouselTypes/slide';
import Slidewithcontrol from './CarouselTypes/slidewithcontrol';
import Slidewithindicator from './CarouselTypes/slidewithindicator';
import Slidewithcaption from './CarouselTypes/slidewithcaption';
import Slidewithfade from './CarouselTypes/slidewithfade';

class Uicarousel extends Component {
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
                                <h4 className="page-title">Carousel</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Carousel</BreadcrumbItem>
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
                                    <h4 className="mt-0 header-title">Slides only</h4>
                                    <p className="text-muted m-b-30">Here’s a carousel with slides only.
                                            Note the presence of the <code>.d-block</code> 
                                         and <code>.img-fluid</code> on carousel images
                                            to prevent browser default image alignment.</p>
                                    <Slide />
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">With controls</h4>
                                    <p className="text-muted m-b-30">Adding in the previous and next controls:</p>
                                    <Slidewithcontrol />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">With indicators</h4>
                                    <p className="text-muted m-b-30">You can also add the indicators to the
                                            carousel, alongside the controls, too.</p>
                                    <Slidewithindicator />
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">With captions</h4>
                                    <p className="text-muted m-b-30">Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>.carousel-item</code>.</p>
                                    <Slidewithcaption />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Crossfade</h4>
                                    <p className="text-muted m-b-30">Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.</p>
                                    <Slidewithfade />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(Uicarousel));