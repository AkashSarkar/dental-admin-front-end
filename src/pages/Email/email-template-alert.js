import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Emailtemplatealert extends Component {
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
                                <h4 className="page-title">Alert Email</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Email Templates</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Alert Email</BreadcrumbItem>
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
                            <table className="body-wrap"
                                style={{
                                    fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                    boxSizing: "border-box", fontSize: "14px", width: "100%", backgroundColor: "#f6f6f6", margin: "0"
                                }} bgcolor="#f6f6f6">
                                <tbody>
                                    <tr style={{
                                        fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                        boxSizing: "border-box", fontSize: "14px", margin: "0"
                                    }}>
                                        <td style={{
                                            fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                            fontSize: "14px", verticalAlign: "top", margin: "0"
                                        }} valign="top"></td>
                                        <td className="container" width="600" style={{
                                            fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                            boxSizing: "border-box", fontSize: "14px", verticalAlign: "top",
                                            display: "block !important", maxWidth: "600px !important", clear: "both !important",
                                            margin: "0 auto"
                                        }} valign="top">
                                            <div className="content" style={{
                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                                fontSize: "14px", maxWidth: "600px", display: "block", margin: "0 auto", padding: "20px"
                                            }}>
                                                <table className="main" width="100%" cellPadding="0" cellSpacing="0" style={{
                                                    fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                    boxSizing: "border-box", fontSize: "14px", borderRadius: "3px", backgroundColor: "#fff", margin: "0", border: "1px solid #e9e9e9"
                                                }}>
                                                    <tbody>
                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                            <td className="alert alert-warning" style={{
                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                boxSizing: "border-box", fontSize: "16px", verticalAlign: "top", color: "#fff", fontWeight: "500",
                                                                textAlign: "center", borderRadius: "3px 3px 0 0", backgroundColor: "#3c4ccf", margin: "0", padding: "20px"
                                                            }}
                                                                align="center" valign="top">
                                                                Warning: You're approaching your limit. Please upgrade.
                                                        </td>
                                                        </tr>
                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                            <td className="content-wrap" style={{
                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                                                fontSize: "14px", verticalAlign: "top", margin: "0", padding: "20px"
                                                            }} valign="top">
                                                                <table width="100%" cellPadding="0" cellSpacing="0" style={{
                                                                    fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                    boxSizing: "border-box", fontSize: "14px", margin: "0"
                                                                }}>
                                                                    <tbody>
                                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                            <td className="content-block" style={{
                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0 0 20px"
                                                                            }} valign="top">
                                                                                You have <strong style={{
                                                                                    fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                    boxSizing: "border-box", fontSize: "14px", margin: "0"
                                                                                }}><span style={{
                                                                                    backgroundColor: "#ec4561", color: "#ffffff", padding: "5px 8px",
                                                                                    fontSize: "12px", borderRadius: "4px"
                                                                                }}>1
                                                                                    free report</span></strong> remaining.
                                                                    </td>
                                                                        </tr>
                                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                            <td className="content-block" style={{
                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0 0 20px"
                                                                            }} valign="top">
                                                                                Add your credit card now to upgrade your account to a premium plan to ensure you don't miss out on any reports.
                                                                    </td>
                                                                        </tr>
                                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                            <td className="content-block" style={{
                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0 0 20px"
                                                                            }} valign="top">
                                                                                <Link to="#" className="btn-primary" style={{
                                                                                    fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                    boxSizing: "border-box", fontSize: "14px", color: "#FFF", textDecoration: "none",
                                                                                    lineHeight: "2em", fontWeight: "bold", textAlign: "center", cursor: "pointer", display: "inline-block",
                                                                                    borderRadius: "5px", textTransform: "capitalize", backgroundColor: "#02a499", margin: "0",
                                                                                    borderColor: "#02a499", borderStyle: "solid", borderWidth: "8px 16px"
                                                                                }}>Upgrade
                                                                            my account</Link>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                            <td className="content-block" style={{
                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0 0 20px"
                                                                            }} valign="top">
                                                                                Thanks for choosing <b>Veltrix</b> Admin.
                                                                    </td>
                                                                        </tr>
                                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                            <td className="content-block" style={{
                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0 0 20px"
                                                                            }} valign="top">
                                                                                <b>Veltrix</b>
                                                                                <p>Support Team</p>
                                                                            </td>
                                                                        </tr>

                                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                            <td className="content-block" style={{
                                                                                textAlign: "center", fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0"
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

export default withRouter(connect(null, { activateAuthLayout })(Emailtemplatealert));