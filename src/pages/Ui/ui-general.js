import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Badge, Button, Spinner, Pagination, PaginationItem, PaginationLink, UncontrolledTooltip, UncontrolledPopover, PopoverHeader, PopoverBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class Uigeneral extends Component {
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
                                <h4 className="page-title">General</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">UI Elements</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>General</BreadcrumbItem>
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
                        <Col lg="12">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col lg="6">
                                            <div>
                                                <h4 className="mt-0 header-title">Badges</h4>
                                                <p className="text-muted m-b-30">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
                                                <div>
                                                    <Badge color="primary">Primary</Badge>{' '}
                                                    <Badge color="success">Success</Badge>{' '}
                                                    <Badge color="info">Info</Badge>{' '}
                                                    <Badge color="warning">Warning</Badge>{' '}
                                                    <Badge color="danger">Danger</Badge>{' '}
                                                    <Badge color="dark">Dark</Badge>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div>
                                                <h4 className="mt-0 header-title mo-mt-2">Pill badges</h4>
                                                <p className="text-muted m-b-30">Use the <code>.badge-pill</code> modifier className to make
                                                    badges more rounded (with a larger <code>pill</code>
                                                    and additional horizontal <code>padding</code>).
                                                    Useful if you miss the badges from v3.</p>

                                                <div>
                                                    <Badge pill color="primary">Primary</Badge>{' '}
                                                    <Badge pill color="success">Success</Badge>{' '}
                                                    <Badge pill color="info">Info</Badge>{' '}
                                                    <Badge pill color="warning">Warning</Badge>{' '}
                                                    <Badge pill color="danger">Danger</Badge>{' '}
                                                    <Badge pill color="dark">Dark</Badge>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Popovers</h4>
                                    <p className="text-muted m-b-20">Add small overlay content, like those found in iOS, to any element for housing secondary information.</p>

                                    <div className="button-items">
                                        <Button color="secondary" id="Popovertop">
                                            Popover on top
                                            </Button>{' '}
                                        <UncontrolledPopover placement="top" target="Popovertop">
                                            <PopoverHeader>Popover Title</PopoverHeader>
                                            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                                        </UncontrolledPopover >

                                        <Button color="secondary" id="Popoverright">
                                            Popover on right
                                            </Button>{' '}
                                        <UncontrolledPopover placement="right" target="Popoverright">
                                            <PopoverHeader>Popover Title</PopoverHeader>
                                            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                                        </UncontrolledPopover >

                                        <Button color="secondary" id="Popoverbottom">
                                            Popover on bottom
                                            </Button>{' '}
                                        <UncontrolledPopover placement="bottom" target="Popoverbottom">
                                            <PopoverHeader>Popover Title</PopoverHeader>
                                            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                                        </UncontrolledPopover >

                                        <Button color="secondary" id="Popoverleft">
                                            Popover on left
                                            </Button>{' '}
                                        <UncontrolledPopover placement="left" target="Popoverleft">
                                            <PopoverHeader>Popover Title</PopoverHeader>
                                            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                                        </UncontrolledPopover >

                                        <Button color="success" id="Popoverbottom1">
                                            Dismissible popover
                                            </Button>
                                        <UncontrolledPopover placement="right" target="Popoverbottom1">
                                            <PopoverHeader>Dismissible popover</PopoverHeader>
                                            <PopoverBody>And here's some amazing content. It's very engaging. Right?</PopoverBody>
                                        </UncontrolledPopover >
                                    </div>

                                </CardBody>
                            </Card>

                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title">Tooltips</h4>
                                    <p className="text-muted m-b-20">Hover over the links below to see tooltips:</p>

                                    <div className="button-items">
                                        <UncontrolledTooltip color="primary" placement="top" target="TooltipTop">
                                            Tooltip on top
                                            </UncontrolledTooltip>

                                        <UncontrolledTooltip color="primary" placement="right" target="TooltipRight">
                                            Tooltip on right
                                            </UncontrolledTooltip>

                                        <UncontrolledTooltip color="primary" placement="bottom" target="TooltipBottom">
                                            Tooltip on bottom
                                            </UncontrolledTooltip>

                                        <UncontrolledTooltip color="primary" placement="left" target="TooltipLeft">
                                            Tooltip on left
                                            </UncontrolledTooltip>
                                        <Button color="primary" id="TooltipTop"> Tooltip on top</Button>{' '}
                                        <Button color="primary" id="TooltipRight"> Tooltip on right</Button>{' '}
                                        <Button color="primary" id="TooltipBottom"> Tooltip on bottom</Button>{' '}
                                        <Button color="primary" id="TooltipLeft"> Tooltip on left</Button>
                                    </div>

                                </CardBody>
                            </Card>

                        </Col>
                    </Row>

                    <Row>
                        <Col lg="12">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title m-b-30">Pagination</h4>

                                    <Row>
                                        <Col lg="6">
                                            <h5 className="font-16 mt-0">Default Example</h5>
                                            <p className="text-muted m-b-30">Pagination links indicate a series of related content exists across multiple pages.</p>

                                            <Pagination aria-label="Page navigation example">
                                                <PaginationItem><PaginationLink href="#">Previous</PaginationLink ></PaginationItem>
                                                <PaginationItem><PaginationLink href="#">1</PaginationLink ></PaginationItem>
                                                <PaginationItem><PaginationLink href="#">2</PaginationLink ></PaginationItem>
                                                <PaginationItem><PaginationLink href="#">3</PaginationLink ></PaginationItem>
                                                <PaginationItem><PaginationLink href="#">Next</PaginationLink ></PaginationItem>
                                            </Pagination>

                                            <Pagination aria-label="Page navigation example">
                                                <PaginationItem>
                                                    <PaginationLink first href="#" />
                                                </PaginationItem>
                                                <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                                <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                                <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink last href="#" />
                                                </PaginationItem>
                                            </Pagination>

                                        </Col>

                                        <Col lg="6">
                                            <h5 className="font-16 mt-0">Disabled and active states</h5>
                                            <p className="text-muted m-b-30">Pagination links are customizable for
                                                        different circumstances. Use <code>.disabled</code> for links that appear
                                                        un-clickable and <code>.active</code> to
                                                        indicate the current page.</p>


                                            <Pagination aria-label="...">
                                                <PaginationItem disabled>
                                                    <PaginationLink href="#">Previous</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                                <PaginationItem active>
                                                    <PaginationLink href="#">2 <span className="sr-only">(current)</span></PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">Next</PaginationLink>
                                                </PaginationItem>
                                            </Pagination>

                                            <Pagination aria-label="...">
                                                <PaginationItem disabled>
                                                    <span className="page-link">Previous</span>
                                                </PaginationItem>
                                                <PaginationItem ><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                                <PaginationItem active>
                                                    <span className="page-link">2 <span className="sr-only">(current)</span></span>
                                                </PaginationItem>
                                                <PaginationItem ><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                                <PaginationItem >
                                                    <PaginationLink href="#">Next</PaginationLink>
                                                </PaginationItem>
                                            </Pagination>

                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg="6">
                                            <h5 className="font-16 m-t-30">Sizing</h5>
                                            <p className="text-muted m-b-30">Fancy larger or smaller pagination? Add size = <code>lg</code> or <code>sm</code> for additional
                                                        sizes.</p>

                                            <Pagination size="lg" aria-label="...">
                                                <PaginationItem disabled>
                                                    <PaginationLink href="#">Previous</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem ><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                                <PaginationItem ><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                                <PaginationItem ><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                                <PaginationItem >
                                                    <PaginationLink href="#">Next</PaginationLink>
                                                </PaginationItem>
                                            </Pagination>

                                            <Pagination size="sm" aria-label="...">
                                                <PaginationItem disabled>
                                                    <PaginationLink href="#">Previous</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                                <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                                <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">Next</PaginationLink>
                                                </PaginationItem>
                                            </Pagination>

                                        </Col>

                                        <Col lg="6">
                                            <h5 className="font-16 m-t-30">Alignment</h5>
                                            <p className="text-muted m-b-30">Change the alignment of pagination
                                                        components with flexbox utilities.</p>

                                            <Pagination aria-label="Page navigation example" className="pagination justify-content-center">
                                                <PaginationItem disabled>
                                                    <PaginationLink href="#">Previous</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                                <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                                <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">Next</PaginationLink>
                                                </PaginationItem>
                                            </Pagination>

                                            <Pagination aria-label="Page navigation example" className="pagination justify-content-end">
                                                <PaginationItem disabled>
                                                    <PaginationLink href="#" tabIndex="-1">Previous</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                                <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                                <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">Next</PaginationLink>
                                                </PaginationItem>
                                            </Pagination>

                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Border spinner</h4>
                                    <p className="text-muted m-b-20">Use the border spinners for a lightweight loading indicator.</p>
                                    <div>
                                        <Spinner color="primary" />{' '}
                                        <Spinner color="secondary" />{' '}
                                        <Spinner color="success" />{' '}
                                        <Spinner color="info" />{' '}
                                        <Spinner color="warning" />{' '}
                                        <Spinner color="danger" />{' '}
                                        <Spinner color="dark" />
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Growing spinner</h4>
                                    <p className="text-muted m-b-20">If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>
                                    <div>
                                        <Spinner type="grow" color="primary" />{' '}
                                        <Spinner type="grow" color="secondary" />{' '}
                                        <Spinner type="grow" color="success" />{' '}
                                        <Spinner type="grow" color="info" />{' '}
                                        <Spinner type="grow" color="warning" />{' '}
                                        <Spinner type="grow" color="danger" />{' '}
                                        <Spinner type="grow" color="dark" />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment >
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(Uigeneral));