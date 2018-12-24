import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class input extends React.Component {
	render() {
		return (
			<Form>
				<FormControl
					id='input'
					type = 'text'
					label= 'Coucou'
					placeholder= 'inpuuut'
				/>
			</Form>
		);
	}
}


export default input;
