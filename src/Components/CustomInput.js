import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';



class CustomInput extends React.Component {
	state = {
    content: ""
	}

	onHandleChange = (e) => {
		const value = e.target.value
    this.setState({
		content: value
		});
		this.props.onChange(value)
	}

	render() {
		const {placeholder, type} = this.props;
		return (
			<Form>
				{placeholder}
				<FormControl 
					onChange={this.onHandleChange}
					value={this.state.content}

					id={placeholder + - +  type}
					placeholder= {placeholder}
					type= {type}
					/>
			</Form>
		);
	}
}



export default CustomInput;
