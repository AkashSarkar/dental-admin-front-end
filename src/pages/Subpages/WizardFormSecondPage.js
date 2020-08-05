import React from 'react'
import { reduxForm } from 'redux-form'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import validate from './validate'


const WizardFormSecondPage = props => {
    const { handleSubmit, previousPage } = props
    return (
        <Form onSubmit={handleSubmit}>
            <h6 className="p-1 m-3 d-block">2. &nbsp;Company Document</h6><br />
            <FormGroup tag="fieldset" className="text-right">
                <Row>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtFirstNameShipping" lg="3">PAN Card</Label>
                            <Col lg="9">
                                <Input id="txtFirstNameShipping" name="txtFirstNameShipping" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtLastNameShipping" lg="3">VAT/TIN No.</Label>
                            <Col lg="9">
                                <Input id="txtLastNameShipping" name="txtLastNameShipping" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtCompanyShipping" lg="3">CST No.</Label>
                            <Col lg="9">
                                <Input id="txtCompanyShipping" name="txtCompanyShipping" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtEmailAddressShipping" lg="3">Service Tax No.</Label>
                            <Col lg="9">
                                <Input id="txtEmailAddressShipping" name="txtEmailAddressShipping" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtCityShipping" lg="3">Company UIN</Label>
                            <Col lg="9">
                                <Input id="txtCityShipping" name="txtCityShipping" type="text" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup row>
                            <Label for="txtStateProvinceShipping" lg="3">Declaration</Label>
                            <Col lg="9">
                                <Input id="txtStateProvinceShipping" name="txtStateProvinceShipping" type="text" />
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
})(WizardFormSecondPage)