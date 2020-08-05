import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class FormElements extends Component {
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
                                <h4 className="page-title">Form Elements</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Forms</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Form Elements</BreadcrumbItem>
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

                                    <h4 className="mt-0 header-title">Textual inputs</h4>
                                    <p className="text-muted m-b-30">Here are examples of <code
                                        className="highlighter-rouge">.form-control</code> applied to each
                                            textual HTML5 <code className="highlighter-rouge">&lt;input&gt;</code> <code
                                            className="highlighter-rouge">type</code>.</p>
                                    <Form>
                                        <FormGroup row>
                                            <Label htmlFor="example-text-input" sm="2">Text</Label>
                                            <Col sm="10">
                                                <Input type="text" defaultValue="Artisanal kale" id="example-text-input" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="example-search-input" sm="2">Search</Label>
                                            <Col sm="10">
                                                <Input type="search" defaultValue="How do I shoot web" id="example-search-input" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="example-email-input" sm="2">Email</Label>
                                            <Col sm="10">
                                                <Input type="email" defaultValue="bootstrap@example.com" id="example-email-input" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="example-url-input" sm="2">URL</Label>
                                            <Col sm="10">
                                                <Input type="url" defaultValue="https://getbootstrap.com" id="example-url-input" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="example-tel-input" sm="2">Telephone</Label>
                                            <Col sm="10">
                                                <Input type="tel" defaultValue="1-(555)-555-5555" id="example-tel-input" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="example-password-input" sm="2">Password</Label>
                                            <Col sm="10">
                                                <Input type="password" defaultValue="hunter2" id="example-password-input" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="example-number-input" sm="2">Number</Label>
                                            <Col sm="10">
                                                <Input type="number" defaultValue="42" id="example-number-input" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="example-datetime-local-input" sm="2">Date and time</Label>
                                            <Col sm="10">
                                                <Input type="datetime-local" defaultValue="2011-08-19T13:45:00" id="example-datetime-local-input" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="example-date-input" sm="2">Date</Label>
                                            <Col sm="10">
                                                <Input type="date" defaultValue="2011-08-19" id="example-date-input" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="example-month-input" sm="2">Month</Label>
                                            <Col sm="10">
                                                <Input type="month" defaultValue="2011-08" id="example-month-input" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="example-week-input" sm="2">Week</Label>
                                            <Col sm="10">
                                                <Input type="week" defaultValue="2011-W33" id="example-week-input" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="example-time-input" sm="2">Time</Label>
                                            <Col sm="10">
                                                <Input type="time" defaultValue="13:45:00" id="example-time-input" />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label htmlFor="example-color-input" sm="2">Color</Label>
                                            <Col sm="10">
                                                <Input type="color" id="example-color-input" />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label sm="2">Select</Label>
                                            <Col sm="10">
                                                <select className="form-control">
                                                    <option>Select</option>
                                                    <option>Large select</option>
                                                    <option>Small select</option>
                                                </select>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm="2">Custom Select</Label>
                                            <Col sm="10">
                                                <select className="custom-select">
                                                    <option value="">Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="example-text-input-lg" sm="2">Large</Label>
                                            <Col sm="10">
                                                <Input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="example-text-input-lg" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="example-text-input-sm" sm="2">Small</Label>
                                            <Col sm="10">
                                                <Input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="example-text-input-sm" />
                                            </Col>
                                        </FormGroup>
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

export default withRouter(connect(null, { activateAuthLayout })(FormElements));