import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import FaMinus from 'react-icons/lib/fa/minus';

import ModalConsulta from './ModalConsulta';
import ModalAlta from './ModalAlta';
import ModalBaja from './ModalBaja';

export default class PanelControl extends React.Component {
  render() {
    return (
    <div>
    	<h2> Panel de Control </h2>
      
      <ButtonGroup vertical size="lg">
        <ModalAlta />
        <ModalBaja />
        <ModalConsulta />
      </ButtonGroup>
    </div>
    );
  }
}