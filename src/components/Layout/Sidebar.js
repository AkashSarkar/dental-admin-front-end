import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//Metismenu for menu
import MetisMenu from 'metismenujs';

// Redux Call
import { isLarge } from '../../store/actions';
import { connect } from 'react-redux';
import Sidenav from './SideNav';

import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

    new MetisMenu("#menu", {});

    var matchingMenuItem = null;
    var ul = document.getElementById("menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {

      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {

    item.classList.add('mm-active');
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add('mm-active'); // li
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");
        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add('mm-active'); // li
          parent3.childNodes[0].classList.add('mm-active'); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add('active');
          }
        }
      }
      return false;
    }
  }

  componentDidUpdate() {
    if (this.props.is_large_state === true) {
      new MetisMenu("#menu", {});
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="left side-menu">
          {this.props.is_large_state ?
            <Sidenav />
            :
            <PerfectScrollbar>
              <Sidenav />
            </PerfectScrollbar>
          }

          <div className="clearfix"></div>
        </div>

      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  const { is_large_state } = state.Layout;
  return { is_large_state };
}

export default withRouter(connect(mapStatetoProps, { isLarge })(Sidebar));
