import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import FaPlus from 'react-icons/lib/fa/plus';
import FaMinus from 'react-icons/lib/fa/minus';
import FaSearch from 'react-icons/lib/fa/search';

import ModalConsulta from './ModalConsulta';

export default class PanelControl extends React.Component {
  render() {
    return (
    <div>
    	<h2> Panel de Control </h2>
      
      <ButtonGroup vertical size="lg">
        <Button><FaPlus size={40}/>Alta de Acceso</Button>
        <Button><FaMinus size={40}/>Eliminación de Acceso</Button>
        <ModalConsulta />
      </ButtonGroup>
    </div>
    );
  }
}