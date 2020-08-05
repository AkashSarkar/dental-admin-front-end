import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Form, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';
import Dropzone from 'react-dropzone';

class FormUpload extends Component {
    constructor(props) {
        super(props);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
        this.state = { selectedFiles: [] }
    }

    handleAcceptedFiles = (files) => {
        files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
        }));

        this.setState({ selectedFiles: files });
    }

    /**
    * Formats the size
    */
    formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
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
                                <h4 className="page-title">File Upload</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Forms</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Form Upload</BreadcrumbItem>
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

                                    <h4 className="mt-0 header-title">Dropzone</h4>
                                    <p className="text-muted m-b-30">Simple React hook to create a HTML5-compliant drag'n'drop zone for files.
                                        </p>

                                    <div className="m-b-30">
                                        <Form>
                                            <Dropzone onDrop={acceptedFiles => this.handleAcceptedFiles(acceptedFiles)}>
                                                {({ getRootProps, getInputProps }) => (
                                                    <div className="dropzone">
                                                        <div className="dz-message needsclick" {...getRootProps()}>
                                                            <input {...getInputProps()} />
                                                            <h3>Drop files here or click to upload.</h3>
                                                        </div>
                                                    </div>
                                                )}
                                            </Dropzone>
                                            <div className="dropzone-previews mt-3" id="file-previews">
                                                {this.state.selectedFiles.map((f, i) => {
                                                    return <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete" key={i + "-file"}>
                                                        <div className="p-2">
                                                            <Row className="align-items-center">
                                                                <Col className="col-auto">
                                                                    <img data-dz-thumbnail="" height="80" className="avatar-sm rounded bg-light" alt={f.name} src={f.preview} />
                                                                </Col>
                                                                <Col className="pl-0">
                                                                    <Link to="#" className="text-muted font-weight-bold">{f.name}</Link>
                                                                    <p className="mb-0"><strong>{f.formattedSize}</strong></p>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Card>
                                                })}
                                            </div>
                                        </Form>
                                    </div>

                                    <div className="text-center m-t-15">
                                        <Button color="primary">Send Files</Button>
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

export default withRouter(connect(null, { activateAuthLayout })(FormUpload));