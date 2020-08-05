import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

//Images
import smimg2 from '../../images/small/img-2.jpg';
import smimg3 from '../../images/small/img-3.jpg';
import smimg4 from '../../images/small/img-4.jpg';
import user1 from '../../images/users/user-1.jpg';
import user2 from '../../images/users/user-2.jpg';
import user3 from '../../images/users/user-3.jpg';
import user4 from '../../images/users/user-4.jpg';
import user5 from '../../images/users/user-5.jpg';
import user6 from '../../images/users/user-6.jpg';

class Uiimages extends Component {
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
                                <h4 className="page-title">Images</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Images</BreadcrumbItem>
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
                                    <h4 className="mt-0 header-title">Image thumbnails</h4>
                                    <p className="text-muted m-b-30">In addition to our border-radius utilities, you can use 
                                            <code className="highlighter-rouge">.img-thumbnail</code> to give an image a
                                            rounded 1px border appearance.</p>
                                    <div className="">
                                        <img className="img-thumbnail" alt="200x200" width="200" src={smimg3} data-holder-rendered="true" />
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Image Rounded & Circle</h4>
                                    <p className="text-muted m-b-30">Use classNames
                                            <code>.rounded</code> and <code>.rounded-circle</code>.</p>
                                    <div className="">
                                        <img className="rounded mr-2 mo-mb-2" alt="200x200" width="200" src={smimg4} data-holder-rendered="true" />{' '}
                                        <img className="rounded-circle" alt="200x200" src={user4} data-holder-rendered="true" />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Responsive images</h4>
                                    <p className="text-muted m-b-30">Images in Bootstrap are made responsive
                                            with <code className="highlighter-rouge">.img-fluid</code>. <code
                                            className="highlighter-rouge">max-width: 100%;</code> and <code
                                                className="highlighter-rouge">height: auto;</code> are applied to
                                            the image so that it scales with the parent element.</p>
                                    <div className="">
                                        <img src={smimg2} className="img-fluid" alt="veltrix" />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col md="12">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Default media object</h4>
                                    <p className="text-muted m-b-30">The default media displays a media
                                        object (images, video, audio) to the left or right of a content
                                            block.</p>
                                    <div className="media m-b-30">
                                        <img className="d-flex mr-3 rounded-circle" src={user6} alt="veltrix" height="64" />
                                        <div className="media-body">
                                            <h5 className="mt-0 font-16">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                    <div className="media m-b-30">
                                        <img className="d-flex mr-3 rounded-circle" src={user2} alt="veltrix" height="64" />
                                        <div className="media-body">
                                            <h5 className="mt-0 font-16">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                <div className="media mt-3">
                                                <Link className="d-flex pr-3" to="#">
                                                    <img src={user3} alt="veltrix" height="64" className="rounded-circle" />
                                                </Link>
                                                <div className="media-body">
                                                    <h5 className="mt-0 font-16">Media heading</h5>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1 font-16">Media object</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        <img className="d-flex ml-3 rounded-circle" src={user4} alt="veltrix" height="64" />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col md="12">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Media alignment</h4>
                                    <p className="text-muted m-b-30">The images or other media can be
                                            aligned top, middle, or bottom. The default is top aligned.</p>
                                    <div className="media m-b-30">
                                        <img className="d-flex align-self-start rounded mr-3" src={user3} alt="veltrix" height="64" />
                                        <div className="media-body">
                                            <h5 className="mt-0 font-16">Top-aligned media</h5>
                                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                            <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        </div>
                                    </div>
                                    <div className="media m-b-30">
                                        <img className="d-flex align-self-center rounded mr-3" src={user5} alt="veltrix" height="64" />
                                        <div className="media-body">
                                            <h5 className="mt-0 font-16">Center-aligned media</h5>
                                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                            <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <img className="d-flex align-self-end rounded mr-3" src={user1} alt="veltrix" height="64" />
                                        <div className="media-body">
                                            <h5 className="mt-0 font-16">Bottom-aligned media</h5>
                                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                            <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        </div>
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

export default withRouter(connect(null, { activateAuthLayout })(Uiimages));