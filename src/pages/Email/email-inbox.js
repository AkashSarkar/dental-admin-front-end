import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Breadcrumb, BreadcrumbItem, Input, Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

//Images
import user2 from '../../images/users/user-2.jpg';
import user3 from '../../images/users/user-3.jpg';
import user4 from '../../images/users/user-4.jpg';
import user6 from '../../images/users/user-6.jpg';


class EmailInbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folder_menu: false,
            tag_menu: false,
            more_menu: false
        };
        this.toggleFolder = this.toggleFolder.bind(this);
        this.toggleTag = this.toggleTag.bind(this);
        this.toggleMore = this.toggleMore.bind(this);
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    toggleFolder() {
        this.setState(prevState => ({
            folder_menu: !prevState.folder_menu
        }));
    }

    toggleTag() {
        this.setState(prevState => ({
            tag_menu: !prevState.tag_menu
        }));
    }

    toggleMore() {
        this.setState(prevState => ({
            more_menu: !prevState.more_menu
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <h4 className="page-title">Inbox</h4>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">Veltrix</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Email</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Inbox</BreadcrumbItem>
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
                            <Card className="email-leftbar">
                                <Link to="email-compose" className="btn btn-danger btn-rounded btn-custom btn-block waves-effect waves-light">Compose</Link>
                                <div className="mail-list m-t-20">
                                    <Link to="#" className="active">Inbox <span className="ml-1">(18)</span></Link>
                                    <Link to="#">Starred</Link>
                                    <Link to="#">Important</Link>
                                    <Link to="#">Draft</Link>
                                    <Link to="#">Sent Mail</Link>
                                    <Link to="#">Trash</Link>
                                </div>
                                <h6 className="m-t-30">Labels</h6>
                                <div className="mail-list m-t-20">
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-info float-right"></span>Theme Support</Link>
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-warning float-right"></span>Freelance</Link>
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-primary float-right"></span>Social</Link>
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-danger float-right"></span>Friends</Link>
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-success float-right"></span>Family</Link>
                                </div>
                                <h6 className="m-t-30">Chat</h6>
                                <div className="m-t-20">
                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src={user2} alt="veltrix" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">Scott Median</p>
                                            <p className="text-muted">Hello</p>
                                        </div>
                                    </Link>
                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src={user3} alt="veltrix" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">Julian Rosa</p>
                                            <p className="text-muted">What about our next..</p>
                                        </div>
                                    </Link>

                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src={user4} alt="veltrix" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">David Medina</p>
                                            <p className="text-muted">Yeah everything is fine</p>
                                        </div>
                                    </Link>

                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src={user6} alt="veltrix" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">Jay Baker</p>
                                            <p className="text-muted">Wow that's great</p>
                                        </div>
                                    </Link>
                                </div>
                            </Card>

                            <div className="email-rightbar mb-3">
                                <Card>
                                    <div className="btn-toolbar p-3" role="toolbar">
                                        <div className="btn-group mo-mb-2">
                                            <Button type="button" color="primary" className="waves-light waves-effect"><i className="fa fa-inbox"></i></Button>
                                            <Button type="button" color="primary" className="waves-light waves-effect"><i className="fa fa-exclamation-circle"></i></Button>
                                            <Button type="button" color="primary" className="waves-light waves-effect"><i className="far fa-trash-alt"></i></Button>
                                        </div>
                                        <div className="btn-group ml-1 mo-mb-2">
                                            <Dropdown isOpen={this.state.folder_menu} toggle={this.toggleFolder}>
                                                <DropdownToggle color="primary" className="waves-light waves-effect" caret>
                                                    <i className="fa fa-folder"></i>{'  '}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem tag="a" href="#">Updates</DropdownItem>
                                                    <DropdownItem tag="a" href="#">Social</DropdownItem>
                                                    <DropdownItem tag="a" href="#">Team Manage</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                        <div className="btn-group ml-1 mo-mb-2">
                                            <Dropdown isOpen={this.state.tag_menu} toggle={this.toggleTag}>
                                                <DropdownToggle color="primary" className="waves-light waves-effect" caret>
                                                    <i className="fa fa-tag"></i>{'  '}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem tag="a" href="#">Updates</DropdownItem>
                                                    <DropdownItem tag="a" href="#">Social</DropdownItem>
                                                    <DropdownItem tag="a" href="#">Team Manage</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                        <div className="btn-group ml-1 mo-mb-2">
                                            <Dropdown isOpen={this.state.more_menu} toggle={this.toggleMore}>
                                                <DropdownToggle color="primary" className="waves-light waves-effect" caret>
                                                    More {'  '}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem tag="a" href="#">Mark as Unread</DropdownItem>
                                                    <DropdownItem tag="a" href="#">Mark as Important</DropdownItem>
                                                    <DropdownItem tag="a" href="#">Add to Tasks</DropdownItem>
                                                    <DropdownItem tag="a" href="#">Add Star</DropdownItem>
                                                    <DropdownItem tag="a" href="#">Mute</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <ul className="message-list">
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk19" />
                                                    <Label for="chk19" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">Peter, me (3)</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject">Hello – <span className="teaser">Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)</span>
                                                </Link>
                                                <div className="date">Mar 6</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk20" />
                                                    <Label for="chk20" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">me, Susanna (7)</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject"><span className="badge-warning badge mr-2">Freelance</span>Since you asked... and i'm
                                                    inconceivably bored at the train station – 
                                                        <span className="teaser"> Alright thanks. I'll have to re-book that somehow, i'll get back to you.</span>
                                                </Link>
                                                <div className="date">Mar. 6</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk6" />
                                                    <Label for="chk6" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">Web Support Dennis</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject">Re: New mail settings –
                                                        <span className="teaser"> Will you answer him asap?</span>
                                                </Link>
                                                <div className="date">Mar 7</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk7" />
                                                    <Label for="chk7" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">me, Peter (2)</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject"><span className="badge-info badge mr-2">Support</span>Off on Thursday -
                                                        <span className="teaser"> Eff that place, you might as well stay here with us instead! Sent from my iPhone 4  4 mar 2014 at 5:55 pm</span>
                                                </Link>
                                                <div className="date">Mar 4</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk8" />
                                                    <Label for="chk8" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">Medium</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject"><span className="badge-primary badge mr-2">Social</span>This Week's Top Stories –
                                                        <span className="teaser"> Our top pick for you on Medium this week The Man Who Destroyed America’s Ego</span>
                                                </Link>
                                                <div className="date">Feb 28</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk9" />
                                                    <Label for="chk9" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">Death to Stock</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject">Montly High-Res Photos –
                                                        <span className="teaser"> To create this month's pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio.</span>
                                                </Link>
                                                <div className="date">Feb 28</div>
                                            </div>
                                        </li>
                                        <li className="unread">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk3" />
                                                    <Label for="chk3" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">Randy, me (5)</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject"><span className="badge-success badge mr-2">Family</span>Last pic over my village –
                                                        <span className="teaser"> Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!</span>
                                                </Link>
                                                <div className="date">5:01 am</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk4" />
                                                    <Label for="chk4" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">Andrew Zimmer</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject">Mochila Beta: Subscription Confirmed
                                                        – <span className="teaser"> You've been confirmed! Welcome to the ruling className of the inbox. For your records, here is a copy of the information you submitted to us...</span>
                                                </Link>
                                                <div className="date">Mar 8</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk5" />
                                                    <Label for="chk5" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">Infinity HR</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject">Sveriges Hetaste sommarjobb –
                                                        <span className="teaser"> Hej Nicklas Sandell! Vi vill bjuda in dig till "First tour 2014", ett rekryteringsevent som erbjuder jobb på 16 semesterorter iSverige.</span>
                                                </Link>
                                                <div className="date">Mar 8</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk10" />
                                                    <Label for="chk10" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">Revibe</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject"><span className="badge-danger badge mr-2">Friends</span>Weekend on Revibe –
                                                        <span className="teaser"> Today's Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen!</span>
                                                </Link>
                                                <div className="date">Feb 27</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk11" />
                                                    <Label for="chk11" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">Erik, me (5)</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject">Regarding our meeting –
                                                        <span className="teaser"> That's great, see you on Thursday!</span>
                                                </Link>
                                                <div className="date">Feb 24</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk12" />
                                                    <Label for="chk12" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">KanbanFlow</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject"><span className="badge-primary badge mr-2">Social</span>Task assigned: Clone ARP's website
                                                        – <span className="teaser"> You have been assigned a task by Alex@Work on the board Web.</span>
                                                </Link>
                                                <div className="date">Feb 24</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk13" />
                                                    <Label for="chk13" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">Tobias Berggren</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject">Let's go fishing! –
                                                        <span className="teaser"> Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.</span>
                                                </Link>
                                                <div className="date">Feb 23</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk14" />
                                                    <Label for="chk14" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">Charukaw, me (7)</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject">Hey man – <span className="teaser"> Nah man sorry i don't. Should i get it?</span>
                                                </Link>
                                                <div className="date">Feb 23</div>
                                            </div>
                                        </li>
                                        <li className="unread">
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk15" />
                                                    <Label for="chk15" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">me, Peter (5)</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject"><span className="badge-info badge mr-2">Support</span>Home again! – <span className="teaser"> That's just perfect! See you tomorrow.</span>
                                                </Link>
                                                <div className="date">Feb 21</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk16" />
                                                    <Label for="chk16" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">Stack Exchange</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject">1 new items in your Stackexchange inbox
                                                        – <span className="teaser"> The following items were added to your Stack Exchange global inbox since you last checked it.</span>
                                                </Link>
                                                <div className="date">Feb 21</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk17" />
                                                    <Label for="chk17" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">Google Drive Team</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject">You can now use your storage in Google
                                                        Drive – <span className="teaser"> Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.</span>
                                                </Link>
                                                <div className="date">Feb 20</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-mail col-mail-1">
                                                <div className="checkbox-wrapper-mail">
                                                    <Input type="checkbox" id="chk18" />
                                                    <Label for="chk18" className="toggle"></Label>
                                                </div>
                                                <Link to="#" className="title">me, Susanna (11)</Link><span className="star-toggle far fa-star"></span>
                                            </div>
                                            <div className="col-mail col-mail-2">
                                                <Link to="#" className="subject">Train/Bus – <span className="teaser"> Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.</span>
                                                </Link>
                                                <div className="date">Feb 19</div>
                                            </div>
                                        </li>
                                    </ul>
                                </Card>

                                <Row className="m-t-20">
                                    <Col md="7">
                                        Showing 1 - 20 of 1,524
                                </Col>
                                    <Col md="5">
                                        <div className="btn-group float-right">
                                            <Button type="button" color="success" size="sm" className="waves-effect"><i className="fa fa-chevron-left"></i></Button>
                                            <Button type="button" color="success" size="sm" className="waves-effect"><i className="fa fa-chevron-right"></i></Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(EmailInbox));