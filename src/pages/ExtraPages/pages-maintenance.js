import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { activateNonAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//Images
import logo from '../../images/logo-dark.png';
import maintenance from '../../images/maintenance.png';

class Maintenance extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.activateNonAuthLayout();
    }


    render() {

        return (
            <React.Fragment>
                <div className="home-btn d-none d-sm-block">
                    <Link to="/dashboard" className="text-dark"><i className="fas fa-home h2"></i></Link>
                </div>

                <section className="mt-5 mb-5">
                    <Container className="container-alt">
                        <Row>
                            <Col className="text-center">
                                <div className="home-wrapper m-t-40">
                                    <div className="mb-4">
                                        <img src={logo} alt="logo" height="30" />
                                    </div>

                                    <div className="maintenance-img">
                                        <img src={maintenance} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <h3 className="m-t-30">Site is Under Maintenance</h3>
                                    <p>Please check back in sometime.</p>

                                    <Row>
                                        <Col md="4" className="text-center">
                                            <Card className="mt-4 maintenance-box">
                                                <CardBody>
                                                    <i className="mdi mdi-airplane-takeoff m-b-15"></i>
                                                    <h6 className="text-uppercase">Why is the Site Down?</h6>
                                                    <p className="text-muted m-t-20">There are many variations of passages of
                                                Lorem Ipsum available, but the majority have suffered alteration.</p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col md="4" className="text-center">
                                            <Card className="mt-4 maintenance-box">
                                                <CardBody>
                                                    <i className="mdi mdi-clock-alert m-b-15"></i>
                                                    <h6 className="text-uppercase">What is the Downtime?</h6>
                                                    <p className="text-muted m-t-20">Contrary to popular belief, Lorem Ipsum is not
                                                simply random text. It has roots in a piece of classical.</p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col md="4" className="text-center">
                                            <Card className="mt-4 maintenance-box">
                                                <CardBody>
                                                    <i className="mdi mdi-email m-b-15"></i>
                                                    <h6 className="text-uppercase">Do you need Support?</h6>
                                                    <p className="text-muted m-t-20">If you are going to use a passage of Lorem
                                                    Ipsum, you need to be sure there isn't anything embar.. <Link to="mailto:no-reply@domain.com"
                                                            className="text-decoration-underline">no-reply@domain.com</Link></p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateNonAuthLayout })(Maintenance));