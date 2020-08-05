import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';


class Uimodals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false, modal_standard: false, modal_large: false, modal_xlarge: false, modal_small: false,
            modal_center: false, modal_scroll: false
        };

        this.tog_standard = this.tog_standard.bind(this);
        this.tog_xlarge = this.tog_xlarge.bind(this);
        this.tog_large = this.tog_large.bind(this);
        this.tog_small = this.tog_small.bind(this);
        this.tog_center = this.tog_center.bind(this);
        this.tog_scroll = this.tog_scroll.bind(this);

    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    tog_standard() {
        this.setState(prevState => ({
            modal_standard: !prevState.modal_standard
        }));
        this.removeBodyCss();
    }
    removeBodyCss() {
        document.body.classList.add('no_padding');
    }

    tog_large() {
        this.setState(prevState => ({
            modal_large: !prevState.modal_large
        }));
        this.removeBodyCss();
    }
    tog_xlarge() {
        this.setState(prevState => ({
            modal_xlarge: !prevState.modal_xlarge
        }));
        this.removeBodyCss();
    }
    tog_small() {
        this.setState(prevState => ({
            modal_small: !prevState.modal_small
        }));
        this.removeBodyCss();
    }
    tog_center() {
        this.setState(prevState => ({
            modal_center: !prevState.modal_center
        }));
        this.removeBodyCss();
    }
    tog_scroll() {
        this.setState(prevState => ({
            modal_scroll: !prevState.modal_scroll
        }));
        this.removeBodyCss();
    }
    show() {
        this.setState({ visible: true });
    }
    hide() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <h4 className="page-title">Modals</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Modals</BreadcrumbItem>
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

                                    <h4 className="mt-0 header-title">Modals Examples</h4>
                                    <p className="text-muted m-b-30 font-14">Modals are streamlined, but flexible
                                        dialog prompts powered by JavaScript. They support a number of use cases
                                        from user notification to completely custom content and feature a
                                            handful of helpful subcomponents, sizes, and more.</p>

                                    <div className="modal bs-example-modal" tabIndex="-1" role="dialog">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title mt-0">Modal title</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <ModalBody>
                                                    <p>One fine body&hellip;</p>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button type="button" color="primary">Save changes</Button>
                                                    <Button type="button" color="secondary">Close</Button>
                                                </ModalFooter>
                                            </div>
                                        </div>
                                    </div>

                                    <Row>
                                        <Col sm="6" md="3" className="m-t-30">
                                            <div className=" text-center">
                                                <p className="text-muted">Standard Modal</p>
                                                <Button type="button" color="primary" className="waves-effect waves-light" onClick={this.tog_standard}>Standard Modal</Button>
                                            </div>
                                            <Modal isOpen={this.state.modal_standard} toggle={this.tog_standard} >
                                                <div className="modal-header">
                                                    <h5 className="modal-title mt-0" id="myModalLabel">Modal Heading</h5>
                                                    <button type="button" onClick={() => this.setState({ modal_standard: false })} className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <ModalBody>
                                                    <h5>Overflowing text to show scroll behavior</h5>
                                                    <p>Cras mattis consectetur purus sit amet fermentum.
                                                        Cras justo odio, dapibus ac facilisis in,
                                                        egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                    <p>Praesent commodo cursus magna, vel scelerisque
                                                        nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                    <p>Aenean lacinia bibendum nulla sed consectetur.
                                                        Praesent commodo cursus magna, vel scelerisque
                                                        nisl consectetur et. Donec sed odio dui. Donec
                                                        ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                    <p>Cras mattis consectetur purus sit amet fermentum.
                                                        Cras justo odio, dapibus ac facilisis in,
                                                        egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                    <p>Praesent commodo cursus magna, vel scelerisque
                                                        nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                    <p>Aenean lacinia bibendum nulla sed consectetur.
                                                        Praesent commodo cursus magna, vel scelerisque
                                                        nisl consectetur et. Donec sed odio dui. Donec
                                                        ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                    <p>Cras mattis consectetur purus sit amet fermentum.
                                                        Cras justo odio, dapibus ac facilisis in,
                                                        egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                    <p>Praesent commodo cursus magna, vel scelerisque
                                                        nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                    <p>Aenean lacinia bibendum nulla sed consectetur.
                                                        Praesent commodo cursus magna, vel scelerisque
                                                        nisl consectetur et. Donec sed odio dui. Donec
                                                        ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button type="button" color="secondary" onClick={this.tog_standard} className="waves-effect">Close</Button>
                                                    <Button type="button" color="primary" className="waves-effect waves-light">Save changes</Button>
                                                </ModalFooter>
                                            </Modal>
                                        </Col>

                                        <Col sm="6" md="3" className="m-t-30">
                                            <div className="text-center">
                                                <p className="text-muted">Large modal</p>
                                                <Button type="button" color="primary" onClick={this.tog_large} className="waves-effect waves-light">Large modal</Button>
                                            </div>
                                            <Modal className="modal-lg" isOpen={this.state.modal_large} toggle={this.tog_large} >
                                                <div className="modal-header">
                                                    <h5 className="modal-title mt-0" id="myLargeModalLabel">Large Modal</h5>
                                                    <button onClick={() => this.setState({ modal_large: false })} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <ModalBody>
                                                    <p>Cras mattis consectetur purus sit amet fermentum.
                                                        Cras justo odio, dapibus ac facilisis in,
                                                        egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                    <p>Praesent commodo cursus magna, vel scelerisque
                                                        nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                    <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                                                        Praesent commodo cursus magna, vel scelerisque
                                                        nisl consectetur et. Donec sed odio dui. Donec
                                                        ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                </ModalBody>
                                            </Modal>
                                        </Col>

                                        <Col sm="6" md="3" className="m-t-30">
                                            <div className="text-center">
                                                <p className="text-muted">Small modal</p>
                                                <Button type="button" color="primary" onClick={this.tog_small} className="waves-effect waves-light">Small modal</Button>
                                            </div>

                                            <Modal className="modal-sm" isOpen={this.state.modal_small} toggle={this.tog_small} >
                                                <div className="modal-header">
                                                    <h5 className="modal-title mt-0" id="mySmallModalLabel">Small Modal</h5>
                                                    <button onClick={() => this.setState({ modal_small: false })} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <ModalBody>
                                                    <p>Cras mattis consectetur purus sit amet fermentum.
                                                        Cras justo odio, dapibus ac facilisis in,
                                                        egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                    <p>Praesent commodo cursus magna, vel scelerisque
                                                        nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                    <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                                                        Praesent commodo cursus magna, vel scelerisque
                                                        nisl consectetur et. Donec sed odio dui. Donec
                                                        ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                </ModalBody>
                                            </Modal>
                                        </Col>

                                        <Col sm="6" md="3" className="m-t-30">
                                            <div className="text-center">
                                                <p className="text-muted">Center modal</p>
                                                <Button type="button" color="primary" onClick={this.tog_center} className="waves-effect waves-light">Center modal</Button>
                                            </div>

                                            <Modal isOpen={this.state.modal_center} toggle={this.tog_center} >
                                                <div className="modal-header">
                                                    <h5 className="modal-title mt-0">Center Modal</h5>
                                                    <button type="button" onClick={() => this.setState({ modal_center: false })} className="close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <ModalBody>
                                                    <p>Cras mattis consectetur purus sit amet fermentum.
                                                        Cras justo odio, dapibus ac facilisis in,
                                                        egestas eget quam. Morbi leo risus, porta ac
                                                            consectetur ac, vestibulum at eros.</p>
                                                    <p>Praesent commodo cursus magna, vel scelerisque
                                                        nisl consectetur et. Vivamus sagittis lacus vel
                                                            augue laoreet rutrum faucibus dolor auctor.</p>
                                                    <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
                                                        Praesent commodo cursus magna, vel scelerisque
                                                        nisl consectetur et. Donec sed odio dui. Donec
                                                        ullamcorper nulla non metus auctor
                                                            fringilla.</p>
                                                </ModalBody>
                                            </Modal>
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

export default withRouter(connect(null, { activateAuthLayout })(Uimodals));