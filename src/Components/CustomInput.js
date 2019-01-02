import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

const STYLE = {
	width :"50%"
};

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
		const {placeholder, type, title, value} = this.props;
		return (
			<Form style={STYLE}>
				{title}
				<FormControl 
					onChange={this.onHandleChange}
					value={value}

					id={placeholder + - +  type}
					placeholder= {placeholder}
					type={type}
					/>
			</Form>
		);
	}
}



export default CustomInput;
