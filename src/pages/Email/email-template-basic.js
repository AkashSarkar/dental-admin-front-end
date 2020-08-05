import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Emailtemplatebasic extends Component {
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
                                <h4 className="page-title">Basic Email</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Email Templates</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Basic Email</BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                            <Col sm="6">
                                <div className="float-right d-none d-md-block">
                                    <UncontrolledDropdown>
                                        <DropdownToggle color="primary">
                                            <i className="mdi mdi-settings mr-2"></i> Settings
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Separated link</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row className="email-template">
                        <Col md="12">
                            <table className="body-wrap" style={{
                                fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0", width: "100%",
                                backgroundColor: "#f6f6f6"
                            }} bgcolor="#f6f6f6">
                                <tbody>
                                    <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>

                                        <td style={{
                                            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0",
                                            verticalAlign: "top"
                                        }} valign="top"></td>

                                        <td className="container" width="600" style={{
                                            fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                            fontSize: "14px", display: "block !important", maxWidth: "600px !important", clear: "both !impotant", margin: "0px auto",
                                            verticalAlign: "top"
                                        }} valign="top">

                                            <div className="content" style={{
                                                fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", maxWidth: "600px",
                                                display: "block", margin: "0px auto", padding: "20px"
                                            }}>

                                                <table className="main" width="100%" cellPadding="0" cellSpacing="0" itemProp="action" itemScope itemType="http://schema.org/ConfirmAction"
                                                    style={{
                                                        fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", borderRadius: "3px",
                                                        margin: "0px", border: "none"
                                                    }}>
                                                    <tbody>
                                                        <tr style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0px" }}>

                                                            <td className="content-wrap" style={{
                                                                fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                                                fontSize: "14px", verticalAlign: "top", margin: "0px", padding: "30px", border: "3px solid #3c4ccf", borderRadius: "7px",
                                                                backgroundColor: "#fff"
                                                            }} valign="top">

                                                                <meta itemProp="name" content="Confirm Email" style={{
                                                                    fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                    boxSizing: "border-box", fontSize: "14px", margin: "0px"
                                                                }} />

                                                                <table width="100%" cellPadding="0" cellSpacing="0" style={{
                                                                    fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                    boxSizing: "border-box", fontSize: "14px", margin: "0px",
                                                                }}>
                                                                    <tbody>
                                                                        <tr style={{ fontFamily: "Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0px" }}>
                                                                            <td className="content-block" style={{
                                                                                fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0px", padding: "0 0 20px"
                                                                            }} valign="top">
                                                                                Please confirm your email address by clicking the link below.
                                                                </td>
                                                                        </tr>

                                                                        <tr style={{ fontFamily: "Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0px" }}>
                                                                            <td className="content-block" style={{
                                                                                fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                                                                fontSize: "14px", verticalAlign: "top", margin: "0px", padding: "0 0 20px"
                                                                            }} valign="top">
                                                                                We may need to send you critical information about our service and it is important that we have an accurate email address.
                                                                </td>
                                                                        </tr>

                                                                        <tr style={{ fontFamily: "Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0px" }}>
                                                                            <td className="content-block" itemProp="handler" itemScope itemType="http://schema.org/HttpActionHandler"
                                                                                style={{
                                                                                    fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px",
                                                                                    verticalAlign: "top", margin: "0px", padding: "0 0 20px"
                                                                                }} valign="top">

                                                                                <Link to="#" color="primary" itemProp="url" style={{
                                                                                    fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px",
                                                                                    color: "#FFF", textDecoration: "none", lineHeight: "2em", fontWeight: "bold", textAlign: "center",
                                                                                    cursor: "pointer", display: "inline-block", borderRadius: "5px", textTransform: "capitalize",
                                                                                    backgroundColor: "#02a499", margin: "0", borderColor: "#02a499", borderStyle: "solid",
                                                                                    borderWidth: "8px 16px"
                                                                                }} >
                                                                                    Confirm email address</Link>

                                                                            </td>
                                                                        </tr>

                                                                        <tr style={{ fontFamily: "Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0px" }}>
                                                                            <td className="content-block" style={{
                                                                                fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                                                                fontSize: "14px", verticalAlign: "top", margin: "0px", padding: "0 0 20px"
                                                                            }} valign="top">
                                                                                <b>Veltrix</b>
                                                                                <p>Support Team</p>
                                                                            </td>
                                                                        </tr>

                                                                        <tr style={{ fontFamily: "Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0px" }}>
                                                                            <td className="content-block" style={{
                                                                                fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                                                                fontSize: "14px", verticalAlign: "top", margin: "0px", padding: "0", textAlign: "center"
                                                                            }} valign="top">
                                                                                © {new Date().getFullYear()} Veltrix
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>

                                                            </td>

                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>

                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(Emailtemplatebasic));

