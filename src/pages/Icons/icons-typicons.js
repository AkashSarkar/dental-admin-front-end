import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class TypIcons extends Component {
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
                                <h4 className="page-title">Typicons</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Icons</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Typicons</BreadcrumbItem>
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
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <h4 class="mt-0 header-title">Examples</h4>
                                    <p class="text-muted m-b-30"> Use <code>&lt;i class="typcn typcn-chart-pie-outline"&gt;&lt;/i&gt;</code>.</p>

                                    <Row className="icon-demo-content">
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-chart-pie-outline"></i> typcn typcn-chart-pie-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-chart-pie"></i> typcn typcn-chart-pie
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-chevron-left-outline"></i> typcn typcn-chevron-left-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-chevron-left"></i> typcn typcn-chevron-left
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-chevron-right-outline"></i> typcn typcn-chevron-right-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-chevron-right"></i> typcn typcn-chevron-right
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-clipboard"></i> typcn typcn-clipboard
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-cloud-storage"></i> typcn typcn-cloud-storage
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-cloud-storage-outline"></i> typcn typcn-cloud-storage-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-code-outline"></i> typcn typcn-code-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-code"></i> typcn typcn-code
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-coffee"></i> typcn typcn-coffee
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-cog-outline"></i> typcn typcn-cog-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-cog"></i> typcn typcn-cog
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-compass"></i> typcn typcn-compass
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-contacts"></i> typcn typcn-contacts
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-credit-card"></i> typcn typcn-credit-card
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-css3"></i> typcn typcn-css3
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-database"></i> typcn typcn-database
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-delete-outline"></i> typcn typcn-delete-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-delete"></i> typcn typcn-delete
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-device-desktop"></i> typcn typcn-device-desktop
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-device-laptop"></i> typcn typcn-device-laptop
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-device-phone"></i> typcn typcn-device-phone
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-device-tablet"></i> typcn typcn-device-tablet
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-directions"></i> typcn typcn-directions
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-divide-outline"></i> typcn typcn-divide-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-divide"></i> typcn typcn-divide
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-document-add"></i> typcn typcn-document-add
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-document-delete"></i> typcn typcn-document-delete
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-document-text"></i> typcn typcn-document-text
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-document"></i> typcn typcn-document
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-download-outline"></i> typcn typcn-download-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-download"></i> typcn typcn-download
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-dropbox"></i> typcn typcn-dropbox
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-edit"></i> typcn typcn-edit
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-eject-outline"></i> typcn typcn-eject-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-eject"></i> typcn typcn-eject
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-equals-outline"></i> typcn typcn-equals-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-equals"></i> typcn typcn-equals
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-export-outline"></i> typcn typcn-export-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-export"></i> typcn typcn-export
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-eye-outline"></i> typcn typcn-eye-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-eye"></i> typcn typcn-eye
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-feather"></i> typcn typcn-feather
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-film"></i> typcn typcn-film
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-filter"></i> typcn typcn-filter
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-flag-outline"></i> typcn typcn-flag-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-flag"></i> typcn typcn-flag
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-flash-outline"></i> typcn typcn-flash-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-flash"></i> typcn typcn-flash
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-flow-children"></i> typcn typcn-flow-children
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-flow-merge"></i> typcn typcn-flow-merge
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-flow-parallel"></i> typcn typcn-flow-parallel
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-flow-switch"></i> typcn typcn-flow-switch
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-folder-add"></i> typcn typcn-folder-add
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-folder-delete"></i> typcn typcn-folder-delete
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-folder-open"></i> typcn typcn-folder-open
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-folder"></i> typcn typcn-folder
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-gift"></i> typcn typcn-gift
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-globe-outline"></i> typcn typcn-globe-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-globe"></i> typcn typcn-globe
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-group-outline"></i> typcn typcn-group-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-group"></i> typcn typcn-group
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-headphones"></i> typcn typcn-headphones
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-heart-full-outline"></i> typcn typcn-heart-full-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-heart-half-outline"></i> typcn typcn-heart-half-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-heart-outline"></i> typcn typcn-heart-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-heart"></i> typcn typcn-heart
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-home-outline"></i> typcn typcn-home-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-home"></i> typcn typcn-home
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-html5"></i> typcn typcn-html5
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-image-outline"></i> typcn typcn-image-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-image"></i> typcn typcn-image
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-infinity-outline"></i> typcn typcn-infinity-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-infinity"></i> typcn typcn-infinity
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-info-large-outline"></i> typcn typcn-info-large-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-info-large"></i> typcn typcn-info-large
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-info-outline"></i> typcn typcn-info-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-info"></i> typcn typcn-info
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-input-checked-outline"></i> typcn typcn-input-checked-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-input-checked"></i> typcn typcn-input-checked
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-key-outline"></i> typcn typcn-key-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-key"></i> typcn typcn-key
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-keyboard"></i> typcn typcn-keyboard
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-leaf"></i> typcn typcn-leaf
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-lightbulb"></i> typcn typcn-lightbulb
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-link-outline"></i> typcn typcn-link-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-link"></i> typcn typcn-link
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-location-arrow-outline"></i> typcn typcn-location-arrow-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-location-arrow"></i> typcn typcn-location-arrow
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-location-outline"></i> typcn typcn-location-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-location"></i> typcn typcn-location
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-lock-closed-outline"></i> typcn typcn-lock-closed-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-lock-closed"></i> typcn typcn-lock-closed
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-lock-open-outline"></i> typcn typcn-lock-open-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-lock-open"></i> typcn typcn-lock-open
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-mail"></i> typcn typcn-mail
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-map"></i> typcn typcn-map
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-eject-outline"></i> typcn typcn-media-eject-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-eject"></i> typcn typcn-media-eject
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-fast-forward-outline"></i> typcn typcn-media-fast-forward-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-fast-forward"></i> typcn typcn-media-fast-forward
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-pause-outline"></i> typcn typcn-media-pause-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-pause"></i> typcn typcn-media-pause
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-play-outline"></i> typcn typcn-media-play-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-play-reverse-outline"></i>  typcn typcn-media-play-reverse-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-play-reverse"></i> typcn typcn-media-play-reverse
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-play"></i> typcn typcn-media-play
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-record-outline"></i> typcn typcn-media-record-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-record"></i> typcn typcn-media-record
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-rewind-outline"></i> typcn typcn-media-rewind-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-rewind"></i> typcn typcn-media-rewind
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-stop-outline"></i> typcn typcn-media-stop-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-media-stop"></i> typcn typcn-media-stop
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-message-typing"></i> typcn typcn-message-typing
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-message"></i> typcn typcn-message
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-messages"></i> typcn typcn-messages
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-microphone-outline"></i> typcn typcn-microphone-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-microphone"></i> typcn typcn-microphone
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-minus-outline"></i> typcn typcn-minus-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-minus"></i> typcn typcn-minus
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-mortar-board"></i> typcn typcn-mortar-board
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-news"></i> typcn typcn-news
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-notes-outline"></i> typcn typcn-notes-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-notes"></i> typcn typcn-notes
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-pen"></i> typcn typcn-pen
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-pencil"></i> typcn typcn-pencil
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-phone-outline"></i> typcn typcn-phone-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-phone"></i> typcn typcn-phone
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-pi-outline"></i> typcn typcn-pi-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-pi"></i> typcn typcn-pi
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-pin-outline"></i> typcn typcn-pin-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-pin"></i> typcn typcn-pin
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-pipette"></i> typcn typcn-pipette
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-plane-outline"></i> typcn typcn-plane-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-plane"></i> typcn typcn-plane
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-plug"></i> typcn typcn-plug
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-plus-outline"></i> typcn typcn-plus-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-plus"></i> typcn typcn-plus
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-point-of-interest-outline"></i> typcn typcn-point-of-interest-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-point-of-interest"></i> typcn typcn-point-of-interest
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-power-outline"></i> typcn typcn-power-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-power"></i> typcn typcn-power
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-printer"></i> typcn typcn-printer
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-puzzle-outline"></i> typcn typcn-puzzle-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-puzzle"></i> typcn typcn-puzzle
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-radar-outline"></i> typcn typcn-radar-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-radar"></i> typcn typcn-radar
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-refresh-outline"></i> typcn typcn-refresh-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-refresh"></i> typcn typcn-refresh
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-rss-outline"></i> typcn typcn-rss-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-rss"></i> typcn typcn-rss
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-scissors-outline"></i> typcn typcn-scissors-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-scissors"></i> typcn typcn-scissors
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-shopping-bag"></i> typcn typcn-shopping-bag
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-shopping-cart"></i> typcn typcn-shopping-cart
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-at-circular"></i> typcn typcn-social-at-circular
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-dribbble-circular"></i> typcn typcn-social-dribbble-circular
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-dribbble"></i> typcn typcn-social-dribbble
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-facebook-circular"></i> typcn typcn-social-facebook-circular
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-facebook"></i> typcn typcn-social-facebook
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-flickr-circular"></i> typcn typcn-social-flickr-circular
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-flickr"></i> typcn typcn-social-flickr
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-github-circular"></i> typcn typcn-social-github-circular
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-github"></i> typcn typcn-social-github
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-google-plus-circular"></i> typcn typcn-social-google-plus-circular
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-google-plus"></i> typcn typcn-social-google-plus
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-instagram-circular"></i> typcn typcn-social-instagram-circular
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-instagram"></i> typcn typcn-social-instagram
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-last-fm-circular"></i> typcn typcn-social-last-fm-circular
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-last-fm"></i> typcn typcn-social-last-fm
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-linkedin-circular"></i> typcn typcn-social-linkedin-circular
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-linkedin"></i> typcn typcn-social-linkedin
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-pinterest-circular"></i> typcn typcn-social-pinterest-circular
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-pinterest"></i> typcn typcn-social-pinterest
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-skype-outline"></i> typcn typcn-social-skype-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-skype"></i> typcn typcn-social-skype
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-tumbler-circular"></i> typcn typcn-social-tumbler-circular
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-tumbler"></i> typcn typcn-social-tumbler
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-twitter-circular"></i> typcn typcn-social-twitter-circular
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-twitter"></i> typcn typcn-social-twitter
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-vimeo-circular"></i> typcn typcn-social-vimeo-circular
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-vimeo"></i> typcn typcn-social-vimeo
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-youtube-circular"></i> typcn typcn-social-youtube-circular
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-social-youtube"></i> typcn typcn-social-youtube
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-sort-alphabetically-outline"></i> typcn typcn-sort-alphabetically-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-sort-alphabetically"></i> typcn typcn-sort-alphabetically
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-sort-numerically-outline"></i> typcn typcn-sort-numerically-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-sort-numerically"></i> typcn typcn-sort-numerically
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-spanner-outline"></i> typcn typcn-spanner-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-spanner"></i> typcn typcn-spanner
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-spiral"></i> typcn typcn-spiral
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-star-full-outline"></i> typcn typcn-star-full-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-star-half-outline"></i> typcn typcn-star-half-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-star-half"></i> typcn typcn-star-half
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-star-outline"></i> typcn typcn-star-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-star"></i> typcn typcn-star
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-starburst-outline"></i> typcn typcn-starburst-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-starburst"></i> typcn typcn-starburst
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-stopwatch"></i> typcn typcn-stopwatch
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-support"></i> typcn typcn-support
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-tabs-outline"></i> typcn typcn-tabs-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-tag"></i> typcn typcn-tag
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-tags"></i> typcn typcn-tags
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-th-large-outline"></i> typcn typcn-th-large-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-th-large"></i> typcn typcn-th-large
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-th-list-outline"></i> typcn typcn-th-list-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-th-list"></i> typcn typcn-th-list
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-th-menu-outline"></i> typcn typcn-th-menu-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-th-menu"></i> typcn typcn-th-menu
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-th-small-outline"></i> typcn typcn-th-small-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-th-small"></i> typcn typcn-th-small
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-thermometer"></i> typcn typcn-thermometer
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-thumbs-down"></i> typcn typcn-thumbs-down
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-thumbs-ok"></i> typcn typcn-thumbs-ok
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-thumbs-up"></i> typcn typcn-thumbs-up
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-tick-outline"></i> typcn typcn-tick-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-tick"></i> typcn typcn-tick
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-ticket"></i> typcn typcn-ticket
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-time"></i> typcn typcn-time
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-times-outline"></i> typcn typcn-times-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-times"></i> typcn typcn-times
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-trash"></i> typcn typcn-trash
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-tree"></i> typcn typcn-tree
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-upload-outline"></i> typcn typcn-upload-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-upload"></i> typcn typcn-upload
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-user-add-outline"></i> typcn typcn-user-add-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-user-add"></i> typcn typcn-user-add
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-user-delete-outline"></i> typcn typcn-user-delete-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-user-delete"></i> typcn typcn-user-delete
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-user-outline"></i> typcn typcn-user-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-user"></i> typcn typcn-user
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-vendor-android"></i> typcn typcn-vendor-android
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-vendor-apple"></i> typcn typcn-vendor-apple
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-vendor-microsoft"></i> typcn typcn-vendor-microsoft
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-video-outline"></i> typcn typcn-video-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-video"></i> typcn typcn-video
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-volume-down"></i> typcn typcn-volume-down
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-volume-mute"></i> typcn typcn-volume-mute
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-volume-up"></i> typcn typcn-volume-up
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-volume"></i> typcn typcn-volume
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-warning-outline"></i> typcn typcn-warning-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-warning"></i> typcn typcn-warning
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-watch"></i> typcn typcn-watch
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-waves-outline"></i> typcn typcn-waves-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-waves"></i> typcn typcn-waves
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-weather-cloudy"></i> typcn typcn-weather-cloudy
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-weather-downpour"></i> typcn typcn-weather-downpour
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-weather-night"></i> typcn typcn-weather-night
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-weather-partly-sunny"></i> typcn typcn-weather-partly-sunny
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-weather-shower"></i> typcn typcn-weather-shower
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-weather-snow"></i> typcn typcn-weather-snow
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-weather-stormy"></i> typcn typcn-weather-stormy
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-weather-sunny"></i> typcn typcn-weather-sunny
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-weather-windy-cloudy"></i> typcn typcn-weather-windy-cloudy
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-weather-windy"></i> typcn typcn-weather-windy
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-wi-fi-outline"></i> typcn typcn-wi-fi-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-wi-fi"></i> typcn typcn-wi-fi
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-wine"></i> typcn typcn-wine
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-world-outline"></i> typcn typcn-world-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-world"></i> typcn typcn-world
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-zoom-in-outline"></i> typcn typcn-zoom-in-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-zoom-in"></i> typcn typcn-zoom-in
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-zoom-out-outline"></i> typcn typcn-zoom-out-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-zoom-out"></i> typcn typcn-zoom-out
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-zoom-outline"></i> typcn typcn-zoom-outline
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="typcn typcn-zoom"></i> typcn typcn-zoom
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

export default withRouter(connect(null, { activateAuthLayout })(TypIcons));