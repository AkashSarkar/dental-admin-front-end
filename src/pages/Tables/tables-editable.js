import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem, Table } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import Editable from 'react-x-editable';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class BasicTable extends Component {
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
                                <h4 className="page-title">Editable Tables</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Tables</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Editable Tables</BreadcrumbItem>
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
                        <Col>
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title mb-4">Datatable Editable</h4>

                                    <Table responsive className="table-editable">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Age (AutoFill)</th>
                                                <th>Qty (AutoFill and Editable)</th>
                                                <th>Cost (Editable)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td data-original-value="11">11</td>
                                                <td>
                                                    <Editable
                                                        dataType="text"
                                                        mode="inline"
                                                        value="1"
                                                    />
                                                </td>
                                                <td>
                                                    <Editable
                                                        dataType="text"
                                                        mode="inline"
                                                        value="1.99"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td data-original-value="22">22</td>
                                                <td>
                                                    <Editable
                                                        dataType="text"
                                                        mode="inline"
                                                        value="2"
                                                    />
                                                </td>
                                                <td>
                                                    <Editable
                                                        dataType="text"
                                                        mode="inline"
                                                        value="2.99"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td data-original-value="33">33</td>
                                                <td>
                                                    <Editable
                                                        dataType="text"
                                                        mode="inline"
                                                        value="3"
                                                    />
                                                </td>
                                                <td>
                                                    <Editable
                                                        dataType="text"
                                                        mode="inline"
                                                        value="3.99"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td data-original-value="44">44</td>
                                                <td>
                                                    <Editable
                                                        dataType="text"
                                                        mode="inline"
                                                        value="4"
                                                    />
                                                </td>
                                                <td>
                                                    <Editable
                                                        dataType="text"
                                                        mode="inline"
                                                        value="4.99"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td data-original-value="55">55</td>
                                                <td>
                                                    <Editable
                                                        dataType="text"
                                                        mode="inline"
                                                        value="5"
                                                    />
                                                </td>
                                                <td>
                                                    <Editable
                                                        dataType="text"
                                                        mode="inline"
                                                        value="5.99"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(BasicTable));