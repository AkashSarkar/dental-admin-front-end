import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class FormMask extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {
        const ISBN1 = (props) => (
            <InputMask mask="999-99-999-9999-99-9" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        const ISBN2 = (props) => (
            <InputMask mask="999 99 999 9999 99 9" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        const ISBN3 = (props) => (
            <InputMask mask="999/99/999/9999/99/9" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        const IPV4 = (props) => (
            <InputMask mask="999.999.999.999" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        const IPV6 = (props) => (
            <InputMask mask="****:****:****:*:***:****:****:****" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} disableUnderline />}
            </InputMask>
        );

        const TAX = (props) => (
            <InputMask mask="99-9999999" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        const Phone = (props) => (
            <InputMask mask="(999) 999-9999" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        const Currency = (props) => (
            <InputMask mask="$ 999,999,999.99" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} prefix='$' type="tel" disableUnderline />}
            </InputMask>
        );

        const Date1 = (props) => (
            <InputMask mask="99/99/9999" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );

        const Date2 = (props) => (
            <InputMask mask="99-99-9999" value={props.value} className="form-control" onChange={props.onChange}>
                {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
            </InputMask>
        );
        return (
            <React.Fragment>
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">

                            <Col sm="6">
                                <h4 className="page-title">Form Masks</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Forms</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Form Masks</BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                            <Col sm="6">

                                <div className="float-right d-none d-md-block">
                                    <Settingmenu />
                                </div>

                            </Col>
                        </Row>
                    </div>

                    <Row className="form-mask">
                        <Col md="12">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">React Input Mask</h4>
                                    <p className="text-muted m-b-30 font-14">Input masks can be used to force the
                                        user to enter data conform a specific format. Unlike validation, the
                                        user can't enter any other key than the ones specified by the mask.
                                        </p>

                                    <Row>
                                        <Col md="6">
                                            <div className="p-20">
                                                <Form action="#">
                                                    <FormGroup>
                                                        <Label>ISBN 1</Label>
                                                        <ISBN1 />
                                                        <span className="font-13 text-muted">e.g "999-99-999-9999-9"</span>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>ISBN 2</Label>
                                                        <ISBN2 />
                                                        <span className="font-13 text-muted">999 99 999 9999 9</span>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>ISBN 3</Label>
                                                        <ISBN3 />
                                                        <span className="font-13 text-muted">999/99/999/9999/9</span>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>IPV4</Label>
                                                        <IPV4 />
                                                        <span className="font-13 text-muted">192.168.110.310</span>
                                                    </FormGroup>
                                                    <FormGroup className="mb-0">
                                                        <Label>IPV6</Label>
                                                        <IPV6 />
                                                        <span className="font-13 text-muted">4deg:1340:6547:2:540:h8je:ve73:98pd</span>
                                                    </FormGroup>
                                                </Form>
                                            </div>
                                        </Col>

                                        <Col md="6">
                                            <div className="p-20">
                                                <Form action="#">
                                                    <FormGroup>
                                                        <Label>Tax ID</Label>
                                                        <TAX />
                                                        <span className="font-13 text-muted">99-9999999</span>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>Phone</Label>
                                                        <Phone />
                                                        <span className="font-13 text-muted">(999) 999-9999</span>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>Currency</Label>
                                                        <Currency />
                                                        <span className="font-13 text-muted">$ 999,999,999.99</span>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>Date</Label>
                                                        <Date1 />
                                                        <span className="font-13 text-muted">dd/mm/yyyy</span>
                                                    </FormGroup>
                                                    <FormGroup className="mb-0">
                                                        <Label>Date 2</Label>
                                                        <Date2 />
                                                        <span className="font-13 text-muted">dd-mm-yyyy</span>
                                                    </FormGroup>
                                                </Form>
                                            </div>
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

export default withRouter(connect(null, { activateAuthLayout })(FormMask));