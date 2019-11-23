import React from 'react';
import CustomInput from './CustomInput';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


const INPUT_STYLE = {
	display: 'flex',
	justifyContent: 'center',
	margin: '20px'
};

const BUTTON_STYLE = {
	display: 'flex',
	justifyContent: 'center',
	margin: '20px'
}



class CustomForm extends React.Component {
	state = {
		name: '',
		amount: '',
		date: ''
	}


	handleSubmit() {
		const {uploadData} = this.props
		uploadData(this.state)
		this.setState({ name: '', amount: '', date: '' })
	}

	render() {
		const { name, amount, date } = this.state;
		return (
			<div>
				<div style={INPUT_STYLE}>
					<CustomInput
						title='Name'
						type='text'
						placeholder='Enter name'
						onChange={newSelection => this.setState({ name: newSelection })}
						value={name}
					/>
				</div>
				<div style={INPUT_STYLE}>
					<CustomInput
						title='Amount'
						type='number'
						placeholder='Enter amount'
						onChange={newSelection => this.setState({ amount: newSelection })}
						value={amount}
					/>
				</div>
				<div style={INPUT_STYLE}>
					<CustomInput
						title='Date'
						type='date'
						placeholder='Enter date'
						onChange={newSelection => this.setState({ date: newSelection })}
						value={date}
					/>
				</div>
				<div style={BUTTON_STYLE}>
					<style type="text/css">
						{`
    							.btn-custom {
        						background-color: #1da1f2;
        						color: white;
    							}
    						`}
					</style>
					<Button
						bsStyle="custom"
						onClick={() => this.handleSubmit()}
						disabled={name === '' || amount === '' || date === '' ? true : false}
						type='submit'
					>
						Submit
						</Button>
				</div>

			</div>
		)
	}
}


export default CustomForm;