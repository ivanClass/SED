import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import FaPlus from 'react-icons/lib/fa/plus';
//import log from './start.js';
import axios from 'axios';

class ModalAlta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalLectura: false
    };

    this.toggle = this.toggle.bind(this);
    this.togglemodalLectura = this.togglemodalLectura.bind(this);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleApellido1Change = this.handleApellido1Change.bind(this);
    this.handleApellido2Change = this.handleApellido2Change.bind(this);
    this.handleFechaIniChange = this.handleFechaIniChange.bind(this);
    this.handleFechaFinChange = this.handleFechaFinChange.bind(this);

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

  togglemodalLectura() {
    this.setState({
      modalLectura: !this.state.modalLectura,
    });
    //log();
  }

  altaTarjeta(){
    console.log('Alta Tarjeta')
    /*
    axios.get('http://192.168.43.10:5000/alta')
        .then(res => {
            const persons = res;
            console.log(persons);
            //this.setState({ persons });
          })
          */
  }

  handleNameChange(e) {
   this.setState({nombre: e.target.value});
   console.log(this.state.nombre);
  } 

  handleApellido1Change(e) {
   this.setState({apellido1: e.target.value});
   console.log(this.state.apellido1);
  }

  handleApellido2Change(e) {
   this.setState({apellido2: e.target.value});
   console.log(this.state.apellido2);
  }

  handleFechaIniChange(e) {
   this.setState({fechaIni: e.target.value});
   console.log(this.state.fechaIni);
  }

  handleFechaFinChange(e) {
   this.setState({fechaFin: e.target.value});
   console.log(this.state.fechaFin);
  }

  handleSubmit(e) {
    e.preventDefault();

    //Obtenemos el ID de la tarjeta
    this.togglemodalLectura();
        axios.post('http://192.168.43.10:5000/alta', {
          nombre: this.state.nombre,
          apellido1: this.state.apellido1,
          apellido2: this.state.apellido2,
          fechainicio: this.state.fechaIni,
          fechafin: this.state.fechaFin
        }).then(res => {
            console.log(res);
            console.log(res.data);
            this.togglemodalLectura();
        });
  } 

  render() {
    return (
      <Button onClick={this.toggle}><FaPlus size={40}/>Alta de Acceso
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Alta de Acceso</ModalHeader>
          <ModalBody>
          		Por favor, rellene la siguiente información para dar de alta un nuevo acceso:
                <Form>
                  <FormGroup required>
                    <Label for="nombre">Nombre</Label>
                    <Input type="plaintext" name="nombre" id="nombre" placeholder="Nombre de usuario" onChange={this.handleNameChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="apellido1">Apellido1</Label>
                    <Input type="plaintext" name="apellido1" id="apellido1" placeholder="Primer apellido" onChange={this.handleApellido1Change} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="apellido2">Apellido2</Label>
                    <Input type="plaintext" name="apellido2" id="apellido2" placeholder="Segundo apellido" onChange={this.handleApellido2Change} />
                  </FormGroup>
                  <FormGroup>
                      <Label for="fechainicio">Fecha inicio validez</Label>
                      <Input type="date" name="fechainicio" id="fechainicio" placeholder="Fecha de inicio de validez" onChange={this.handleFechaIniChange} />
                  </FormGroup>
                  <FormGroup>
                      <Label for="fechafin">Fecha finalización validez</Label>
                      <Input type="date" name="fechafin" id="fechafin" placeholder="Fecha de expiración de validez" onChange={this.handleFechaFinChange}/>
                  </FormGroup>
                </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Acercar Tarjeta y Registrar</Button>
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modalLectura} toggle={this.togglemodalLectura}>
          <ModalHeader toggle={this.toggle}>Acerque Tarjeta...</ModalHeader>
          <ModalFooter>
            <Button color="secondary" onClick={this.togglemodalLectura}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      	</Button>
    );
  }
}

export default ModalAlta;