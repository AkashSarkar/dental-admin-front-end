import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Button, Breadcrumb, BreadcrumbItem, Input, Table } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SettingMenu from '../Subpages/Settingmenu';
import { Scrollbars } from 'react-custom-scrollbars';

// Charts
import LineAreaChart from '../AllCharts/apex/lineareachart';
import RadialChart from '../AllCharts/apex/apexdonut';
import Apexdonut from '../AllCharts/apex/apexdonut1';
import SparkLine from '../AllCharts/sparkline/sparkline';
import SparkLine1 from '../AllCharts/sparkline/sparkline1';
import Salesdonut from '../AllCharts/apex/salesdonut';

import 'chartist/dist/scss/chartist.scss';


//Images
import img1 from '../../images/services-icon/01.png';
import img2 from '../../images/services-icon/02.png';
import img3 from '../../images/services-icon/03.png';
import img4 from '../../images/services-icon/04.png';
import user2 from '../../images/users/user-2.jpg';
import user3 from '../../images/users/user-3.jpg';
import user4 from '../../images/users/user-4.jpg';
import user5 from '../../images/users/user-5.jpg';
import user6 from '../../images/users/user-6.jpg';
import smimg1 from '../../images/small/img-1.jpg';
import smimg2 from '../../images/small/img-2.jpg';
import SideNav from '../../components/Layout/SideNav';
import Sidebar from '../../components/Layout/Sidebar';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                <h4 className="page-title">Dashboard</h4>
                <Breadcrumb>
                  <BreadcrumbItem active>Welcome to dental Dashboard</BreadcrumbItem>
                </Breadcrumb>
              </Col>
            </Row>
          </div>
          {/*<Row>
                        <Col xl="3" md="6">
                            <Card className="mini-stat bg-primary text-white">
                                <CardBody>
                                    <div className="mb-4">
                                        <div className="float-left mini-stat-img mr-4">
                                            <img src={img1} alt="" />
                                        </div>
                                        <h5 className="font-16 text-uppercase mt-0 text-white-50">Orders</h5>
                                        <h4 className="font-500">1,685 <i className="mdi mdi-arrow-up text-success ml-2"></i></h4>
                                        <div className="mini-stat-label bg-success">
                                            <p className="mb-0">+ 12%</p>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <div className="float-right">
                                            <Link to="#" className="text-white-50"><i className="mdi mdi-arrow-right h5"></i></Link>
                                        </div>
                                        <p className="text-white-50 mb-0">Since last month</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="3" md="6">
                            <Card className="mini-stat bg-primary text-white">
                                <CardBody>
                                    <div className="mb-4">
                                        <div className="float-left mini-stat-img mr-4">
                                            <img src={img2} alt="" />
                                        </div>
                                        <h5 className="font-16 text-uppercase mt-0 text-white-50">Revenue</h5>
                                        <h4 className="font-500">52,368 <i className="mdi mdi-arrow-down text-danger ml-2"></i></h4>
                                        <div className="mini-stat-label bg-danger">
                                            <p className="mb-0">- 28%</p>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <div className="float-right">
                                            <Link to="#" className="text-white-50"><i className="mdi mdi-arrow-right h5"></i></Link>
                                        </div>
                                        <p className="text-white-50 mb-0">Since last month</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="3" md="6">
                            <Card className="mini-stat bg-primary text-white">
                                <CardBody>
                                    <div className="mb-4">
                                        <div className="float-left mini-stat-img mr-4">
                                            <img src={img3} alt="" />
                                        </div>
                                        <h5 className="font-16 text-uppercase mt-0 text-white-50">Average Price</h5>
                                        <h4 className="font-500">15.8 <i className="mdi mdi-arrow-up text-success ml-2"></i></h4>
                                        <div className="mini-stat-label bg-info">
                                            <p className="mb-0"> 00%</p>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <div className="float-right">
                                            <Link to="#" className="text-white-50"><i className="mdi mdi-arrow-right h5"></i></Link>
                                        </div>
                                        <p className="text-white-50 mb-0">Since last month</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="3" md="6">
                            <Card className="mini-stat bg-primary text-white">
                                <CardBody>
                                    <div className="mb-4">
                                        <div className="float-left mini-stat-img mr-4">
                                            <img src={img4} alt="" />
                                        </div>
                                        <h5 className="font-16 text-uppercase mt-0 text-white-50">Product Sold</h5>
                                        <h4 className="font-500">2436 <i className="mdi mdi-arrow-up text-success ml-2"></i></h4>
                                        <div className="mini-stat-label bg-warning">
                                            <p className="mb-0">+ 84%</p>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <div className="float-right">
                                            <Link to="#" className="text-white-50"><i className="mdi mdi-arrow-right h5"></i></Link>
                                        </div>

                                        <p className="text-white-50 mb-0">Since last month</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>*/}

          {/*<Row>
                        <Col xl="9">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title mb-5">Monthly Earning</h4>
                                    <Row>
                                        <Col lg="7">
                                            <div>
                                                <LineAreaChart />
                                            </div>
                                        </Col>
                                        <Col lg="5">
                                            <Row>
                                                <Col md="6">
                                                    <div className="text-center">
                                                        <p className="text-muted mb-4">This month</p>
                                                        <h4>$34,252</h4>
                                                        <p className="text-muted mb-4">It will be as simple as in fact it will be occidental.</p>
                                                        <RadialChart />
                                                    </div>
                                                </Col>
                                                <Col md="6">
                                                    <div className="text-center">
                                                        <p className="text-muted mb-4">Last month</p>
                                                        <h4>$36,253</h4>
                                                        <p className="text-muted mb-4">It will be as simple as in fact it will be occidental.</p>
                                                        <Apexdonut />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="3">
                            <Card>
                                <CardBody>
                                    <div>
                                        <h4 className="mt-0 header-title mb-4">Sales Analytics</h4>
                                    </div>
                                    <div className="wid-peity mb-4">
                                        <Row>
                                            <Col md="6">
                                                <div>
                                                    <p className="text-muted">Online</p>
                                                    <h5 className="mb-4">1,542</h5>
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="mb-4">
                                                    <SparkLine />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="wid-peity mb-4">
                                        <Row>
                                            <Col md-="6">
                                                <div>
                                                    <p className="text-muted">Offline</p>
                                                    <h5 className="mb-4">6,451</h5>
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="mb-4">
                                                    <SparkLine1 />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="">
                                        <Row>
                                            <Col md="6">
                                                <div>
                                                    <p className="text-muted">Marketing</p>
                                                    <h5>84,574</h5>
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="mb-4">
                                                    <SparkLine />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="3">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title mb-4">Sales Report</h4>
                                    <div className="cleafix">
                                        <p className="float-left"><i className="mdi mdi-calendar mr-1 text-primary"></i> Jan 01 - Jan 31</p>
                                        <h5 className="font-18 text-right">$4230</h5>
                                    </div>
                                    <div id="ct-donut" className="ct-chart wid pt-4">
                                        <Salesdonut />
                                    </div>
                                    <div className="mt-4">
                                        <Table className="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td><span className="badge badge-primary">Desk</span></td>
                                                    <td>Desktop</td>
                                                    <td className="text-right">54.5%</td>
                                                </tr>
                                                <tr>
                                                    <td><span className="badge badge-success">Mob</span></td>
                                                    <td>Mobile</td>
                                                    <td className="text-right">28.0%</td>
                                                </tr>
                                                <tr>
                                                    <td><span className="badge badge-warning">Tab</span></td>
                                                    <td>Tablets</td>
                                                    <td className="text-right">17.5%</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title mb-4">Activity</h4>
                                    <ol className="activity-feed">
                                        <li className="feed-item">
                                            <div className="feed-item-list">
                                                <span className="date">Jan 22</span>
                                                <span className="activity-text">Responded to need “Volunteer Activities”</span>
                                            </div>
                                        </li>
                                        <li className="feed-item">
                                            <div className="feed-item-list">
                                                <span className="date">Jan 20</span>
                                                <span className="activity-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui deleniti atque...<Link to="#" className="text-success">Read more</Link></span>
                                            </div>
                                        </li>
                                        <li className="feed-item">
                                            <div className="feed-item-list">
                                                <span className="date">Jan 19</span>
                                                <span className="activity-text">Joined the group “Boardsmanship Forum”</span>
                                            </div>
                                        </li>
                                        <li className="feed-item">
                                            <div className="feed-item-list">
                                                <span className="date">Jan 17</span>
                                                <span className="activity-text">Responded to need “In-Kind Opportunity”</span>
                                            </div>
                                        </li>
                                        <li className="feed-item">
                                            <div className="feed-item-list">
                                                <span className="date">Jan 16</span>
                                                <span className="activity-text">Sed ut perspiciatis unde omnis iste natus error sit rem.</span>
                                            </div>
                                        </li>
                                    </ol>
                                    <div className="text-center">
                                        <Link to="#" className="btn btn-primary">Load More</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="5">
                            <Row>
                                <Col md="6">
                                    <Card className="text-center">
                                        <CardBody>
                                            <div className="py-4">
                                                <i className="ion ion-ios-checkmark-circle-outline display-4 text-success"></i>
                                                <h5 className="text-primary mt-4">Order Successful</h5>
                                                <p className="text-muted">Thanks you so much for your order.</p>
                                                <div className="mt-4">
                                                    <Link to="#" className="btn btn-primary btn-sm">Chack Status</Link>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <Card className="bg-primary">
                                        <CardBody>
                                            <div className="text-center text-white py-4">
                                                <h5 className="mt-0 mb-4 text-white-50 font-16">Top Product Sale</h5>
                                                <h1>1452</h1>
                                                <p>Computer</p>
                                                <p className="text-white-50 mb-0">At solmen va esser necessi far uniform myth...
                                                <Link to="#" className="text-white"> View more</Link></p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <Card>
                                        <CardBody>
                                            <h4 className="mt-0 header-title mb-4">Client Reviews</h4>
                                            <p className="text-muted mb-5">" Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators it would be necessary. "</p>
                                            <div className="float-right mt-2">
                                                <Link to="#" className="text-primary">
                                                    <i className="mdi mdi-arrow-right h5"></i>
                                                </Link>
                                            </div>
                                            <h6 className="mb-0">
                                                <img src={user3} alt="" className="thumb-sm rounded-circle mr-2" /> James Athey
                                            </h6>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="8">
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title mb-4">Latest Trasaction</h4>
                                    <div className="table-responsive">
                                        <Table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">(#) Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col" colSpan="2">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">#14256</th>
                                                    <td>
                                                        <div>
                                                            <img src={user2} alt="" className="thumb-md rounded-circle mr-2" /> Philip Smead
                                                        </div>
                                                    </td>
                                                    <td>15/1/2018</td>
                                                    <td>$94</td>
                                                    <td><span className="badge badge-success">Delivered</span></td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="btn btn-primary btn-sm">Edit</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#14257</th>
                                                    <td>
                                                        <div>
                                                            <img src={user3} alt="" className="thumb-md rounded-circle mr-2" /> Brent Shipley
                                                        </div>
                                                    </td>
                                                    <td>16/1/2019</td>
                                                    <td>$112</td>
                                                    <td><span className="badge badge-warning">Pending</span></td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="btn btn-primary btn-sm">Edit</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#14258</th>
                                                    <td>
                                                        <div>
                                                            <img src={user4} alt="" className="thumb-md rounded-circle mr-2" /> Robert Sitton
                                                    </div>
                                                    </td>
                                                    <td>17/1/2019</td>
                                                    <td>$116</td>
                                                    <td><span className="badge badge-success">Delivered</span></td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="btn btn-primary btn-sm">Edit</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#14259</th>
                                                    <td>
                                                        <div>
                                                            <img src={user5} alt="" className="thumb-md rounded-circle mr-2" /> Alberto Jackson
                                                    </div>
                                                    </td>
                                                    <td>18/1/2019</td>
                                                    <td>$109</td>
                                                    <td><span className="badge badge-danger">Cancel</span></td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="btn btn-primary btn-sm">Edit</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#14260</th>
                                                    <td>
                                                        <div>
                                                            <img src={user6} alt="" className="thumb-md rounded-circle mr-2" /> David Sanchez
                                                        </div>
                                                    </td>
                                                    <td>19/1/2019</td>
                                                    <td>$120</td>
                                                    <td><span className="badge badge-success">Delivered</span></td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="btn btn-primary btn-sm">Edit</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl="4">
                            <Card className="dash-chart">
                                <CardBody style={{ height: "541px" }}>
                                    <h4 className="mt-0 header-title mb-4">Chat</h4>
                                    <div className="chat-conversation">
                                        <Scrollbars style={{ height: "400px" }} autoHide>
                                            <ul className="conversation-list slimscroll" style={{ maxHeight: "400px" }}>
                                                <li className="clearfix">
                                                    <div className="chat-avatar">
                                                        <img src={user2} alt="male" />
                                                        <span className="time">10:00</span>
                                                    </div>
                                                    <div className="conversation-text">
                                                        <div className="ctext-wrap">
                                                            <span className="user-name">John Deo</span>
                                                            <p>Hello!</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="clearfix odd">
                                                    <div className="chat-avatar">
                                                        <img src={user3} alt="Female" />
                                                        <span className="time">10:01</span>
                                                    </div>
                                                    <div className="conversation-text">
                                                        <div className="ctext-wrap">
                                                            <span className="user-name">Smith</span>
                                                            <p>Hi, How are you? What about our next meeting?</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
                                                    <div className="chat-avatar">
                                                        <img src={user2} alt="male" />
                                                        <span className="time">10:04</span>
                                                    </div>
                                                    <div className="conversation-text">
                                                        <div className="ctext-wrap">
                                                            <span className="user-name">John Deo</span>
                                                            <p>Yeah everything is fine</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="clearfix odd">
                                                    <div className="chat-avatar">
                                                        <img src={user3} alt="male" />
                                                        <span className="time">10:05</span>
                                                    </div>
                                                    <div className="conversation-text">
                                                        <div className="ctext-wrap">
                                                            <span className="user-name">Smith</span>
                                                            <p>Wow that's great</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="clearfix odd">
                                                    <div className="chat-avatar">
                                                        <img src={user3} alt="male" />
                                                        <span className="time">10:08</span>
                                                    </div>
                                                    <div className="conversation-text">
                                                        <div className="ctext-wrap">
                                                            <span className="user-name mb-2">Smith</span>
                                                            <img src={smimg1} alt="" height="48px" className="rounded mr-2" />{' '}
                                                            <img src={smimg2} alt="" height="48px" className="rounded" />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Scrollbars>
                                        <Row className="mt-3 pt-1">
                                            <Col md="9" className="chat-inputbar col-8">
                                                <Input type="text" className="chat-input" placeholder="Enter your text" />
                                            </Col>
                                            <Col md="3" className="chat-send col-4">
                                                <Button type="submit" color="success" className="btn-block">Send</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>*/}

        </Container>

      </React.Fragment>
    );
  }
}

export default withRouter(connect(null, { activateAuthLayout })(Dashboard));
