import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { activateNonAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//Images
import error from '../../images/error.png';

class Error404 extends Component {

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
                <div className="ex-pages">
                    <div className="content-center">
                        <div className="content-desc-center">
                            <Container>
                                <Card className="mo-mt-2">
                                    <CardBody>
                                        <Row className="align-items-center">
                                            <Col lg={{ size: 4, offset: 1 }}>
                                                <div className="ex-page-content">
                                                    <h1 className="text-dark">404!</h1>
                                                    <h4 className="mb-4">Sorry, page not found</h4>
                                                    <p className="mb-5">It will be as simple as Occidental in fact, it will be
                                                        Occidental to an English person</p>
                                                    <Link className="btn btn-primary mb-5 waves-effect waves-light" to="/dashboard"><i
                                                        className="mdi mdi-home"></i> Back to Dashboard</Link>
                                                </div>
                                            </Col>
                                            <Col lg={{ size: 5, offset: 1 }}>
                                                <img src={error} alt="" className="img-fluid mx-auto d-block" />
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Container>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    return {};
}
export default withRouter(connect(mapStatetoProps, { activateNonAuthLayout })(Error404));