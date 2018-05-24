import React from 'react';
import FaBeer from 'react-icons/lib/fa/beer';
import FaGithub from 'react-icons/lib/fa/github';
import TiDocumentText from 'react-icons/lib/ti/document-text';
import GoBug from 'react-icons/lib/go/bug';
import MdContact from 'react-icons/lib/md/contact-mail';
import MdLogo from 'react-icons/lib/md/lock-outline';

import {Route, Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isRecording: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
      return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="logoPerspective" href="/"><MdLogo size={50}/>RFIDoors</NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/ivanClass/SED"><FaGithub size={40}/>Proyecto</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
      );
  }
}

export default NavBar;