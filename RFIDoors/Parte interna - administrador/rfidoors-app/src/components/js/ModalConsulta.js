import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FaSearch from 'react-icons/lib/fa/search';

class ModalConsulta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
    	<Button onClick={this.toggle}><FaSearch size={40}/>Consultar Tarjeta
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