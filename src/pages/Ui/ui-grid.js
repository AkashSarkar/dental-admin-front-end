import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem, Table } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';


class Uigrid extends Component {
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
                                <h4 className="page-title">Grid</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Grid</BreadcrumbItem>
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
                                    <h4 className="mt-0 header-title">Grid options</h4>
                                    <p className="text-muted m-b-30">See how aspects of the Bootstrap grid
                                            system work across multiple devices with a handy table.</p>

                                    <div>
                                        <Table className="mb-0" responsive bordered striped>
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-center">
                                                        Extra small<br />
                                                        <small>&lt;576px</small>
                                                    </th>
                                                    <th className="text-center">
                                                        Small<br />
                                                        <small>≥576px</small>
                                                    </th>
                                                    <th className="text-center">
                                                        Medium<br />
                                                        <small>≥768px</small>
                                                    </th>
                                                    <th className="text-center">
                                                        Large<br />
                                                        <small>≥992px</small>
                                                    </th>
                                                    <th className="text-center">
                                                        Extra large<br />
                                                        <small>≥1200px</small>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Grid behavior</th>
                                                    <td>Horizontal at all times</td>
                                                    <td colSpan="4">Collapsed to start, horizontal above breakpoints</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Max container width</th>
                                                    <td>None (auto)</td>
                                                    <td>540px</td>
                                                    <td>720px</td>
                                                    <td>960px</td>
                                                    <td>1140px</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Class prefix</th>
                                                    <td><code>.col-</code></td>
                                                    <td><code>.col-sm-</code></td>
                                                    <td><code>.col-md-</code></td>
                                                    <td><code>.col-lg-</code></td>
                                                    <td><code>.col-xl-</code></td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row"># of columns</th>
                                                    <td colSpan="5">12</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Gutter width</th>
                                                    <td colSpan="5">20px (10px on each side of a column)</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Nestable</th>
                                                    <td colSpan="5">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Offsets</th>
                                                    <td colSpan="5">Yes</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Column ordering</th>
                                                    <td colSpan="5">Yes</td>
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

export default withRouter(connect(null, { activateAuthLayout })(Uigrid));