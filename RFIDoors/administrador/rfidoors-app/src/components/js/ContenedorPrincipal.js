import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import HistorialAccesos from './HistorialAccesos';
import PanelControl from './PanelControl';

export default class ContenedorPrincipal extends React.Component{
	render(){
		return (
			<Container>
		        <Row>
		          <Col xs="6" sm="8" md="8">
		          	<HistorialAccesos />
		          </Col>
		          <Col xs="6" sm="4" md="4">
		          	<PanelControl />
		          </Col>
		        </Row>
	        </Container>
		)
	}
}