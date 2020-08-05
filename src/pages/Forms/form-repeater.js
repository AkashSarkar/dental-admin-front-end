import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class FormRepeater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [], rows1: [],
        };
    }

    handleAddRow = () => {
        const item = {
            name: ""
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };

    handleAddRow1 = () => {
        const item1 = {
            name1: ""
        };
        this.setState({
            rows1: [...this.state.rows1, item1]
        });
    };
    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };
    handleRemoveRow1 = () => {
        this.setState({
            rows1: this.state.rows1.slice(0, -1)
        });
    };

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
                                <h4 className="page-title">Form Repeater</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Forms</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Form Repeater</BreadcrumbItem>
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
                                    <h4 className="mt-0 header-title m-b-20">Example</h4>

                                    <table style={{ width: "100%" }}>
                                        <tbody>
                                            <tr id="addr0" key="">
                                                <td>
                                                    <Form className="repeater" enctype="multipart/form-data">
                                                        <div data-repeater-list="group-a">
                                                            <Row data-repeater-item>
                                                                <Col lg="2" className="form-group">
                                                                    <Label for="name">Name</Label>
                                                                    <Input type="text" id="name" name="untyped-input" />
                                                                </Col>

                                                                <Col lg="2" className="form-group">
                                                                    <Label for="email">Email</Label>
                                                                    <Input type="email" id="email" />
                                                                </Col>

                                                                <Col lg="2" className="form-group">
                                                                    <Label for="subject">Subject</Label>
                                                                    <Input type="text" id="subject" />
                                                                </Col>

                                                                <Col lg="2" className="form-group">
                                                                    <Label for="resume">Resume</Label>
                                                                    <Input type="file" id="resume" />
                                                                </Col>

                                                                <Col lg="2" className="form-group">
                                                                    <Label for="message">Message</Label>
                                                                    <Input type="textarea" id="message" />
                                                                </Col>
                                                                <Col lg="2" className="form-group align-self-center">
                                                                    <Button onClick={this.handleRemoveRow} color="primary" className="mt-3" style={{ width: "100%" }}>  Delete </Button>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Form>
                                                </td>
                                            </tr>

                                            {this.state.rows.map((item, idx) => (
                                                <tr id="addr0" key={idx}>
                                                    <td>
                                                        <Form className="repeater" enctype="multipart/form-data">
                                                            <div data-repeater-list="group-a">
                                                                <Row data-repeater-item>
                                                                    <Col lg="2" className="form-group">
                                                                        <Label for="name">Name</Label>
                                                                        <Input type="text" id="name" name="untyped-input" />
                                                                    </Col>

                                                                    <Col lg="2" className="form-group">
                                                                        <Label for="email">Email</Label>
                                                                        <Input type="email" id="email" />
                                                                    </Col>

                                                                    <Col lg="2" className="form-group">
                                                                        <Label for="subject">Subject</Label>
                                                                        <Input type="text" id="subject" />
                                                                    </Col>

                                                                    <Col lg="2" className="form-group">
                                                                        <Label for="resume">Resume</Label>
                                                                        <Input type="file" id="resume" />
                                                                    </Col>

                                                                    <Col lg="2" className="form-group">
                                                                        <Label for="message">Message</Label>
                                                                        <Input type="textarea" id="message" />
                                                                    </Col>
                                                                    <Col lg="2" className="form-group align-self-center">
                                                                        <Button onClick={this.handleRemoveRow} color="primary" className="mt-3" style={{ width: "100%" }}>  Delete </Button>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Form>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <Button onClick={this.handleAddRow} color="success">Add  </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="12">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title m-b-20">Nested</h4>
                                    <Form className="outer-repeater">
                                        <div data-repeater-list="outer-group" className="outer">
                                            <div data-repeater-item className="outer">
                                                <div className="form-group">
                                                    <Label for="formname">Name :</Label>
                                                    <Input type="text" id="formname" placeholder="Enter your Name..." />
                                                </div>

                                                <div className="form-group">
                                                    <Label for="formemail">Email :</Label>
                                                    <Input type="email" id="formemail" placeholder="Enter your Email..." />
                                                </div>

                                                <div className="inner-repeater mb-4">
                                                    <table style={{ width: "100%" }}>
                                                        <Label>Phone no :</Label>
                                                        <tbody>
                                                            <tr id="addr0" key="">
                                                                <td>
                                                                    <Row className="mb-2">
                                                                        <Col md="10">
                                                                            <Input type="text" className="inner form-control" placeholder="Enter your phone no..." />
                                                                        </Col>
                                                                        <Col md="2">
                                                                            <Button onClick={this.handleRemoveRow1} color="primary" className="btn-block inner" style={{ width: "100%" }}>  Delete </Button>
                                                                        </Col>
                                                                    </Row>
                                                                </td>
                                                            </tr>

                                                            {this.state.rows1.map((item1, idx) => (
                                                                <tr id="addr0" key={idx}>
                                                                    <td>
                                                                        <Row className="mb-2">
                                                                            <Col md="10">
                                                                                <Input type="text" className="inner form-control" placeholder="Enter your phone no..." />
                                                                            </Col>
                                                                            <Col md="2">
                                                                                <Button onClick={this.handleRemoveRow1} color="primary" className="btn-block inner" style={{ width: "100%" }}>  Delete </Button>
                                                                            </Col>
                                                                        </Row>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <Button onClick={this.handleAddRow1} color="success" className="mt-1">Add Number</Button>
                                                </div>

                                                <FormGroup>
                                                    <Label className="d-block mb-3">Gender :</Label>
                                                    <div className="custom-control custom-radio custom-control-inline">
                                                        <Input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                                                        <Label className="custom-control-label" for="customRadioInline1">Male</Label>
                                                    </div>&nbsp;
                                                    <div className="custom-control custom-radio custom-control-inline">
                                                        <Input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                                        <Label className="custom-control-label" for="customRadioInline2">Female</Label>
                                                    </div>
                                                </FormGroup>

                                                <FormGroup>
                                                    <Label for="formmessage">Message :</Label>
                                                    <Input type="textarea" id="formmessage" className="form-control" rows="3" />
                                                </FormGroup>
                                                <Button type="submit" color="primary">Submit</Button>
                                            </div>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(FormRepeater));