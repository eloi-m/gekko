import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class TextInputs extends React.Component {
	state = {
    content: ""
	}

  onHandleChange = (e) => {
    this.setState({
      content: e.target.value
		});
		console.log(this.state.content)
  }

	render() {
		return (
			<Form>
				<FormControl 
					id="mainInput"
					onChange={this.onHandleChange}
					placeholder="Text"
					value={this.state.content}
					type="text"
					/>
			</Form>
		);
	}
}



export default TextInputs;
