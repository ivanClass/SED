import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FaSearch from 'react-icons/lib/fa/search';
//import log from './start.js';

class ModalConsulta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    //this.ejecutaPython = this.ejecutaPython.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    //log();
  }

  ejecutaPython(){
    console.log('HOLAAAAAAAAAAA')
  }

  render() {
    return (
    	<Button onClick={this.ejecutaPython}><FaSearch size={40}/>Consultar Tarjeta
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Consultando Acceso de Tarjeta</ModalHeader>
          <ModalBody>
          		Para consultar una tarjeta, acerquela al lector cuando suene un pitido y posteriormente se le mostrará la información.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      	</Button>
    );
  }
}

export default ModalConsulta;