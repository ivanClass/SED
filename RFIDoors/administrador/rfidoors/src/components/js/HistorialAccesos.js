import React from 'react';
import { Table } from 'reactstrap';

export default class HistorialAccesos extends React.Component {
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}