import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

//Images
import smimg1 from '../../images/small/img-1.jpg';
import smimg2 from '../../images/small/img-2.jpg';
import smimg3 from '../../images/small/img-3.jpg';
import smimg4 from '../../images/small/img-4.jpg';
import smimg5 from '../../images/small/img-5.jpg';
import smimg6 from '../../images/small/img-6.jpg';
import smimg7 from '../../images/small/img-7.jpg';


class Uicards extends Component {
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
                                <h4 className="page-title">Cards</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Cards</BreadcrumbItem>
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
                        <Col md="6" lg="6" xl="3">
                            <Card>
                                <img className="card-img-top img-fluid" src={smimg1} alt="veltrix" />
                                <CardBody>
                                    <h4 className="card-title font-16 mt-0">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                    <Link to="#" className="btn btn-primary waves-effect waves-light">Button</Link>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md="6" lg="6" xl="3">
                            <Card>
                                <img className="card-img-top img-fluid" src={smimg2} alt="veltrix" />
                                <CardBody>
                                    <h4 className="card-title font-16 mt-0">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                </CardBody>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                </ul>
                                <CardBody>
                                    <Link to="#" className="card-link">Card link</Link>
                                    <Link to="#" className="card-link">Another link</Link>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md="6" lg="6" xl="3">
                            <Card>
                                <img className="card-img-top img-fluid" src={smimg3} alt=" veltrix" />
                                <CardBody>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md="6" lg="6" xl="3">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title font-16 mt-0">Card title</h4>
                                    <h6 className="card-subtitle font-14 text-muted">Support card subtitle</h6>
                                </CardBody>
                                <img className="img-fluid" src={smimg4} alt="veltrix" />
                                <CardBody>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
                                    <Link to="#" className="card-link">Card link</Link>
                                    <Link to="#" className="card-link">Another link</Link>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="6">
                            <div className="card card-body">
                                <h3 className="card-title font-16 mt-0">Special title treatment</h3>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="card card-body">
                                <h3 className="card-title font-16 mt-0">Special title treatment</h3>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="4">
                            <div className="card card-body">
                                <h4 className="card-title font-16 mt-0">Special title treatment</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                            content.</p>
                                <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                            </div>
                        </Col>

                        <Col lg="4">
                            <div className="card card-body text-center">
                                <h4 className="card-title font-16 mt-0">Special title treatment</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                            content.</p>
                                <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                            </div>
                        </Col>

                        <Col lg="4">
                            <div className="card card-body text-right">
                                <h4 className="card-title font-16 mt-0">Special title treatment</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                            content.</p>
                                <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="4">
                            <Card>
                                <h4 className="card-header font-16 mt-0">Featured</h4>
                                <CardBody>
                                    <h4 className="card-title font-16 mt-0">Special title treatment</h4>
                                    <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
                                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="4">
                            <Card>
                                <CardHeader>
                                    Quote
                                    </CardHeader>
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
                                        <footer className="blockquote-footer font-12">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="4">
                            <Card>
                                <CardHeader>
                                    Featured
                                    </CardHeader>
                                <CardBody>
                                    <h4 className="card-title font-16 mt-0">Special title treatment</h4>
                                    <p className="card-text">With supporting text below as a natural lead-in to
                                            additional content.</p>
                                    <Link to="#" className="btn btn-primary waves-effect waves-light">Go somewhere</Link>
                                </CardBody>
                                <div className="card-footer text-muted">
                                    2 days ago
                                    </div>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="4">
                            <Card>
                                <img className="card-img-top img-fluid" src={smimg5} alt="veltrix" />
                                <CardBody>
                                    <h4 className="card-title font-16 mt-0">Card title</h4>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="4">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title font-16 mt-0">Card title</h4>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </CardBody>
                                <img className="card-img-bottom img-fluid" src={smimg7} alt="veltrix" />
                            </Card>
                        </Col>

                        <Col lg="4">
                            <Card>
                                <img className="card-img img-fluid" src={smimg6} alt="veltrix" />
                                <div className="card-img-overlay">
                                    <h4 className="card-title text-white font-16 mt-0">Card title</h4>
                                    <p className="card-text text-light">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                    <p className="card-text">
                                        <small className="text-white">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="4">
                            <div className="card text-white bg-dark">
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.</p>
                                        <footer className="blockquote-footer text-white font-12"> 
                                             Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </div>
                        </Col>

                        <Col lg="4">
                            <div className="card text-white bg-primary">
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.</p>
                                        <footer className="blockquote-footer text-white font-12"> 
                                             Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </div>
                        </Col>

                        <Col lg="4">
                            <div className="card text-white bg-success">
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.</p>
                                        <footer className="blockquote-footer text-white font-12"> 
                                             Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="4">
                            <div className="card text-white bg-info">
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
                                        <footer className="blockquote-footer text-white font-12"> 
                                             Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </div>
                        </Col>

                        <Col lg="4">
                            <div className="card text-white bg-warning">
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
                                        <footer className="blockquote-footer text-white font-12"> 
                                             Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </div>
                        </Col>

                        <Col lg="4">
                            <div className="card text-white bg-danger">
                                <CardBody>
                                    <blockquote className="card-blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                erat a ante.</p>
                                        <footer className="blockquote-footer text-white font-12">  
                                             Someone famous in <cite title="Source Title">Source Title</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </div>
                        </Col>
                    </Row>

                    <Row className="m-b-30">
                        <Col md="12">
                            <h4 className="m-t-20 m-b-30">Decks</h4>
                            <div className="card-deck-wrapper">
                                <div className="card-deck">
                                    <Card>
                                        <img className="card-img-top img-fluid" src={smimg4} alt="veltrix" />
                                        <CardBody>
                                            <h4 className="card-title font-16 mt-0">Card title</h4>
                                            <p className="card-text">This is a longer card with supporting text below as
                                                a natural lead-in to additional content. This content is a little
                                                    bit longer.</p>
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <img className="card-img-top img-fluid" src={smimg5} alt="veltrix" />
                                        <CardBody>
                                            <h4 className="card-title font-16 mt-0">Card title</h4>
                                            <p className="card-text">This card has supporting text below as a natural
                                                    lead-in to additional content.</p>
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <img className="card-img-top img-fluid" src={smimg6} alt="veltrix" />
                                        <CardBody>
                                            <h4 className="card-title font-16 mt-0">Card title</h4>
                                            <p className="card-text">This is a wider card with supporting text below as
                                                a natural lead-in to additional content. This card has even longer
                                                    content than the first to show that equal height action.</p>
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(Uicards));