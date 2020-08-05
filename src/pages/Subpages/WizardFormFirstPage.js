import React from 'react';
import { reduxForm } from 'redux-form';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import validate from './validate';

const WizardFormFirstPage = props => {
    const { handleSubmit } = props
    return (
        <Form onSubmit={handleSubmit}>
            <h6 className="p-1 m-3 d-block">1. &nbsp;Seller Details</h6><br />
            <FormGroup tag="fieldset" className="text-right">
                <Row>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtFirstNameBilling" lg="3">Contact Person</Label>
                            <Col lg="9">
                                <Input id="txtFirstNameBilling" name="txtFirstNameBilling" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtLastNameBilling" lg="3">Mobile No.</Label>
                            <Col lg="9">
                                <Input id="txtLastNameBilling" name="txtLastNameBilling" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtCompanyBilling" lg="3">Landline No.</Label>
                            <Col lg="9">
                                <Input id="txtCompanyBilling" name="txtCompanyBilling" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtEmailAddressBilling" lg="3">Email Address</Label>
                            <Col lg="9">
                                <Input id="txtEmailAddressBilling" name="txtEmailAddressBilling" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtAddress1Billing" lg="3">Address 1</Label>
                            <Col lg="9">
                                <Input type="textarea" id="txtAddress1Billing" name="txtAddress1Billing" rows="4" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtAddress2Billing" lg="3">Warehouse Address</Label>
                            <Col lg="9">
                                <Input type="textarea" id="txtAddress2Billing" name="txtAddress2Billing" rows="4" />
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtCityBilling" lg="3">Company Type</Label>
                            <Col lg="9">
                                <Input id="txtCityBilling" name="txtCityBilling" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtStateProvinceBilling" lg="3">Live Market A/C</Label>
                            <Col lg="9">
                                <Input id="txtStateProvinceBilling" name="txtStateProvinceBilling" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtTelephoneBilling" lg="3">Product Category</Label>
                            <Col lg="9">
                                <Input id="txtTelephoneBilling" name="txtTelephoneBilling" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtFaxBilling" lg="3">Product Sub Category</Label>
                            <Col lg="9">
                                <Input id="txtFaxBilling" name="txtFaxBilling" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
            </FormGroup>
            <div id="btn_div" className="float-right">
                <Button type="button" disabled
                    style={{
                        cursor: "no-drop", opacity: "65 !important",
                        color: "#fff", backgroundColor: "#626ed4",
                        borderColor: "#626ed4"
                    }}>
                    Previous
                  </Button> &nbsp;&nbsp;&nbsp;
                <Button type="submit" color="primary"> Next </Button>
            </div>
        </Form>


    )
}

export default reduxForm({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(WizardFormFirstPage)