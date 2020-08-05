import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNav extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <div id="sidebar-menu">
          <ul className="metismenu" id="menu">
            {/*<li className="menu-title">Main</li>*/}
            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="ti-home"></i>
                <span> Dashboard </span>
              </Link>
            </li>
            <li>
              <Link to="company-profile" className="waves-effect">
                <i className="mdi mdi-settings"></i><span> Company Profile </span>
              </Link>
            </li>
            <li>
              <Link to="/sliders" className="waves-effect">
                <i className="ti-calendar"></i><span> Sliders </span>
              </Link>
            </li>

            {/*<li className="menu-title">Components</li>*/}

            {/* <li>
              <Link to="/#" className="waves-effect"><i className="ti-package"></i> <span> UI Elements <span
                className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </Link>
              <ul className="submenu">
                <li><Link to="ui-alerts">Alerts</Link></li>
                <li><Link to="ui-buttons">Buttons</Link></li>
                <li><Link to="ui-cards">Cards</Link></li>
                <li><Link to="ui-carousel">Carousel</Link></li>
                <li><Link to="ui-dropdowns">Dropdowns</Link></li>
                <li><Link to="ui-grid">Grid</Link></li>
                <li><Link to="ui-images">Images</Link></li>
                <li><Link to="ui-lightbox">Lightbox</Link></li>
                <li><Link to="ui-modals">Modals</Link></li>
                <li><Link to="ui-rangeslider">Range Slider</Link></li>
                <li><Link to="ui-session-timeout">Session Timeout</Link></li>
                <li><Link to="ui-progressbars">Progress Bars</Link></li>
                <li><Link to="ui-sweet-alert">Sweet-Alert</Link></li>
                <li><Link to="ui-tabs-accordions">Tabs & Accordions</Link></li>
                <li><Link to="ui-typography">Typography</Link></li>
                <li><Link to="ui-video">Video</Link></li>
                <li><Link to="ui-general">General</Link></li>
                <li><Link to="ui-colors">Colors</Link></li>
                <li><Link to="ui-rating">Rating</Link></li>
              </ul>
            </li>*/}

            {/* <li>
              <Link to="/#" className="waves-effect"><i className="ti-receipt"></i><span> Forms <span
                className="badge badge-pill badge-success float-right">9</span> </span></Link>
              <ul className="submenu">
                <li><Link to="form-elements">Form Elements</Link></li>
                <li><Link to="form-validation">Form Validation</Link></li>
                <li><Link to="form-advanced">Form Advanced</Link></li>
                <li><Link to="form-editors">Form Editors</Link></li>
                <li><Link to="form-uploads">Form File Upload</Link></li>
                <li><Link to="form-xeditable">Form Xeditable</Link></li>
                <li><Link to="form-repeater">Form Repeater</Link></li>
                <li><Link to="form-wizard">Form Wizard</Link></li>
                <li><Link to="form-mask">Form Mask</Link></li>
              </ul>
            </li>*/}

            {/*  <li>
              <Link to="/#" className="waves-effect"><i className="ti-pie-chart"></i><span> Charts <span
                className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
              <ul className="submenu">
                <li><Link to="charts-apex">Apex Chart</Link></li>
                <li><Link to="charts-chartist">Chartist Chart</Link></li>
                <li><Link to="charts-chartjs">Chartjs Chart</Link></li>
                <li><Link to="charts-knob">Knob Chart</Link></li>
                <li><Link to="charts-echart">E - Chart</Link></li>
                <li><Link to="charts-sparkline">Sparkline Chart</Link></li>
              </ul>
            </li>*/}

            {/*<li>
              <Link to="/#" className="waves-effect"><i className="ti-view-grid"></i><span> Tables <span
                className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
              <ul className="submenu">
                <li><Link to="tables-basic">Basic Tables</Link></li>
                <li><Link to="tables-datatable">Data Table</Link></li>
                <li><Link to="tables-responsive">Responsive Table</Link></li>
                <li><Link to="tables-editable">Editable Table</Link></li>
              </ul>
            </li>*/}

            {/* <li>
              <Link to="/#" className="waves-effect"><i className="ti-face-smile"></i> <span> Icons  <span
                className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></span> </Link>
              <ul className="submenu">
                <li><Link to="icons-material">Material Design</Link></li>
                <li><Link to="icons-fontawesome">Font Awesome</Link></li>
                <li><Link to="icons-ion">Ion Icons</Link></li>
                <li><Link to="icons-themify">Themify Icons</Link></li>
                <li><Link to="icons-dripicons">Dripicons</Link></li>
                <li><Link to="icons-typicons">Typicons Icons</Link></li>
              </ul>
            </li>*/}

            {/*<li>
              <Link to="/#" className="waves-effect"><i className="ti-location-pin"></i><span> Maps <span
                className="badge badge-pill badge-danger float-right">2</span> </span></Link>
              <ul className="submenu">
                <li><Link to="maps-google"> Google Map</Link></li>
                <li><Link to="maps-vector"> Vector Map</Link></li>
              </ul>
            </li>*/}

            {/*<li className="menu-title">Extras</li>*/}

            {/* <li>
              <Link to="/#" className="waves-effect"><i className="ti-archive"></i><span> Authentication <span
                className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
              <ul className="submenu">
                <li><Link to="pages-login-2">Login 2</Link></li>
                <li><Link to="pages-register-2">Register 2</Link></li>
                <li><Link to="pages-recoverpw-2">Recover Password 2</Link></li>
                <li><Link to="pages-lock-screen-2">Lock Screen 2</Link></li>
              </ul>
            </li>*/}

            {/*<li>
              <Link to="/#" className="waves-effect"><i className="ti-support"></i><span> Extra Pages <span
                className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
              <ul className="submenu">
                <li><Link to="pages-timeline">Timeline</Link></li>
                <li><Link to="pages-invoice">Invoice</Link></li>
                <li><Link to="pages-directory">Directory</Link></li>
                <li><Link to="pages-blank">Blank Page</Link></li>
                <li><Link to="pages-404">Error 404</Link></li>
                <li><Link to="pages-500">Error 500</Link></li>
                <li><Link to="pages-pricing">Pricing</Link></li>
                <li><Link to="pages-gallery">Gallery</Link></li>
                <li><Link to="pages-maintenance">Maintenance</Link></li>
                <li><Link to="pages-comingsoon">Coming Soon</Link></li>
                <li><Link to="pages-faq">Faq</Link></li>
              </ul>
            </li>*/}

            {/* <li>
              <Link to="/#" className="waves-effect"><i className="ti-bookmark-alt"></i><span> Email Templates <span
                className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
              <ul className="submenu">
                <li><Link to="email-template-basic">Basic Action Email</Link></li>
                <li><Link to="email-template-Alert">Alert Email</Link></li>
                <li><Link to="email-template-Billing">Billing Email</Link></li>
              </ul>
            </li>*/}

          </ul>
        </div>

      </React.Fragment>
    );
  }
}


export default SideNav;
