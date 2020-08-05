import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Nav, NavItem, NavLink, Button, CardHeader, Collapse, TabContent, TabPane, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Settingmenu from '../Subpages/Settingmenu';

class Uitabsaccordions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            activeTab1: '5',
            activeTab_border: '9',
            activeTab_border1: '13',
            col1: true,
            col2: false,
            col3: false,
            col5: true,
        };

        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

        this.t_col1 = this.t_col1.bind(this);
        this.t_col2 = this.t_col2.bind(this);
        this.t_col3 = this.t_col3.bind(this);
        this.t_col5 = this.t_col5.bind(this);

        this.t_border = this.t_border.bind(this);
        this.t_border1 = this.t_border1.bind(this);

    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    t_col1() {
        this.setState({ col1: !this.state.col1 });
    }
    t_col2() {
        this.setState({ col2: !this.state.col2 });
    }
    t_col3() {
        this.setState({ col3: !this.state.col3 });
    }
    t_col5() {
        this.setState({ col5: !this.state.col5 });
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }


    t_border(tab) {
        if (this.state.activeTab_border !== tab) {
            this.setState({
                activeTab_border: tab
            });
        }
    }
    t_border1(tab) {
        if (this.state.activeTab_border1 !== tab) {
            this.setState({
                activeTab_border1: tab
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <h4 className="page-title">Tabs & Accordions</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Tabs & Accordions</BreadcrumbItem>
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

                                    <h4 className="mt-0 header-title">Default Tabs</h4>
                                    <p className="text-muted m-b-30">Use the tab JavaScript plugin—include
                                            it individually or through the compiled <code className="highlighter-rouge">reactstrap </code>
                                        file—to extend our navigational tabs and pills to create tabbable panes
                                            of local content, even via dropdown menus.</p>

                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                                                onClick={() => { this.toggle('1'); }} >
                                                <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                                <span className="d-none d-sm-block">Home</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                                                onClick={() => { this.toggle('2'); }} >
                                                <span className="d-block d-sm-none"><i className="fas fa-user"></i></span>
                                                <span className="d-none d-sm-block">Profile</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                                                onClick={() => { this.toggle('3'); }}>
                                                <span className="d-block d-sm-none"><i className="fas fa-envelope"></i></span>
                                                <span className="d-none d-sm-block">Messages</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab === '4' })}
                                                onClick={() => { this.toggle('4'); }}>
                                                <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                                <span className="d-none d-sm-block">Settings</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={this.state.activeTab} >
                                        <TabPane tabId="1" className="p-3">
                                            <p className="mb-0">
                                                Raw denim you probably haven't heard of them jean shorts Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                iphone. Seitan aliquip quis cardigan american apparel, butcher
                                                voluptate nisi qui.
                                                </p>
                                        </TabPane>
                                        <TabPane tabId="2" className="p-3" >
                                            <p className="mb-0">
                                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                single-origin coffee squid. Exercitation +1 labore velit, blog
                                                sartorial PBR leggings next level wes anderson artisan four loko
                                                farm-to-table craft beer twee. Qui photo booth letterpress,
                                                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                                vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                                aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr,
                                                vero magna velit sapiente labore stumptown. Vegan fanny pack
                                                odio cillum wes anderson 8-bit.
                                                </p>
                                        </TabPane>
                                        <TabPane tabId="3" className="p-3" >
                                            <p className="mb-0">
                                                Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                farm-to-table readymade. Messenger bag gentrify pitchfork
                                                tattooed craft beer, iphone skateboard locavore carles etsy
                                                salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                                mi whatever gluten-free, carles pitchfork biodiesel fixie etsy
                                                retro mlkshk vice blog. Scenester cred you probably haven't
                                                heard of them, vinyl craft beer blog stumptown. Pitchfork
                                                sustainable tofu synth chambray yr.
                                                </p>
                                        </TabPane>
                                        <TabPane tabId="4" className="p-3" >
                                            <p className="mb-0">
                                                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                                art party before they sold out master cleanse gluten-free squid
                                                scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                art party locavore wolf cliche high life echo park Austin. Cred
                                                vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral,
                                                mustache readymade thundercats keffiyeh craft beer marfa
                                                ethical. Wolf salvia freegan, sartorial keffiyeh echo park
                                                vegan.
                                                </p>
                                        </TabPane>
                                    </TabContent>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Justify Tabs</h4>
                                    <p className="text-muted m-b-30">Use the tab JavaScript plugin—include
                                            it individually or through the compiled <code className="highlighter-rouge">reactstrap</code>
                                        file—to extend our navigational tabs and pills to create tabbable panes
                                            of local content, even via dropdown menus.</p>

                                    <Nav pills className="nav-justified">
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab1 === '5' })}
                                                onClick={() => { this.toggle1('5'); }}>
                                                <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                                <span className="d-none d-sm-block">Home</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab1 === '6' })}
                                                onClick={() => { this.toggle1('6'); }}>
                                                <span className="d-block d-sm-none"><i className="fas fa-user"></i></span>
                                                <span className="d-none d-sm-block">Profile</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab1 === '7' })}
                                                onClick={() => { this.toggle1('7'); }}>
                                                <span className="d-block d-sm-none"><i className="fas fa-envelope"></i></span>
                                                <span className="d-none d-sm-block">Messages</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab1 === '8' })}
                                                onClick={() => { this.toggle1('8'); }}>
                                                <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                                <span className="d-none d-sm-block">Settings</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={this.state.activeTab1}>
                                        <TabPane tabId="5" className="p-3">
                                            <p className="mb-0">
                                                Raw denim you probably haven't heard of them jean shorts Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                iphone. Seitan aliquip quis cardigan american apparel, butcher
                                                voluptate nisi qui.
                                                </p>
                                        </TabPane>
                                        <TabPane className="p-3" tabId="6">
                                            <p className="mb-0">
                                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                single-origin coffee squid. Exercitation +1 labore velit, blog
                                                sartorial PBR leggings next level wes anderson artisan four loko
                                                farm-to-table craft beer twee. Qui photo booth letterpress,
                                                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                                vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                                aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr,
                                                vero magna velit sapiente labore stumptown. Vegan fanny pack
                                                odio cillum wes anderson 8-bit.
                                                </p>
                                        </TabPane>
                                        <TabPane className="p-3" tabId="7">
                                            <p className="mb-0">
                                                Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                farm-to-table readymade. Messenger bag gentrify pitchfork
                                                tattooed craft beer, iphone skateboard locavore carles etsy
                                                salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                                mi whatever gluten-free, carles pitchfork biodiesel fixie etsy
                                                retro mlkshk vice blog. Scenester cred you probably haven't
                                                heard of them, vinyl craft beer blog stumptown. Pitchfork
                                                sustainable tofu synth chambray yr.
                                                </p>
                                        </TabPane>
                                        <TabPane className="p-3" tabId="8">
                                            <p className="mb-0">
                                                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                                art party before they sold out master cleanse gluten-free squid
                                                scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                art party locavore wolf cliche high life echo park Austin. Cred
                                                vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral,
                                                mustache readymade thundercats keffiyeh craft beer marfa
                                                ethical. Wolf salvia freegan, sartorial keffiyeh echo park
                                                vegan.
                                                </p>
                                        </TabPane>
                                    </TabContent>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Custom Tabs</h4>
                                    <p className="text-muted m-b-30">Example of custom tabs</p>

                                    <Nav tabs className="nav-tabs-custom">
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab_border === '9' })}
                                                onClick={() => { this.t_border('9'); }}>
                                                <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                                <span className="d-none d-sm-block">Home</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab_border === '10' })}
                                                onClick={() => { this.t_border('10'); }}>
                                                <span className="d-block d-sm-none"><i className="fas fa-user"></i></span>
                                                <span className="d-none d-sm-block">Profile</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab_border === '11' })}
                                                onClick={() => { this.t_border('11'); }}>
                                                <span className="d-block d-sm-none"><i className="fas fa-envelope"></i></span>
                                                <span className="d-none d-sm-block">Messages</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab_border === '12' })}
                                                onClick={() => { this.t_border('12'); }}>
                                                <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                                <span className="d-none d-sm-block">Settings</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={this.state.activeTab_border}>
                                        <TabPane className="p-3" tabId="9">
                                            <p className="mb-0">
                                                Raw denim you probably haven't heard of them jean shorts Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                iphone. Seitan aliquip quis cardigan american apparel, butcher
                                                voluptate nisi qui.
                                                </p>
                                        </TabPane>
                                        <TabPane className=" p-3" tabId="10">
                                            <p className="mb-0">
                                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                single-origin coffee squid. Exercitation +1 labore velit, blog
                                                sartorial PBR leggings next level wes anderson artisan four loko
                                                farm-to-table craft beer twee. Qui photo booth letterpress,
                                                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                                vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                                aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr,
                                                vero magna velit sapiente labore stumptown. Vegan fanny pack
                                                odio cillum wes anderson 8-bit.
                                                </p>
                                        </TabPane>
                                        <TabPane className="p-3" tabId="11">
                                            <p className="mb-0">
                                                Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                farm-to-table readymade. Messenger bag gentrify pitchfork
                                                tattooed craft beer, iphone skateboard locavore carles etsy
                                                salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                                mi whatever gluten-free, carles pitchfork biodiesel fixie etsy
                                                retro mlkshk vice blog. Scenester cred you probably haven't
                                                heard of them, vinyl craft beer blog stumptown. Pitchfork
                                                sustainable tofu synth chambray yr.
                                                </p>
                                        </TabPane>
                                        <TabPane className="p-3" tabId="12">
                                            <p className="mb-0">
                                                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                                art party before they sold out master cleanse gluten-free squid
                                                scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                art party locavore wolf cliche high life echo park Austin. Cred
                                                vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral,
                                                mustache readymade thundercats keffiyeh craft beer marfa
                                                ethical. Wolf salvia freegan, sartorial keffiyeh echo park
                                                vegan.
                                                </p>
                                        </TabPane>
                                    </TabContent>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Custom Tabs Justified</h4>
                                    <p className="text-muted m-b-30">Example of custom tabs</p>

                                    <Nav tabs className="nav-tabs-custom nav-justified">
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab_border1 === '13' })}
                                                onClick={() => { this.t_border1('13'); }}>
                                                <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                                <span className="d-none d-sm-block">Home</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab_border1 === '14' })}
                                                onClick={() => { this.t_border1('14'); }}>
                                                <span className="d-block d-sm-none"><i className="fas fa-user"></i></span>
                                                <span className="d-none d-sm-block">Profile</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab_border1 === '15' })}
                                                onClick={() => { this.t_border1('15'); }}>
                                                <span className="d-block d-sm-none"><i className="fas fa-envelope"></i></span>
                                                <span className="d-none d-sm-block">Messages</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTab_border1 === '16' })}
                                                onClick={() => { this.t_border1('16'); }}>
                                                <span className="d-block d-sm-none"><i className="fas fa-cog"></i></span>
                                                <span className="d-none d-sm-block">Settings</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={this.state.activeTab_border1}>
                                        <TabPane className="p-3" tabId="13">
                                            <p className="mb-0">
                                                Raw denim you probably haven't heard of them jean shorts Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                iphone. Seitan aliquip quis cardigan american apparel, butcher
                                                voluptate nisi qui.
                                                </p>
                                        </TabPane>
                                        <TabPane className="p-3" tabId="14">
                                            <p className="mb-0">
                                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                single-origin coffee squid. Exercitation +1 labore velit, blog
                                                sartorial PBR leggings next level wes anderson artisan four loko
                                                farm-to-table craft beer twee. Qui photo booth letterpress,
                                                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                                vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                                aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr,
                                                vero magna velit sapiente labore stumptown. Vegan fanny pack
                                                odio cillum wes anderson 8-bit.
                                                </p>
                                        </TabPane>
                                        <TabPane className="p-3" tabId="15">
                                            <p className="mb-0">
                                                Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                farm-to-table readymade. Messenger bag gentrify pitchfork
                                                tattooed craft beer, iphone skateboard locavore carles etsy
                                                salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                                mi whatever gluten-free, carles pitchfork biodiesel fixie etsy
                                                retro mlkshk vice blog. Scenester cred you probably haven't
                                                heard of them, vinyl craft beer blog stumptown. Pitchfork
                                                sustainable tofu synth chambray yr.
                                                </p>
                                        </TabPane>
                                        <TabPane className="p-3" tabId="16">
                                            <p className="mb-0">
                                                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                                art party before they sold out master cleanse gluten-free squid
                                                scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                art party locavore wolf cliche high life echo park Austin. Cred
                                                vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral,
                                                mustache readymade thundercats keffiyeh craft beer marfa
                                                ethical. Wolf salvia freegan, sartorial keffiyeh echo park
                                                vegan.
                                                </p>
                                        </TabPane>
                                    </TabContent>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Default Collapse</h4>
                                    <p className="text-muted m-b-30">
                                        You can use a Link with the <code className="highlighter-rouge">to</code>
                                        attribute
                                        </p>
                                    <p>
                                        <span onClick={this.t_col5} className="btn btn-primary mo-mb-2" >
                                            Link with href
                                            </span> {' '}
                                        <Button color="primary" onClick={this.t_col5} className="mo-mb-2">
                                            Button with data-target
                                            </Button>
                                    </p>
                                    <Collapse isOpen={this.state.col5}>
                                        <CardBody>
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                            </CardBody>
                                    </Collapse>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Accordion example</h4>
                                    <p className="text-muted m-b-30">Extend the default collapse behavior to create an accordion.</p>

                                    <div id="accordion">
                                        <Card className="mb-1">
                                            <CardHeader className="p-3" id="headingOne">
                                                <h6 className="m-0 font-14">
                                                    <Link to="#" onClick={this.t_col1} className="text-dark">
                                                        Collapsible Group Item #1
                                                    </Link>
                                                </h6>
                                            </CardHeader>

                                            <Collapse isOpen={this.state.col1}>
                                                <CardBody>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus terry richardson ad squid. 3 wolf moon officia
                                                    aute, non cupidatat skateboard dolor brunch. Food truck
                                                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee
                                                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt
                                                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                    Leggings occaecat craft beer farm-to-table, raw denim
                                                    aesthetic synth nesciunt you probably haven't heard of them
                                                    accusamus labore sustainable VHS.
                                                    </CardBody>
                                            </Collapse>
                                        </Card>
                                        <Card className="mb-1">
                                            <CardHeader className="p-3" id="headingTwo">
                                                <h6 className="m-0 font-14">
                                                    <Link to="#" onClick={this.t_col2} className="text-dark collapsed">
                                                        Collapsible Group Item #2
                                                    </Link>
                                                </h6>
                                            </CardHeader>
                                            <Collapse isOpen={this.state.col2}>
                                                <CardBody>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus terry richardson ad squid. 3 wolf moon officia
                                                    aute, non cupidatat skateboard dolor brunch. Food truck
                                                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee
                                                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt
                                                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                    Leggings occaecat craft beer farm-to-table, raw denim
                                                    aesthetic synth nesciunt you probably haven't heard of them
                                                    accusamus labore sustainable VHS.
                                                    </CardBody>
                                            </Collapse>
                                        </Card>
                                        <Card className="mb-0">
                                            <CardHeader className="p-3" id="headingThree">
                                                <h6 className="m-0 font-14">
                                                    <Link to="#" onClick={this.t_col3} className="text-dark collapsed">
                                                        Collapsible Group Item #3
                                                    </Link>
                                                </h6>
                                            </CardHeader>
                                            <Collapse isOpen={this.state.col3}>
                                                <CardBody>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus terry richardson ad squid. 3 wolf moon officia
                                                    aute, non cupidatat skateboard dolor brunch. Food truck
                                                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee
                                                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt
                                                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                    Leggings occaecat craft beer farm-to-table, raw denim
                                                    aesthetic synth nesciunt you probably haven't heard of them
                                                    accusamus labore sustainable VHS.
                                                    </CardBody>
                                            </Collapse>
                                        </Card>
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

export default withRouter(connect(null, { activateAuthLayout })(Uitabsaccordions));