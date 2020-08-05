import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap';
import { useDispatch } from 'react-redux';

import { withRouter, useHistory } from 'react-router-dom';
// users
import logo from '../../../images/logo-sm.png';
import { logOutThunk } from '../../../features/auth/AuthSlice';

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }
  const handleLogout = () => {
    dispatch(logOutThunk(history))
  }
  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => toggle()}
        className="notification-list list-inline-item nav-pro-img"
        tag="li"
      >
        <DropdownToggle className="nav-link arrow-none nav-user waves-effect" tag="a">
          <img src={logo} alt="user" className="rounded-circle" />
        </DropdownToggle>
        <DropdownMenu className="profile-dropdown" right>
          {/*<DropdownItem tag="a" href="#">
            <i className="mdi mdi-account-circle m-r-5"></i> Profile
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            <i className="mdi mdi-wallet m-r-5"></i> My Wallet
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            <Badge color="success" className="mt-1 float-right">11</Badge>
            <i className="mdi mdi-settings m-r-5"></i> Settings
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            <i className="mdi mdi-lock-open-outline m-r-5"></i> Lock screen
          </DropdownItem>*/}
          {/*<div className="dropdown-divider"></div>*/}
          <DropdownItem tag="a" className="text-danger" onClick={() => handleLogout()}>
            <i className="mdi mdi-power text-danger"></i> Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
}
export default ProfileMenu;
