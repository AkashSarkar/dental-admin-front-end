import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
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

const images = [smimg1, smimg2, smimg3, smimg4, smimg5, smimg6, smimg7];

class Uilightbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isFits: false,
            isEffects: false,
            isGallery: false,
            isGalleryZoom: false,
            isOpen: false,
            isOpen1: false,
            modal_standard: false,
        };

        this.openModal = this.openModal.bind(this)
        this.openModal1 = this.openModal1.bind(this)
        this.tog_standard = this.tog_standard.bind(this);
    }
    componentDidMount() {
        this.props.activateAuthLayout();
    }

    tog_standard() {
        this.setState(prevState => ({
            modal_standard: !prevState.modal_standard
        }));
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    openModal1() {
        this.setState({ isOpen1: true })
    }

    render() {
        const { photoIndex } = this.state;
        return (
            <React.Fragment>
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <h4 className="page-title">Lightbox</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Lightbox</BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                            <Col sm="6">
                                <div className="float-right d-none d-md-block">
                                    <Settingmenu />
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {this.state.isFits ?
                        <Lightbox mainSrc={images[photoIndex]}
                            enableZoom={false}
                            imageCaption={"Caption. Can be aligned it to any side and contain any HTML."}
                            onCloseRequest={() => this.setState({ isFits: false })}
                        /> : null}


                    {this.state.isEffects ?
                        <Lightbox mainSrc={images[3]}
                            enableZoom={false}
                            onCloseRequest={() => this.setState({ isEffects: false })}
                        /> : null}


                    {this.state.isGallery ?
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            enableZoom={false}
                            onCloseRequest={() => this.setState({ isGallery: false })}
                            onMovePrevRequest={() => this.setState({ photoIndex: (photoIndex + images.length - 1) % images.length, })}
                            onMoveNextRequest={() => this.setState({ photoIndex: (photoIndex + 1) % images.length, })}
                            imageCaption={"Project " + parseFloat(photoIndex + 1)}
                        /> : null}

                    {this.state.isGalleryZoom ?
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isGalleryZoom: false })}
                            onMovePrevRequest={() => this.setState({ photoIndex: (photoIndex + images.length - 1) % images.length, })}
                            onMoveNextRequest={() => this.setState({ photoIndex: (photoIndex + 1) % images.length, })}
                        /> : null}


                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Single image lightbox</h4>
                                    <p className="text-muted m-b-30">Three simple popups with different scaling settings.</p>
                                    <Row>
                                        <Col md="6">
                                            <h5 className="mt-0 font-14 m-b-15">Fits (Horz/Vert)</h5>
                                            <img onClick={() => this.setState({ isFits: true })} className="img-fluid" alt="" src={smimg2} width="145" />
                                        </Col>
                                        <Col md="6">
                                            <h5 className="mt-0 font-14 m-b-15">Effects</h5>
                                            <img onClick={() => this.setState({ isEffects: true })} className="img-fluid" alt="" src={smimg3} width="75" />
                                            <p className="mt-2 mb-0 text-muted">No gaps, zoom animation, close icon in top-right corner.</p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Lightbox gallery</h4>
                                    <p className="text-muted m-b-30">In this example lazy-loading of images is enabled for the next image based on move direction. </p>
                                    <div className="popup-gallery">
                                        <div className="img-responsive float-left">
                                            <img src={smimg1} onClick={() => this.setState({ isGallery: true, photoIndex: 0 })} alt="" width="120" />
                                        </div>
                                        <div className="img-responsive float-left">
                                            <img src={smimg2} onClick={() => this.setState({ isGallery: true, photoIndex: 1 })} alt="" width="120" />
                                        </div>
                                        <div className="img-responsive float-left">
                                            <img src={smimg3} onClick={() => this.setState({ isGallery: true, photoIndex: 2 })} alt="" width="120" />
                                        </div>
                                        <div className="img-responsive float-left">
                                            <img src={smimg4} onClick={() => this.setState({ isGallery: true, photoIndex: 3 })} alt="" width="120" />
                                        </div>
                                        <div className="img-responsive float-left">
                                            <img src={smimg5} onClick={() => this.setState({ isGallery: true, photoIndex: 4 })} alt="" width="120" />
                                        </div>
                                        <div className="img-responsive float-left">
                                            <img src={smimg6} onClick={() => this.setState({ isGallery: true, photoIndex: 5 })} alt="" width="120" />
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Zoom Gallery</h4>
                                    <p className="text-muted m-b-30">Zoom effect works only with images.</p>
                                    <div className="zoom-gallery">
                                        <img src={smimg3} className="float-left" onClick={() => this.setState({ isGalleryZoom: true, photoIndex: 2 })} alt="" width="275" />
                                        <img src={smimg7} className="float-left" onClick={() => this.setState({ isGalleryZoom: true, photoIndex: 4 })} alt="" width="275" />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Popup with video or map</h4>
                                    <p className="text-muted m-b-30">In this example lazy-loading of images is enabled for the next image based on move direction. </p>
                                    <Row>
                                        <Col md="12">
                                            <Button color="secondary" className="mo-mb-2" onClick={this.openModal}>Open YouTube Video</Button>{' '}
                                            <Button color="secondary" className="mo-mb-2" onClick={this.openModal1}>Open Vimeo Video</Button>{' '}

                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='0O2aH4XLbto' onClose={() => this.setState({ isOpen: false })} />
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen1} videoId='45830194' onClose={() => this.setState({ isOpen1: false })} />

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

export default withRouter(connect(null, { activateAuthLayout })(Uilightbox));