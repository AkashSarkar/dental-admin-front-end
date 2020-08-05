import React from 'react'
import { reduxForm } from 'redux-form'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import validate from './validate';

const WizardFormThirdPage = props => {
    const { handleSubmit, previousPage } = props
    return (
        <Form onSubmit={handleSubmit}>
            <h6 className="p-1 m-3 d-block">3. &nbsp;Bank Details</h6><br />
            <FormGroup tag="fieldset" className="text-right">
                <Row>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtNameCard" lg="3">Name on Card</Label>
                            <Col lg="9">
                                <Input id="txtNameCard" name="txtNameCard" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="ddlCreditCardType" lg="3">Credit Card Type</Label>
                            <Col lg="9">
                                <Input type="select" name="ddlCreditCardType" id="ddlCreditCardType">
                                    <option value="">--Please Select--</option>
                                    <option value="AE">American Express</option>
                                    <option value="VI">Visa</option>
                                    <option value="MC">MasterCard</option>
                                    <option value="DI">Discover</option>
                                </Input>
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtCreditCardNumber" lg="3">Credit Card Number</Label>
                            <Col lg="9">
                                <Input id="txtCreditCardNumber" name="txtCreditCardNumber" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtCardVerificationNumber" lg="3">Card Verification Number</Label>
                            <Col lg="9">
                                <Input id="txtCardVerificationNumber" name="txtCardVerificationNumber" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtExpirationDate" lg="3">Expiration Date</Label>
                            <Col lg="9">
                                <Input id="txtExpirationDate" name="txtExpirationDate" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
            </FormGroup>


            <div id="btn_div" className="float-right">
                <Button type="button" color="primary" onClick={previousPage}>  Previous </Button> &nbsp;&nbsp;&nbsp;
                <Button type="submit" color="primary"> Next </Button>
            </div>
        </Form>
    )
}
export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(WizardFormThirdPage)