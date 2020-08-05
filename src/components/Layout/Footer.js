import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          © {new Date().getFullYear()} Dental
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;






