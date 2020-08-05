import React, { Component } from 'react';
import LanguageMenu from './Menus/languageMenu';
import { Link } from 'react-router-dom';
import NotificationMenu from './Menus/notificationMenu';
import ProfileMenu from './Menus/profileMenu';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { isLarge } from '../../store/actions';
import { connect } from 'react-redux';

import logoLight from "../../images/logo-light.png";
import logoSmall from "../../images/logo-sm.png";

class Topbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      create_menu: false,
      toggle: false,
    };
    this.toggleCreate = this.toggleCreate.bind(this);
  }

  toggleCreate() {
    this.setState(prevState => ({
      create_menu: !prevState.create_menu
    }));
  }

  sidebarToggle = () => {
    document.body.classList.toggle('enlarged');
    // this.props.isLarge(!this.props.is_large_state);
  }

  toggleFullscreen() {
    if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="topbar">
          <div className="topbar-left">
            <Link to="/" className="logo">
              <span className="text-white">
                  Dental Admin
              </span>
              <i>
                <img src={logoSmall} alt="" height="22" />
              </i>
            </Link>
          </div>
          <nav className="navbar-custom">
            <ul className="navbar-right list-inline float-right mb-0">
              {/* <li className="dropdown notification-list list-inline-item d-none d-md-inline-block mr-1">
                <form role="search" className="app-search">
                  <div className="form-group mb-0">
                    <input type="text" className="form-control" placeholder="Search.." />
                    <button type="submit"><i className="fa fa-search"></i></button>
                  </div>
                </form>
              </li>
              <LanguageMenu /> */}

             {/* <li className="dropdown notification-list list-inline-item d-none d-md-inline-block mr-1">
                <Link onClick={this.toggleFullscreen} className="nav-link waves-effect" to="#" id="btn-fullscreen">
                  <i className="mdi mdi-fullscreen noti-icon"></i>
                </Link>
              </li> */}

              {/*<NotificationMenu />*/}
              <ProfileMenu />
            </ul>
            <ul className="list-inline menu-left mb-0">
              <li className="float-left">
                <button onClick={this.sidebarToggle} className="button-menu-mobile open-left waves-effect">
                  <i className="mdi mdi-menu"></i>
                </button>
              </li>

              {/*<li className="d-none d-sm-block">
                <Dropdown isOpen={this.state.create_menu} toggle={this.toggleCreate} className="pt-3 d-inline-block">
                  <DropdownToggle className="btn btn-light" caret tag="a">
                    Create {' '}{' '}{' '}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a" href="#">Action</DropdownItem>
                    <DropdownItem tag="a" href="#">Another action</DropdownItem>
                    <DropdownItem tag="a" href="#">Something else here</DropdownItem>
                    <div className="dropdown-divider"></div>
                    <DropdownItem tag="a" href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>*/}
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  const { is_large_state } = state.Layout;
  return { is_large_state };
}


export default (connect(mapStatetoProps, { isLarge })(Topbar));
