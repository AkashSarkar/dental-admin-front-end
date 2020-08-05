import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Emailtemplatebilling extends Component {
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
                                <h4 className="page-title">Billing Email</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Email Templates</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Billing Email</BreadcrumbItem>
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
                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                fontSize: "14px", width: "100%", backgroundColor: "#f6f6f6", margin: "0"
                            }} bgcolor="#f6f6f6">
                                <tbody>
                                    <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                        <td style={{
                                            fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                            boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0"
                                        }} valign="top"></td>
                                        <td className="container" width="600" style={{
                                            fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                            boxSizing: "border-box", fontSize: "14px", verticalAlign: "top",
                                            display: "block!important", maxWidth: "600px !important",
                                            clear: "both !important", margin: "0 auto"
                                        }} valign="top">
                                            <div className="content" style={{
                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                boxSizing: "border-box", fontSize: "14px", maxWidth: "600px",
                                                display: "block", margin: "0 auto", padding: "20px"
                                            }}>
                                                <table className="main" width="100%" cellPadding="0" cellSpacing="0"
                                                    style={{
                                                        fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                        boxSizing: "border-box", fontSize: "14px", borderRadius: "3px",
                                                        margin: "0", border: "none"
                                                    }}>
                                                    <tbody>
                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                            <td className="content-wrap aligncenter" style={{
                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top",
                                                                margin: "0", padding: "20px", border: "3px solid #1d1e3a", borderRadius: "7px", backgroundColor: "#fff"
                                                            }} align="center" valign="top">
                                                                <table width="100%" cellPadding="0" cellSpacing="0" style={{
                                                                    fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                    boxSizing: "border-box", fontSize: "14px", margin: "0"
                                                                }}>
                                                                    <tbody>
                                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                            <td className="content-block" style={{
                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                                                                fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0 0 20px"
                                                                            }} valign="top">
                                                                                <h2 className="aligncenter" style={{
                                                                                    fontFamily: "Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif",
                                                                                    boxSizing: "border-box", fontSize: "24px", color: "#000", lineHeight: "1.2em", fontWeight: "400",
                                                                                    textAlign: "center", margin: "40px 0 0"
                                                                                }} align="center">Thanks for using < b style={{ fontWeight: "600" }} > VELTRIX</b>.</h2>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                            <td className="content-block aligncenter" style={{
                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top",
                                                                                textAlign: "center", margin: "0", padding: "0 0 20px"
                                                                            }} align="center" valign="top">
                                                                                <table className="invoice" style={{
                                                                                    fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                    boxSizing: "border-box", fontSize: "14px", textAlign: "left",
                                                                                    width: "80%", margin: "40px auto"
                                                                                }}>
                                                                                    <tbody>
                                                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                                            <td style={{
                                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                                                                                fontSize: "14px", verticalAlign: "top", margin: "0", padding: "5px 0"
                                                                                            }} valign="top"><b>Company Name</b>
                                                                                                <br style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }} />Invoice #6521
                                                                                    <br style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }} />August 01 2017
                                                                                </td>
                                                                                        </tr>
                                                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                                            <td style={{
                                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box",
                                                                                                fontSize: "14px", verticalAlign: "top", margin: "0", padding: "5px 0"
                                                                                            }} valign="top">
                                                                                                <table className="invoice-items" cellPadding="0" cellSpacing="0"
                                                                                                    style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", width: "100%", margin: "0" }}>
                                                                                                    <tbody>
                                                                                                        < tr style={{
                                                                                                            fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                                            boxSizing: "border-box", fontSize: "14px", margin: "0"
                                                                                                        }}>
                                                                                                            <td style={{
                                                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top",
                                                                                                                borderTopWidth: "1px", borderTopColor: "#eee", borderTopStyle: "solid",
                                                                                                                margin: "0", padding: "5px 0"
                                                                                                            }} valign="top">BS-200 (1 Pc)
                                                                                            </td>
                                                                                                            <td className="alignright" style={{
                                                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top",
                                                                                                                textAlign: "right", borderTopWidth: "1px", borderTopColor: "#eee",
                                                                                                                borderTopStyle: "solid", margin: "0", padding: "5px 0"
                                                                                                            }} align="right" valign="top">$10.99
                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                                                            <td style={{
                                                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top",
                                                                                                                borderTopWidth: "1px", borderTopColor: "#eee", borderTopStyle: "solid",
                                                                                                                margin: "0", padding: "5px 0"
                                                                                                            }} valign="top">BS-400 (2 Pcs)
                                                                                            </td>
                                                                                                            <td className="alignright" style={{
                                                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top",
                                                                                                                textAlign: "right", borderTopWidth: "1px", borderTopColor: "#eee", borderTopStyle: "solid",
                                                                                                                margin: "0", padding: "5px 0"
                                                                                                            }} align="right" valign="top">$60.00
                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                                                            <td style={{
                                                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top",
                                                                                                                borderTopWidth: "1px", borderTopColor: "#eee", borderTopStyle: "solid",
                                                                                                                margin: "0", padding: "5px 0"
                                                                                                            }} valign="top">BS-1000 (1 Pc)
                                                                                            </td>
                                                                                                            <td className="alignright" style={{
                                                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top",
                                                                                                                textAlign: "right", borderTopWidth: "1px", borderTopColor: "#eee",
                                                                                                                borderTopStyle: "solid", margin: "0", padding: "5px 0"
                                                                                                            }} align="right" valign="top">$600.00
                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr className="total" style={{
                                                                                                            fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                                            boxSizing: "border-box", fontSize: "14px", margin: "0"
                                                                                                        }}>
                                                                                                            <td className="alignright" width="80%" style={{
                                                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top",
                                                                                                                textAlign: "right", borderTopWidth: "2px", borderTopColor: "#333", borderTopStyle: "solid",
                                                                                                                borderBottomColor: "#333", borderBottomWidth: "2px", borderBottomStyle: "solid",
                                                                                                                fontWeight: "700", margin: "0", padding: "5px 0"
                                                                                                            }} align="right" valign="top">Total
                                                                                            </td>
                                                                                                            <td className="alignright" style={{
                                                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top",
                                                                                                                textAlign: "right", borderTopWidth: "2px", borderTopColor: "#333",
                                                                                                                borderTopStyle: "solid", borderBottomColor: "#333", borderBottomWidth: "2px",
                                                                                                                borderBottomStyle: "solid", fontWeight: "700", margin: "0", padding: "5px 0"
                                                                                                            }} align="right" valign="top">$670.99
                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr >
                                                                                    </tbody>
                                                                                </table >
                                                                            </td >
                                                                        </tr >
                                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                            <td className="content-block aligncenter" style={{
                                                                                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", textAlign: "center", margin: " 0", padding: " 0 0 20px"
                                                                            }} align="center" valign="top">
                                                                                Veltrix Inc. 2896 Howell Rd, Russellville, AR, 72823
                                                                    </td>
                                                                        </tr >

                                                                        <tr style={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", boxSizing: "border-box", fontSize: "14px", margin: "0" }}>
                                                                            <td className="content-block" style={{
                                                                                textAlign: "center", fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                                                                                boxSizing: "border-box", fontSize: "14px", verticalAlign: "top", margin: "0", padding: "0"
                                                                            }} valign="top">
                                                                                © {new Date().getFullYear()} Veltrix
                                                                    </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table >
                                                            </td >
                                                        </tr >
                                                    </tbody>
                                                </table >
                                            </div >
                                        </td >
                                    </tr >
                                </tbody>
                            </table >
                        </Col >
                    </Row >


                </Container >
            </React.Fragment >
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(Emailtemplatebilling));