import React from 'react';
import FaBeer from 'react-icons/lib/fa/beer';
import FaGithub from 'react-icons/lib/fa/github';
import TiDocumentText from 'react-icons/lib/ti/document-text';
import GoBug from 'react-icons/lib/go/bug';
import MdContact from 'react-icons/lib/md/contact-mail';
import MdLogo from 'react-icons/lib/md/center-focus-weak';

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

  componentDidMount(){
    navigator.mediaDevices.
      getUserMedia({video: true}).
        then((stream) => {
          this.setState({isRecording: true});
        }).catch(error => console.error);
  }

  render() {
      return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="logoPerspective" href="/"><MdLogo size={50}/>RFIDoors</NavbarBrand>
          {this.state.isRecording == false && <div className="gray-circle recording-circle" />}
          {this.state.isRecording == true && <div className="red-circle recording-circle" />}
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/documentacion"><TiDocumentText size={40}/>Documentación</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/desarrolladores"><GoBug size={40}/>Desarrolladores</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contacto"><MdContact size={40}/>Contacto</NavLink>
              </NavItem>
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