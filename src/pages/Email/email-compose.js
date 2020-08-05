import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Button, Breadcrumb, Input, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

//Images
import user2 from '../../images/users/user-2.jpg';
import user3 from '../../images/users/user-3.jpg';
import user4 from '../../images/users/user-4.jpg';
import user6 from '../../images/users/user-6.jpg';


class EmailCompose extends Component {
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
                        <div className="row align-items-center">
                            <Col sm="6">
                                <h4 className="page-title">Email Compose</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Email</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Email Compose</BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                            <Col sm="6">
                                <div className="float-right d-none d-md-block">
                                    <Settingmenu />
                                </div>
                            </Col>
                        </div>
                    </div>

                    <Row>
                        <Col md="12">
                            <Card className="email-leftbar">
                                <Link to="email-compose" className="btn btn-danger btn-rounded btn-custom btn-block waves-effect waves-light">Compose</Link>

                                <div className="mail-list m-t-20">
                                    <Link to="#" className="active">Inbox <span className="ml-1">(18)</span></Link>
                                    <Link to="#">Starred</Link>
                                    <Link to="#">Important</Link>
                                    <Link to="#">Draft</Link>
                                    <Link to="#">Sent Mail</Link>
                                    <Link to="#">Trash</Link>
                                </div>


                                <h6 className="m-t-30">Labels</h6>

                                <div className="mail-list m-t-20">
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-info float-right"></span>Theme Support</Link>
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-warning float-right"></span>Freelance</Link>
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-primary float-right"></span>Social</Link>
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-danger float-right"></span>Friends</Link>
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-success float-right"></span>Family</Link>
                                </div>

                                <h6 className="m-t-30">Chat</h6>

                                <div className="m-t-20">
                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src={user2} alt="veltrix" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">Scott Median</p>
                                            <p className="text-muted">Hello</p>
                                        </div>
                                    </Link>

                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src={user3} alt="veltrix" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">Julian Rosa</p>
                                            <p className="text-muted">What about our next..</p>
                                        </div>
                                    </Link>

                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src={user4} alt="veltrix" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">David Medina</p>
                                            <p className="text-muted">Yeah everything is fine</p>
                                        </div>
                                    </Link>

                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src={user6} alt="veltrix" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">Jay Baker</p>
                                            <p className="text-muted">Wow that's great</p>
                                        </div>
                                    </Link>

                                </div>
                            </Card>

                            <div className="email-rightbar mb-3">

                                <Card>
                                    <CardBody>

                                        <form>
                                            <div className="form-group">
                                                <Input type="email" className="form-control" placeholder="To" />
                                            </div>

                                            <div className="form-group">
                                                <Input type="text" className="form-control" placeholder="Subject" />
                                            </div>
                                            <div className="form-group">
                                                <div className="summernote">
                                                    <Editor
                                                        toolbarClassName="toolbarClassName"
                                                        wrapperClassName="wrapperClassName"
                                                        editorClassName="editorClassName" />
                                                </div>
                                            </div>

                                            <div className="btn-toolbar form-group mb-0">
                                                <div className="">
                                                    <Button type="button" color="success" className="waves-effect waves-light m-r-5"><i className="far fa-save"></i></Button>
                                                    <Button type="button" color="success" className="waves-effect waves-light m-r-5"><i className="far fa-trash-alt"></i></Button>
                                                    <Button color="primary" className="waves-effect waves-light"> <span>Send</span> <i className="fab fa-telegram-plane m-l-10"></i> </Button>
                                                </div>
                                            </div>
                                        </form>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(EmailCompose));