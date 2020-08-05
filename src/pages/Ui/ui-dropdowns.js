import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Button, ButtonGroup, Breadcrumb, ButtonDropdown, BreadcrumbItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';


class Uidropdowns extends Component {
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
                                <h4 className="page-title">Dropdowns</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Dropdowns</BreadcrumbItem>
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
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Single button dropdowns</h4>
                                    <p className="text-muted m-b-30">Any single <code
                                        className="highlighter-rouge">Button</code> can be turned into a dropdown
                                    toggle with some markup changes. Here’s how you can put them to work
                                            with either <code className="highlighter-rouge">&lt;button&gt;</code>
                                        elements:</p>

                                    <Row>
                                        <Col sm="6">
                                            <UncontrolledDropdown className="mo-mb-2">
                                                <DropdownToggle caret>
                                                    Dropdown button {' '}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </Col>
                                        <Col sm="6">
                                            <UncontrolledDropdown className="mo-mb-2">
                                                <DropdownToggle caret tag="a" className="btn btn-secondary text-white">
                                                    Dropdown link {' '}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Variant</h4>
                                    <p className="text-muted m-b-30">The best part is you can do this with any button variant, too:</p>
                                    <div className="">
                                        <ButtonGroup className="m-b-10">
                                            <UncontrolledDropdown>
                                                <DropdownToggle color="primary" caret>
                                                    Primary
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Separated link</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </ButtonGroup>{' '}
                                        <ButtonGroup className="m-b-10">
                                            <UncontrolledDropdown>
                                                <DropdownToggle color="secondary" caret>
                                                    Secondary
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Separated link</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </ButtonGroup>{' '}
                                        <ButtonGroup className="m-b-10">
                                            <UncontrolledDropdown>
                                                <DropdownToggle color="success" caret>
                                                    Success
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Separated link</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </ButtonGroup>{' '}
                                        <ButtonGroup className="m-b-10">
                                            <UncontrolledDropdown>
                                                <DropdownToggle color="info" caret>
                                                    Info
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Separated link</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </ButtonGroup>{' '}
                                        <ButtonGroup className="m-b-10">
                                            <UncontrolledDropdown>
                                                <DropdownToggle color="warning" caret>
                                                    Warning
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Separated link</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </ButtonGroup>{' '}
                                        <ButtonGroup className="m-b-10">
                                            <UncontrolledDropdown>
                                                <DropdownToggle color="danger" caret>
                                                    Danger
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Separated link</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </ButtonGroup>
                                    </div>
                                </CardBody>
                            </Card>

                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody className="splitbtn">
                                    <h4 className="mt-0 header-title">Split button dropdowns</h4>
                                    <p className="text-muted m-b-30">The best part is you can do this with any button variant, too:</p>
                                    <div className="">

                                        <ButtonDropdown isOpen={this.state.drp_link} toggle={() => this.setState({ drp_link: !this.state.drp_link })} className="m-b-10">
                                            <Button id="caret" color="primary">Primary</Button>
                                            <DropdownToggle caret color="primary" />
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>{' '}
                                        <ButtonDropdown isOpen={this.state.drp_link1} toggle={() => this.setState({ drp_link1: !this.state.drp_link1 })} className="m-b-10">
                                            <Button id="caret" color="secondary">Secondary</Button>
                                            <DropdownToggle caret color="secondary" />
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>{' '}
                                        <ButtonDropdown isOpen={this.state.drp_link2} toggle={() => this.setState({ drp_link2: !this.state.drp_link2 })} className="m-b-10">
                                            <Button id="caret" color="success">Success</Button>
                                            <DropdownToggle caret color="success" />
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>{' '}
                                        <ButtonDropdown isOpen={this.state.drp_link3} toggle={() => this.setState({ drp_link3: !this.state.drp_link3 })} className="m-b-10">
                                            <Button id="caret" color="info">Info</Button>
                                            <DropdownToggle caret color="info" />
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>{' '}
                                        <ButtonDropdown isOpen={this.state.drp_link4} toggle={() => this.setState({ drp_link4: !this.state.drp_link4 })} className="m-b-10">
                                            <Button id="caret" color="warning">Warning</Button>
                                            <DropdownToggle caret color="warning" />
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>{' '}
                                        <ButtonDropdown isOpen={this.state.drp_link5} toggle={() => this.setState({ drp_link5: !this.state.drp_link5 })} className="m-b-10">
                                            <Button id="caret" color="danger">Danger</Button>
                                            <DropdownToggle caret color="danger" />
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Sizing</h4>
                                    <p className="text-muted m-b-30">Button dropdowns work with buttons of
                                            all sizes, including default and split dropdown buttons.</p>
                                    <div className="">
                                        <ButtonGroup className="mo-mb-2">
                                            <UncontrolledDropdown>
                                                <DropdownToggle color="secondary" size="lg" caret>
                                                    Large button{' '}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Separated link</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </ButtonGroup>{' '}
                                        <ButtonDropdown isOpen={this.state.drp_link6} toggle={() => this.setState({ drp_link6: !this.state.drp_link6 })} className="mo-mb-2 dropsplitbtn">
                                            <Button id="caret" color="secondary" size="lg">Large button</Button>
                                            <DropdownToggle caret color="secondary" size="lg" />
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>{' '}
                                        <ButtonGroup className="mo-mb-2">
                                            <UncontrolledDropdown>
                                                <DropdownToggle color="secondary" size="sm" caret>
                                                    Small button{' '}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Separated link</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </ButtonGroup>{' '}
                                        <ButtonDropdown isOpen={this.state.drp_link7} toggle={() => this.setState({ drp_link7: !this.state.drp_link7 })} className="mo-mb-2 smsplitbtn">
                                            <Button id="caret" color="secondary" size="sm">Small button</Button>
                                            <DropdownToggle caret color="secondary" size="sm" />
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Dropup variation</h4>
                                    <p className="text-muted m-b-30">Trigger dropdown menus above elements
                                            by adding  direction = <code className="highlighter-rouge">'up'</code> to the parent
                                            element.</p>

                                    <div className="">
                                        <ButtonGroup className="mo-mb-2">
                                            <UncontrolledDropdown direction="up">
                                                <DropdownToggle color="secondary" caret>
                                                    Dropup
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Separated link</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </ButtonGroup>{' '}
                                        <ButtonDropdown isOpen={this.state.drp_link8} toggle={() => this.setState({ drp_link8: !this.state.drp_link8 })} direction="up" className="mo-mb-2">
                                            <Button id="caret" color="secondary">Split dropup</Button>
                                            <DropdownToggle caret color="secondary" />
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Separated link</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Menu alignment</h4>
                                    <p className="text-muted m-b-30">Add direction = <code className="highlighter-rouge">'right'</code>
                                        to a <code className="highlighter-rouge">DropdownMenu</code> to right
                                            align the dropdown menu.</p>
                                    <ButtonGroup>
                                        <UncontrolledDropdown>
                                            <DropdownToggle color="secondary" caret>
                                                Menu is right-aligned {' '}
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-right">
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </ButtonGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Dropright variation</h4>
                                    <p className="text-muted m-b-30">Trigger dropdown menus at the right of the elements by adding direction=<code>'right'</code> to the parent element.
                                        </p>
                                    <div className="">
                                        <ButtonGroup className="mb-2">
                                            <UncontrolledDropdown direction="right">
                                                <DropdownToggle color="info" caret>
                                                    Dropright {' '}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </ButtonGroup>{' '}
                                        <ButtonDropdown isOpen={this.state.drp_link9} toggle={() => this.setState({ drp_link9: !this.state.drp_link9 })} direction="right" className="mb-2 splitbtn">
                                            <Button id="caret" color="info">Split dropright</Button>
                                            <DropdownToggle caret color="info" />
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Dropleft variation</h4>
                                    <p className="text-muted m-b-30">Trigger dropdown menus at the right of the elements by adding direction=<code>'left'</code> to the parent element.
                                        </p>
                                    <ButtonGroup className="mb-2">
                                        <UncontrolledDropdown direction="left">
                                            <DropdownToggle color="info" caret>
                                                {' '}Dropleft
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </ButtonGroup>{' '}
                                    <ButtonDropdown isOpen={this.state.drp_link10} toggle={() => this.setState({ drp_link10: !this.state.drp_link10 })} direction="left" className="mb-2 ltsplitbtn">
                                        <DropdownToggle caret color="info" />
                                        <DropdownMenu>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                        </DropdownMenu>
                                        <Button id="caret" color="info">Split Dropleft</Button>
                                    </ButtonDropdown>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(Uidropdowns));