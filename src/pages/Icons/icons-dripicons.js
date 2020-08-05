import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Dripicons extends Component {
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
                                <h4 className="page-title">Dripicons</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Icons</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Dripicons</BreadcrumbItem>
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
                                    <p class="text-muted m-b-30">Use <code>&lt;i class="dripicons-zoom-out"&gt;&lt;/i&gt;</code>.</p>

                                    <Row className="icon-demo-content">
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-alarm"></i> dripicons-alarm
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-align-center"></i> dripicons-align-center
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-align-justify"></i> dripicons-align-justify
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-align-left"></i> dripicons-align-left
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-align-right"></i> dripicons-align-right
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-anchor"></i> dripicons-anchor
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-archive"></i> dripicons-archive
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-arrow-down"></i> dripicons-arrow-down
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-arrow-left"></i> dripicons-arrow-left
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-arrow-right"></i> dripicons-arrow-right
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-arrow-thin-down"></i> dripicons-arrow-thin-down
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-arrow-thin-left"></i> dripicons-arrow-thin-left
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-arrow-thin-right"></i> dripicons-arrow-thin-right
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-arrow-thin-up"></i> dripicons-arrow-thin-up
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-arrow-up"></i> dripicons-arrow-up
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class=" dripicons-article"></i> dripicons-article
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-backspace"></i> dripicons-backspace
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-basket"></i> dripicons-basket
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-basketball"></i> dripicons-basketball
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-battery-empty"></i> dripicons-battery-empty
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-battery-full"></i> dripicons-battery-full
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-battery-low"></i> dripicons-battery-low
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-battery-medium"></i> dripicons-battery-medium
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-bell"></i> dripicons-bell
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-blog"></i> dripicons-blog
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-bluetooth"></i> dripicons-bluetooth
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-bold"></i> dripicons-bold
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-bookmark"></i> dripicons-bookmark
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-bookmarks"></i> dripicons-bookmarks
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-box"></i> dripicons-box
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-briefcase"></i> dripicons-briefcase
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-brightness-low"></i> dripicons-brightness-low
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-brightness-max"></i> dripicons-brightness-max
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-brightness-medium"></i> dripicons-brightness-medium
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-broadcast"></i> dripicons-broadcast
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-browser"></i> dripicons-browser
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-browser-upload"></i> dripicons-browser-upload
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-brush"></i> dripicons-brush
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-calendar"></i> dripicons-calendar
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-camcorder"></i> dripicons-camcorder
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-camera"></i> dripicons-camera
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-card"></i> dripicons-card
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-cart"></i> dripicons-cart
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-checklist"></i> dripicons-checklist
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-checkmark"></i> dripicons-checkmark
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-chevron-down"></i> dripicons-chevron-down
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-chevron-left"></i> dripicons-chevron-left
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-chevron-right"></i> dripicons-chevron-right
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-chevron-up"></i> dripicons-chevron-up
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-clipboard"></i> dripicons-clipboard
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-clock"></i> dripicons-clock
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-clockwise"></i> dripicons-clockwise
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-cloud"></i> dripicons-cloud
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-cloud-download"></i> dripicons-cloud-download
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-cloud-upload"></i> dripicons-cloud-upload
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-code"></i> dripicons-code
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-contract"></i> dripicons-contract
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-contract-2"></i> dripicons-contract-2
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-conversation"></i> dripicons-conversation
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-copy"></i> dripicons-copy
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-crop"></i> dripicons-crop
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-cross"></i> dripicons-cross
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-crosshair"></i> dripicons-crosshair
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-cutlery"></i> dripicons-cutlery
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-device-desktop"></i> dripicons-device-desktop
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-device-mobile"></i> dripicons-device-mobile
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-device-tablet"></i> dripicons-device-tablet
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-direction"></i> dripicons-direction
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-disc"></i> dripicons-disc
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-document"></i> dripicons-document
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-document-delete"></i> dripicons-document-delete
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-document-edit"></i> dripicons-document-edit
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-document-new"></i> dripicons-document-new
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-document-remove"></i> dripicons-document-remove
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-dot"></i> dripicons-dot
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-dots-2"></i> dripicons-dots-2
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-dots-3"></i> dripicons-dots-3
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-download"></i> dripicons-download
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-duplicate"></i> dripicons-duplicate
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-enter"></i> dripicons-enter
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-exit"></i> dripicons-exit
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-expand"></i> dripicons-expand
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-expand-2"></i> dripicons-expand-2
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-experiment"></i> dripicons-experiment
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-export"></i> dripicons-export
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-feed"></i> dripicons-feed
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-flag"></i> dripicons-flag
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-flashlight"></i> dripicons-flashlight
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-folder"></i> dripicons-folder
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-folder-open"></i> dripicons-folder-open
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-forward"></i> dripicons-forward
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-gaming"></i> dripicons-gaming
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-gear"></i> dripicons-gear
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-graduation"></i> dripicons-graduation
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-graph-bar"></i> dripicons-graph-bar
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-graph-line"></i> dripicons-graph-line
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-graph-pie"></i> dripicons-graph-pie
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-headset"></i> dripicons-headset
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-heart"></i> dripicons-heart
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-help"></i> dripicons-help
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-home"></i> dripicons-home
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-hourglass"></i> dripicons-hourglass
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-inbox"></i> dripicons-inbox
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-information"></i> dripicons-information
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-italic"></i> dripicons-italic
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-jewel"></i> dripicons-jewel
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-lifting"></i> dripicons-lifting
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-lightbulb"></i> dripicons-lightbulb
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-link"></i> dripicons-link
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-link-broken"></i> dripicons-link-broken
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-list"></i> dripicons-list
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-loading"></i> dripicons-loading
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-location"></i> dripicons-location
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-lock"></i> dripicons-lock
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-lock-open"></i> dripicons-lock-open
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-mail"></i> dripicons-mail
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-map"></i> dripicons-map
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-media-loop"></i> dripicons-media-loop
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-media-next"></i> dripicons-media-next
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-media-pause"></i> dripicons-media-pause
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-media-play"></i> dripicons-media-play
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-media-previous"></i> dripicons-media-previous
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-media-record"></i> dripicons-media-record
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-media-shuffle"></i> dripicons-media-shuffle
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-media-stop"></i> dripicons-media-stop
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-medical"></i> dripicons-medical
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-menu"></i> dripicons-menu
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-message"></i> dripicons-message
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-meter"></i> dripicons-meter
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-microphone"></i> dripicons-microphone
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-minus"></i> dripicons-minus
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-monitor"></i> dripicons-monitor
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-move"></i> dripicons-move
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-music"></i> dripicons-music
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-network-1"></i> dripicons-network-1
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-network-2"></i> dripicons-network-2
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-network-3"></i> dripicons-network-3
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-network-4"></i> dripicons-network-4
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-network-5"></i> dripicons-network-5
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-pamphlet"></i> dripicons-pamphlet
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-paperclip"></i> dripicons-paperclip
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-pencil"></i> dripicons-pencil
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-phone"></i> dripicons-phone
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-photo"></i> dripicons-photo
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-photo-group"></i> dripicons-photo-group
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-pill"></i> dripicons-pill
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-pin"></i> dripicons-pin
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-plus"></i> dripicons-plus
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-power"></i> dripicons-power
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-preview"></i> dripicons-preview
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-print"></i> dripicons-print
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-pulse"></i> dripicons-pulse
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-question"></i> dripicons-question
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-reply"></i> dripicons-reply
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-reply-all"></i> dripicons-reply-all
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-return"></i> dripicons-return
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-retweet"></i> dripicons-retweet
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-rocket"></i> dripicons-rocket
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-scale"></i> dripicons-scale
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-search"></i> dripicons-search
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-shopping-bag"></i> dripicons-shopping-bag
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-skip"></i> dripicons-skip
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-stack"></i> dripicons-stack
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-star"></i> dripicons-star
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-stopwatch"></i> dripicons-stopwatch
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-store"></i> dripicons-store
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-suitcase"></i> dripicons-suitcase
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-swap"></i> dripicons-swap
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-tag"></i> dripicons-tag
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-tag-delete"></i> dripicons-tag-delete
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-tags"></i> dripicons-tags
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-thumbs-down"></i> dripicons-thumbs-down
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-thumbs-up"></i> dripicons-thumbs-up
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-ticket"></i> dripicons-ticket
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-time-reverse"></i> dripicons-time-reverse
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-to-do"></i> dripicons-to-do
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-toggles"></i> dripicons-toggles
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-trash"></i> dripicons-trash
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-trophy"></i> dripicons-trophy
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-upload"></i> dripicons-upload
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-user"></i> dripicons-user
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-user-group"></i> dripicons-user-group
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-user-id"></i> dripicons-user-id
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-vibrate"></i> dripicons-vibrate
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-view-apps"></i> dripicons-view-apps
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-view-list"></i> dripicons-view-list
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-view-list-large"></i> dripicons-view-list-large
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-view-thumb"></i> dripicons-view-thumb
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-volume-full"></i> dripicons-volume-full
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-volume-low"></i> dripicons-volume-low
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-volume-medium"></i> dripicons-volume-medium
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-volume-off"></i> dripicons-volume-off
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-wallet"></i> dripicons-wallet
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-warning"></i> dripicons-warning
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-web"></i> dripicons-web
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-weight"></i> dripicons-weight
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-wifi"></i> dripicons-wifi
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-wrong"></i> dripicons-wrong
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-zoom-in"></i> dripicons-zoom-in
                                            </Col>
                                        <Col xl="3" md="4" sm="6">
                                            <i class="dripicons-zoom-out"></i> dripicons-zoom-out
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

export default withRouter(connect(null, { activateAuthLayout })(Dripicons));