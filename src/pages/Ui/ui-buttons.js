import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Button, ButtonGroup, Breadcrumb, BreadcrumbItem, ButtonToolbar, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class Uibuttons extends Component {
    constructor(props) {
        super(props);
        this.state = { cSelected: [] };

        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    }

    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
    }

    onCheckboxBtnClick(selected) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
            this.state.cSelected.push(selected);
        } else {
            this.state.cSelected.splice(index, 1);
        }
        this.setState({ cSelected: [...this.state.cSelected] });
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
                                <h4 className="page-title">Buttons</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Buttons</BreadcrumbItem>
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
                                    <h4 className="mt-0 header-title">Examples</h4>
                                    <p className="text-muted m-b-20">Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>
                                    <div className="button-items">
                                        <Button type="button" color="primary" className="waves-effect waves-light">Primary</Button>{' '}
                                        <Button type="button" color="secondary" className="waves-effect">Secondary</Button>{' '}
                                        <Button type="button" color="success" className="waves-effect waves-light">Success</Button>{' '}
                                        <Button type="button" color="info" className="waves-effect waves-light">Info</Button>{' '}
                                        <Button type="button" color="warning" className="waves-effect waves-light">Warning</Button>{' '}
                                        <Button type="button" color="danger" className="waves-effect waves-light">Danger</Button>{' '}
                                        <Button type="button" color="dark" className="waves-effect waves-light">Dark</Button>{' '}
                                        <Button type="button" color="link" className="waves-effect">Link</Button>{' '}
                                        <Button type="button" color="light" className="waves-effect">Light</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Outline buttons</h4>
                                    <p className="text-muted m-b-20">Replace the default properties of react <code className="highlighter-rouge">outline</code> ones to remove all background images and colors on any button.</p>
                                    <div className="button-items">
                                        <Button type="button" outline color="primary" className="waves-effect waves-light">Primary</Button>{' '}
                                        <Button type="button" outline color="secondary" className="waves-effect">Secondary</Button>{' '}
                                        <Button type="button" outline color="success" className="waves-effect waves-light">Success</Button>{' '}
                                        <Button type="button" outline color="info" className="waves-effect waves-light">Info</Button>{' '}
                                        <Button type="button" outline color="warning" className="waves-effect waves-light">Warning</Button>{' '}
                                        <Button type="button" outline color="danger" className="waves-effect waves-light">Danger</Button>{' '}
                                        <Button type="button" outline color="dark" className="waves-effect waves-light">Dark</Button>{' '}
                                        <Button type="button" outline color="light" className="waves-effect">Light</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Button tags</h4>
                                    <p className="text-muted m-b-20 ">The <code className="highlighter-rouge">.Button</code>
                                         are designed to be used with the <code
                                            className="highlighter-rouge">&lt;Button&gt;</code> element.
                                            However, you can also use these class on <code
                                            className="highlighter-rouge">&lt;Link&gt;</code> or <code
                                                className="highlighter-rouge">&lt;input&gt;</code> elements (though
                                            some browsers may apply a slightly different rendering).</p>
                                    <div className="button-items">
                                        <Link className="btn btn-primary waves-effect waves-light" to="#" role="button">Link</Link>{' '}
                                        <Button color="success" className="waves-effect waves-light" type="submit">Button</Button>{' '}
                                        <input className="btn btn-info" type="button" value="Input" />{' '}
                                        <input className="btn btn-danger" type="submit" value="Submit" />{' '}
                                        <input className="btn btn-warning" type="reset" value="Reset" />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Sizes</h4>
                                    <p className="text-muted m-b-20">Fancy larger or smaller buttons? Add size = 
                                        <code className="highlighter-rouge">lg</code> or <code
                                            className="highlighter-rouge">sm</code> for additional sizes.
                                    </p>
                                    <div className="button-items">
                                        <Button type="button" color="primary" size="lg" className="waves-effect waves-light">Large button</Button>{' '}
                                        <Button type="button" color="secondary" size="lg" className="waves-effect">Large button</Button>{' '}
                                        <Button type="button" color="primary" size="sm" className="waves-effect waves-light">Small button</Button>{' '}
                                        <Button type="button" color="secondary" size="sm" className="waves-effect">Small button</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Block Buttons</h4>
                                    <p className="text-muted m-b-20 ">Create block level buttons—those that
                                            span the full width of a parent—by adding <code
                                            className="highlighter-rouge">.btn-block</code>.</p>
                                    <div className="button-items">
                                        <Button type="button" color="primary" size="lg" className="btn-block waves-effect waves-light">Block level button</Button>{' '}
                                        <Button type="button" color="secondary" size="sm" className="btn-block waves-effect">Block level button</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Toggle states</h4>
                                    <p className="text-muted m-b-20 ">Add <code className="highlighter-rouge">data-toggle="button"</code>
                                        to toggle a button’s <code className="highlighter-rouge">active</code>
                                        state. If you’re pre-toggling a button, you must manually add the <code
                                            className="highlighter-rouge">.active </code> className
                                            <strong> and</strong> <code
                                            className="highlighter-rouge">aria-pressed="true"</code> to the
                                            <code className="highlighter-rouge">&lt;button&gt;</code>.
                                        </p>
                                    <div className="button-items">
                                        <Button type="button" color="primary" className="waves-effect waves-light" data-toggle="button" aria-pressed="false">
                                            Single toggle
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Checkbox buttons</h4>
                                    <p className="text-muted m-b-30 ">Bootstrap’s <code
                                        className="highlighter-rouge">.button</code> styles can be applied to
                                            other elements, such as <code className="highlighter-rouge">
                                            &lt;label&gt;</code>s, to provide checkbox or radio style button
                                            toggling. Add <code
                                            className="highlighter-rouge">data-toggle="buttons"</code> to a
                                            <code className="highlighter-rouge">.btn-group</code> containing those
                                            modified buttons to enable toggling in their respective styles.</p>
                                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                        <ButtonGroup>
                                            <Button color="secondary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>Checked-1</Button>
                                            <Button color="secondary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Checked-2</Button>
                                            <Button color="secondary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Checked-3</Button>
                                        </ButtonGroup>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Radio buttons</h4>
                                    <p className="text-muted m-b-30 ">Bootstrap’s <code
                                        className="highlighter-rouge">.button</code> styles can be applied to
                                            other elements, such as <code className="highlighter-rouge">
                                            &lt;label&gt;</code>s, to provide checkbox or radio style button
                                            toggling. Add <code
                                            className="highlighter-rouge">data-toggle="buttons"</code> to a
                                            <code className="highlighter-rouge">.btn-group</code> containing those
                                            modified buttons to enable toggling in their respective styles.</p>
                                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                        <ButtonGroup>
                                            <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Active</Button>
                                            <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Radio</Button>
                                            <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Radio</Button>
                                        </ButtonGroup>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Button group</h4>
                                    <p className="text-muted m-b-30 ">Wrap a series of buttons with <code
                                        className="highlighter-rouge">Button</code> in <code
                                            className="highlighter-rouge">ButtonGroup</code>.</p>
                                    <ButtonGroup>
                                        <Button type="button" color="secondary">Left</Button>
                                        <Button type="button" color="secondary">Middle</Button>
                                        <Button type="button" color="secondary">Right</Button>
                                    </ButtonGroup>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Button toolbar</h4>
                                    <p className="text-muted m-b-30 ">Combine sets of button groups into
                                      ButtonToolbar for more complex components. Use utility class as
                                            needed to space out groups, buttons, and more.</p>
                                    <ButtonToolbar>
                                        <ButtonGroup className="mr-2">
                                            <Button type="button" color="secondary">1</Button>{' '}
                                            <Button type="button" color="secondary">2</Button>{' '}
                                            <Button type="button" color="secondary">3</Button>{' '}
                                            <Button type="button" color="secondary">4</Button>
                                        </ButtonGroup>
                                        <ButtonGroup className="mr-2">
                                            <Button type="button" color="secondary">5</Button>{' '}
                                            <Button type="button" color="secondary">6</Button>{' '}
                                            <Button type="button" color="secondary">7</Button>
                                        </ButtonGroup>
                                        <ButtonGroup>
                                            <Button type="button" color="secondary">8</Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Sizing</h4>
                                    <p className="text-muted m-b-30 ">Instead of applying button sizing
                                            className to every button in a group, just add <code
                                            className="highlighter-rouge">ButtonGroup</code> to each <code
                                                className="highlighter-rouge">ButtonGroup</code>, including each one
                                            when nesting multiple groups.</p>
                                    <ButtonGroup size="lg">
                                        <Button type="button" color="secondary">Left</Button>{' '}
                                        <Button type="button" color="secondary">Middle</Button>{' '}
                                        <Button type="button" color="secondary">Right</Button>
                                    </ButtonGroup>
                                    <br />
                                    <ButtonGroup className="m-t-10">
                                        <Button type="button" color="secondary">Left</Button>{' '}
                                        <Button type="button" color="secondary">Middle</Button>{' '}
                                        <Button type="button" color="secondary">Right</Button>
                                    </ButtonGroup>
                                    <br />
                                    <ButtonGroup size="sm" className="m-t-10">
                                        <Button type="button" color="secondary">Left</Button>{' '}
                                        <Button type="button" color="secondary">Middle</Button>{' '}
                                        <Button type="button" color="secondary">Right</Button>
                                    </ButtonGroup>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Vertical variation</h4>
                                    <p className="text-muted m-b-30 ">Make a set of buttons appear vertically
                                        stacked rather than horizontally. Split button dropdowns are not
                                            supported here.</p>
                                    <ButtonGroup vertical>
                                        <Button type="button" color="secondary">Button</Button>
                                        <ButtonGroup>
                                            <ButtonDropdown isOpen={this.state.drp_link} toggle={() => this.setState({ drp_link: !this.state.drp_link })}>
                                                <DropdownToggle caret color="secondary">
                                                    Dropdown{' '}</DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Dropdown link</DropdownItem>
                                                    <DropdownItem>Dropdown link</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </ButtonGroup>
                                        <Button type="button" color="secondary">Button</Button>
                                        <Button type="button" color="secondary">Button</Button>
                                    </ButtonGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(Uibuttons));