import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FaSearch from 'react-icons/lib/fa/search';
//import log from './start.js';
import axios from 'axios';

class ModalConsulta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalLectura: false
    };

    this.toggle = this.toggle.bind(this);
    this.togglemodalLectura = this.togglemodalLectura.bind(this);
    this.consultarDatosTarjeta = this.consultarDatosTarjeta.bind(this);
    //this.ejecutaPython = this.ejecutaPython.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
    //log();
  }

  togglemodalLectura() {
    this.setState({
      modalLectura: !this.state.modalLectura,
    });
    //log();
  }

  consultarDatosTarjeta(){
    //alert("Acerque la tarjeta al lector");
    this.togglemodalLectura();

    axios.get('http://192.168.43.10:5000/consulta')
        .then(res => {
            this.setState({ 
              nombre: res.data.nombre,
              idtarjeta: res.data.id_tarjeta,
              apellido1: res.data.apellido1,
              apellido2: res.data.apellido2,
              fechaini: res.data.fecha_ini,
              fechafin: res.data.fecha_fin
              });
            console.log(res);
            this.togglemodalLectura();
          });
  }

  render() {
    return (
    	<Button onClick={this.toggle}><FaSearch size={40}/>Consultar Tarjeta
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Consultando Tarjeta</ModalHeader>
          <ModalBody>
          		Para consultar una tarjeta, acerquela al lector y posteriormente se le mostrará la información:
                <Form>
                  <FormGroup required>
                    <Label for="idtarjeta">ID Tarjeta: <p>{this.state.idtarjeta}</p></Label>
                  </FormGroup>
                  <FormGroup required>
                    <Label for="nombre">Nombre: <p>{this.state.nombre}</p></Label>
                  </FormGroup>
                  <FormGroup>
                    <Label for="apellido1">Apellido1: <p>{this.state.apellido1}</p></Label>
                  </FormGroup>
                  <FormGroup>
                    <Label for="apellido2">Apellido2: <p>{this.state.apellido2}</p></Label>
                  </FormGroup>
                  <FormGroup>
                      <Label for="fechainicio">Fecha inicio validez: <p>{this.state.fechaini}</p></Label>
                  </FormGroup>
                  <FormGroup>
                      <Label for="fechafin">Fecha finalización validez: <p>{this.state.fechafin}</p></Label>
                  </FormGroup>
                </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.consultarDatosTarjeta}>Acercar Tarjeta y Consultar</Button>
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

export default ModalConsulta;