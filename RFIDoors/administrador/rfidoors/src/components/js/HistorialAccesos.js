import React from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

export default class HistorialAccesos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        users: [
            {
                "id": 1,
                "name": 'cristina'
            },
            {
                id: 2,
                name: 'carlos'
            }
        ],
        accesos:[]
    };

    /*

      */
  }

  componentDidMount(){
    axios.get('http://192.168.43.10:5000/consultaAccesos')
    .then(res => {
            this.setState({
              accesos: res.data
            });
            console.log(this.state.accesos);
      });
  }

  render() {
    return (
    <div>
    	<h2> Historial de Accesos </h2>
      <Table striped>
        <thead>
          <tr>
            <th>Fecha acceso</th>
            <th>Identificador de acceso</th>
            <th>Nombre usuario</th>
            <th>Apellido1</th>
            <th>Apellido2</th>
          </tr>
        </thead>
        <tbody>
          {this.state.accesos.map((acceso, i) =>

              <tr key={i}>
                <th scope="row">{acceso.fecha_acceso}</th>
                <td>{acceso.id_tarjeta}</td>
                <td>{acceso.nombre}</td>
                <td>{acceso.apellido1}</td>
                <td>{acceso.apellido2}</td>
              </tr>
          )}
        </tbody>
      </Table>
      </div>
    );
  }
}