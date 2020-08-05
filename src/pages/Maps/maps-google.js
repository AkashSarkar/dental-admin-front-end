import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SettingMenu from '../Subpages/Settingmenu';
import LightData from './LightData';

const LoadingContainer = (props) => (
    <div>Loading...</div>
)

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    onMarkerClick(props, marker, e) {
        alert('You clicked in this marker');
    }

    render() {

        return (
            <React.Fragment>
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <h4 className="page-title">Google Maps</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Maps</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Google Maps</BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                            <Col sm="6">
                                <div className="float-right d-none d-md-block">
                                    <SettingMenu />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Markers</h4>
                                    <p className="text-muted m-b-30">Example of google maps.</p>
                                    <div id="gmaps-markers" className="gmaps" style={{ position : "relative" }}>
                                        <Map google={this.props.google}
                                            style={{   width: '100%', height: '100%' }}
                                            zoom={14}>

                                            <Marker
                                                title={'The marker`s title will appear as a tooltip.'}
                                                name={'SOMA'}
                                                position={{ lat: 37.778519, lng: -122.405640 }} />
                                            <Marker name={'Dolores park'} />
                                            <InfoWindow>
                                                <div>
                                                    <h1>{this.state.selectedPlace.name}</h1>
                                                </div>
                                            </InfoWindow>
                                        </Map>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Overlays</h4>
                                    <p className="text-muted m-b-30">Example of google maps.</p>
                                    <div id="gmaps-overlay" className="gmaps"  style={{ position : "relative" }}>
                                        <Map google={this.props.google} zoom={14}
                                               style={{   width: '100%', height: '100%' }}
                                            initialCenter={{
                                                lat: 40.854885,
                                                lng: -88.081807
                                            }}>

                                            <Marker onClick={this.onMarkerClick} />
                                            <InfoWindow>
                                                <div>
                                                    <h1>{this.state.selectedPlace.name}</h1>
                                                </div>
                                            </InfoWindow>
                                        </Map>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Basic</h4>
                                    <p className="text-muted m-b-30">Example of google maps.</p>
                                    <div id="gmaps-markers" className="gmaps"  style={{ position : "relative" }}>
                                        <Map google={this.props.google} zoom={14}
                                               style={{   width: '100%', height: '100%' }}
                                        >
                                            <InfoWindow>
                                                <div>
                                                    <h1>{this.state.selectedPlace.name}</h1>
                                                </div>
                                            </InfoWindow>
                                        </Map>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Ultra Light</h4>
                                    <p className="text-muted m-b-30">Example of google maps.</p>
                                    <div id="gmaps-overlay" className="gmaps"  style={{ position : "relative" }}>
                                        <Map google={this.props.google} zoom={14} styles={LightData.Data} style={{   width: '100%', height: '100%' }}>
                                            <Marker onClick={this.onMarkerClick} />
                                            <InfoWindow>
                                                <div>
                                                    <h1>{this.state.selectedPlace.name}</h1>
                                                </div>
                                            </InfoWindow>
                                        </Map>
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

// export default withRouter(connect(null, { activateAuthLayout })(GoogleMap));
export default connect(null, { activateAuthLayout })(GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3"
})(GoogleMap));