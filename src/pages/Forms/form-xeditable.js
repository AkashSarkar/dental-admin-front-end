import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Table, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import Editable from 'react-x-editable';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class FormXeditable extends Component {
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
                                <h4 className="page-title">Form Xeditable</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Forms</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Form Xeditable</BreadcrumbItem>
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

                                    <h4 className="mt-0 header-title">react-x-editable</h4>
                                    <p className="text-muted m-b-30">react-x-editable allows text in place edit or click to edit functionality.Support both inline and popup text edit mode (Form/Popover). Build in supported inputs are Text, Textarea, Select,Checklist (check box list). Supported Customizable inputs where user can create own user defined inputs easily.</p>

                                    <div>
                                        <Table responsive striped className="mb-0">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "50%" }}>Inline</th>
                                                    <th>Examples</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Simple Text Field</td>
                                                    <td>
                                                        <Editable
                                                            name="username"
                                                            dataType="text"
                                                            mode="inline"
                                                            title="Please enter username"
                                                            value="superuser"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Empty text field, required</td>
                                                    <td>
                                                        <Editable
                                                            name="username"
                                                            dataType="text"
                                                            mode="inline"
                                                            title="Please enter username"
                                                            validate={(value) => {
                                                                if (!value) {
                                                                    return 'Required';
                                                                }
                                                            }}
                                                            value="Empty"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Select, local array, custom display</td>
                                                    <td>
                                                        <Editable
                                                            name="city"
                                                            dataType="select"
                                                            mode="inline"
                                                            title="Select City"
                                                            options={[
                                                                { value: 1, text: "Mumbai" },
                                                                { value: 2, text: "Pune" },
                                                                { value: 3, text: "Nashik" }
                                                            ]}
                                                            value="Not Selected"
                                                        />
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Combodate</td>
                                                    <td>
                                                        <Editable
                                                            name="username"
                                                            dataType="date"
                                                            mode="inline"
                                                            title="Please enter username"
                                                            value="2018-05-09"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Textarea, buttons below. Submit by ctrl+enter</td>
                                                    <td>
                                                        <Editable
                                                            dataType="textarea"
                                                            mode="inline"
                                                            title="Please enter username"
                                                            value="Awesome User"
                                                        />
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </Table>
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

export default withRouter(connect(null, { activateAuthLayout })(FormXeditable));