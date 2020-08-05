import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import WizardFormFirstPageRoot from '../Subpages/WizardFormFirstPage';
import WizardFormSecondPageRoot from '../Subpages/WizardFormSecondPage';
import WizardFormThirdPageRoot from '../Subpages/WizardFormThirdPage';
import WizardFormFourPageRoot from '../Subpages/WizardFormFourPage';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class FormWizard extends Component {
    constructor(props) {
        super(props);
        this.nextPageRoot = this.nextPageRoot.bind(this)
        this.previousPageRoot = this.previousPageRoot.bind(this)

        this.state = {
            pageRoot: 1
        }
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    nextPageRoot() {
        this.setState({ pageRoot: this.state.pageRoot + 1 })
    }

    previousPageRoot() {
        this.setState({ pageRoot: this.state.pageRoot - 1 })
    }

    render() {
        const { onSubmitRoot } = this.props;
        const { pageRoot } = this.state;
        return (
            <React.Fragment>
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <h4 className="page-title">Form Wizard</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Forms</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Form Wizard</BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                            <Col sm="6">
                                <div className="float-right d-none d-md-block">
                                    <Settingmenu />
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <Row className="form-wizard">
                        <Col sm="12">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Form Wizard</h4>
                                    <p className="text-muted m-b-30 font-14">A powerful React wizard plugin that
                                            supports accessibility</p>

                                    {pageRoot === 1 && <WizardFormFirstPageRoot onSubmit={this.nextPageRoot} />}
                                    {pageRoot === 2 && (
                                        <WizardFormSecondPageRoot
                                            previousPage={this.previousPageRoot}
                                            onSubmit={this.nextPageRoot}
                                        />
                                    )}
                                    {pageRoot === 3 && (
                                        <WizardFormThirdPageRoot
                                            previousPage={this.previousPageRoot}
                                            onSubmit={this.nextPageRoot}
                                        />
                                    )}
                                    {pageRoot === 4 && (
                                        <WizardFormFourPageRoot
                                            previousPage={this.previousPageRoot}
                                            onSubmit={onSubmitRoot}
                                        />
                                    )}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(FormWizard));