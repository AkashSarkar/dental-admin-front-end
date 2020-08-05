import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

// Image Open with popup
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// //Images
// import user1 from '../../images/users/user-1.jpg';
// import user2 from '../../images/users/user-2.jpg';
// import user3 from '../../images/users/user-3.jpg';
// import user4 from '../../images/users/user-4.jpg';
// import user5 from '../../images/users/user-5.jpg';
// import user6 from '../../images/users/user-6.jpg';

import work1 from '../../images/gallery/work-1.jpg';
import work2 from '../../images/gallery/work-2.jpg';
import work3 from '../../images/gallery/work-3.jpg';
import work5 from '../../images/gallery/work-5.jpg';
import work6 from '../../images/gallery/work-6.jpg';
import work7 from '../../images/gallery/work-7.jpg';
import work8 from '../../images/gallery/work-8.jpg';
import work9 from '../../images/gallery/work-9.jpg';
import work10 from '../../images/gallery/work-10.jpg';
import work11 from '../../images/gallery/work-11.jpg';
import work12 from '../../images/gallery/work-12.jpg';

const images = [work1, work2, work3, work5, work6, work7, work8, work9, work10, work11, work12];

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isFits: false,
            now_img : 0
           
        };
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {
        return (
            <React.Fragment>

                {this.state.isFits ?
                        <Lightbox mainSrc={images[this.state.now_img]}
                            enableZoom={false}
                            imageCaption={"Caption. Can be aligned it to any side and contain any HTML."}
                            onCloseRequest={() => this.setState({ isFits: false })}
                        /> : null}


                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <h4 className="page-title">Gallery</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Extra Pages</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Gallery</BreadcrumbItem>
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
                        <Col xl="3" md="6">
                            <Link  to="#" onClick={() => this.setState({ isFits: true, now_img : 0 })} className="gallery-popup" title="Open Imagination">
                                <div className="project-item">
                                    <div className="overlay-container">
                                        <img src={work1} alt="img" className="gallery-thumb-img" />
                                        <div className="project-item-overlay">
                                            <h4>Open Imagination</h4>
                                            <p>
                                                <img src={work1} onClick={() => this.setState({ isFits: true })} alt="user" className="thumb-sm rounded-circle" />
                                                <span className="ml-2">Curtis Marion</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>

                        <Col xl="3" md="6">
                            <Link to="#" onClick={() => this.setState({ isFits: true,now_img : 1 })} className="gallery-popup" title="Locked Steel Gate">
                                <div className="project-item">
                                    <div className="overlay-container">
                                        <img src={work2} alt="img" className="gallery-thumb-img" />
                                        <div className="project-item-overlay">
                                            <h4>Locked Steel Gate</h4>
                                            <p>
                                                <img src={work2} alt="user" className="thumb-sm rounded-circle" />
                                                <span className="ml-2">Curtis Marion</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>

                        <Col xl="3" md="6">
                            <Link to="#" onClick={() => this.setState({ isFits: true,now_img : 2 })} className="gallery-popup" title="Mac Sunglasses">
                                <div className="project-item">
                                    <div className="overlay-container">
                                        <img src={work3} alt="img" className="gallery-thumb-img" />
                                        <div className="project-item-overlay">
                                            <h4>Mac Sunglasses</h4>
                                            <p>
                                                <img src={work3} alt="user" className="thumb-sm rounded-circle" />
                                                <span className="ml-2">Curtis Marion</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>

                        <Col xl="3" md="6">
                            <Link to="#" onClick={() => this.setState({ isFits: true,now_img : 2 })} className="gallery-popup" title="Morning Dew">
                                <div className="project-item">
                                    <div className="overlay-container">
                                        <img src={work3} alt="img" className="gallery-thumb-img" />
                                        <div className="project-item-overlay">
                                            <h4>Morning Dew</h4>
                                            <p>
                                                <img src={work3} alt="user" className="thumb-sm rounded-circle" />
                                                <span className="ml-2">Curtis Marion</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>

                        <Col xl="3" md="6">
                            <Link to="#" onClick={() => this.setState({ isFits: true,now_img : 3 })} className="gallery-popup" title="Console Activity">
                                <div className="project-item">
                                    <div className="overlay-container">
                                        <img src={work5} alt="img" className="gallery-thumb-img" />
                                        <div className="project-item-overlay">
                                            <h4>Console Activity</h4>
                                            <p>
                                                <img src={work5} alt="user" className="thumb-sm rounded-circle" />
                                                <span className="ml-2">Curtis Marion</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>

                        <Col xl="3" md="6">
                            <Link to="#" onClick={() => this.setState({ isFits: true,now_img : 4 })} className="gallery-popup" title="Shake It!">
                                <div className="project-item">
                                    <div className="overlay-container">
                                        <img src={work6} alt="img" className="gallery-thumb-img" />
                                        <div className="project-item-overlay">
                                            <h4>Shake It!</h4>
                                            <p>
                                                <img src={work6} alt="user" className="thumb-sm rounded-circle" />
                                                <span className="ml-2">Curtis Marion</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>

                        <Col xl="3" md="6">
                            <Link to="#" onClick={() => this.setState({ isFits: true,now_img : 5 })} className="gallery-popup" title="Backpack Content">
                                <div className="project-item">
                                    <div className="overlay-container">
                                        <img src={work7} alt="img" className="gallery-thumb-img" />
                                        <div className="project-item-overlay">
                                            <h4>Backpack Content</h4>
                                            <p>
                                                <img src={work7} alt="user" className="thumb-sm rounded-circle" />
                                                <span className="ml-2">Curtis Marion</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>

                        <Col xl="3" md="6">
                            <Link to="#" onClick={() => this.setState({ isFits: true,now_img : 6 })} className="gallery-popup" title="Sunset Bulb Glow">
                                <div className="project-item">
                                    <div className="overlay-container">
                                        <img src={work8} alt="img" className="gallery-thumb-img" />
                                        <div className="project-item-overlay">
                                            <h4>Sunset Bulb Glow</h4>
                                            <p>
                                                <img src={work8} alt="user" className="thumb-sm rounded-circle" />
                                                <span className="ml-2">Curtis Marion</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>

                        <Col xl="3" md="6">
                            <Link to="#" onClick={() => this.setState({ isFits: true,now_img : 7 })} className="gallery-popup" title="Open Imagination">
                                <div className="project-item">
                                    <div className="overlay-container">
                                        <img src={work9} alt="img" className="gallery-thumb-img" />
                                        <div className="project-item-overlay">
                                            <h4>Open Imagination</h4>
                                            <p>
                                                <img src={work9} alt="user" className="thumb-sm rounded-circle" />
                                                <span className="ml-2">Curtis Marion</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>

                        <Col xl="3" md="6">
                            <Link to="#" onClick={() => this.setState({ isFits: true,now_img : 8 })} className="gallery-popup" title="Console Activity">
                                <div className="project-item">
                                    <div className="overlay-container">
                                        <img src={work10} alt="img" className="gallery-thumb-img" />
                                        <div className="project-item-overlay">
                                            <h4>Console Activity</h4>
                                            <p>
                                                <img src={work10} alt="user" className="thumb-sm rounded-circle" />
                                                <span className="ml-2">Curtis Marion</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>

                        <Col xl="3" md="6">
                            <Link to="#" onClick={() => this.setState({ isFits: true,now_img : 9 })} className="gallery-popup" title="Open Imagination">
                                <div className="project-item">
                                    <div className="overlay-container">
                                        <img src={work11} alt="img" className="gallery-thumb-img" />
                                        <div className="project-item-overlay">
                                            <h4>Open Imagination</h4>
                                            <p>
                                                <img src={work11} alt="user" className="thumb-sm rounded-circle" />
                                                <span className="ml-2">Curtis Marion</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>

                        <Col xl="3" md="6">
                            <Link to="#" onClick={() => this.setState({ isFits: true,now_img : 10 })} className="gallery-popup" title="Shake It!">
                                <div className="project-item">
                                    <div className="overlay-container">
                                        <img src={work12} alt="img" className="gallery-thumb-img" />
                                        <div className="project-item-overlay">
                                            <h4>Shake It!</h4>
                                            <p>
                                                <img src={work12} alt="user" className="thumb-sm rounded-circle" />
                                                <span className="ml-2">Curtis Marion</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </ Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(Gallery));