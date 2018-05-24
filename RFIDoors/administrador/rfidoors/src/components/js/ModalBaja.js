import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import FaMinus from 'react-icons/lib/fa/minus';
//import log from './start.js';
import axios from 'axios';

class ModalBaja extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);

    this.handleIdChange = this.handleIdChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleNameChange = this.handleNameChange.bind(this);
    //this.ejecutaPython = this.ejecutaPython.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    //log();
  }

  handleIdChange(e) {
   this.setState({id: e.target.value});
  } 

  handleSubmit(e) {
    e.preventDefault();
        axios.post('http://192.168.43.10:5000/baja', {
          idTarjeta: this.state.id,
        }).then(res => {
            console.log(res);
            console.log(res.data);
            alert("Acceso Eliminado!");
        });
  } 

  render() {
    return (
      <Button onClick={this.toggle}><FaMinus size={40}/>Eliminación de Acceso
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Eliminación de acceso</ModalHeader>
          <ModalBody>
          		Para eliminar el acceso, introduce el identificador de acceso que quieres eliminar:
                <Form>
                  <FormGroup>
                    <Label for="id">Identificador de acceso</Label>
                    <Input type="plaintext" name="id" id="id" placeholder="Id" onChange={this.handleIdChange} />
                  </FormGroup>
                </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Eliminar</Button>
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      	</Button>
    );
  }
}

export default ModalBaja;