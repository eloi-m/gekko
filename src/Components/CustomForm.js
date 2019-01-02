import React from 'react';
import CustomInput from './CustomInput';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'


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

class CustomForm extends React.Component{
	state = {
		title: '',
		amount: 0,
		date: ''
	}

	handleSubmit() {
		const {title, amount, date} = this.state;
		console.log(title,amount,date)
	}

	render() {
		return(
			<div>
				<div style = {INPUT_STYLE}>		
					<CustomInput
						title= 'Title'
						type='text'
						placeholder='Enter title'
						onChange = {newSelection => this.setState({title: newSelection})}
					/>
				</div>
				<div style = {INPUT_STYLE}>		
					<CustomInput
						title= 'Amount'
						type='number'
						placeholder='Enter amount'
						onChange = {newSelection => this.setState({amount: newSelection})}
					/>
				</div>
				<div style = {INPUT_STYLE}>		
					<CustomInput
						title='Date'
						type='date'
						placeholder='Enter date'
						onChange = {newSelection => this.setState({date: newSelection})}
					/>
				</div>
				<div style={BUTTON_STYLE}>
					<Button bsStyle="primary" onClick={() => this.handleSubmit()}>
						Submit
    			</Button>
				</div>

		</div>
  )
	}
}


export default CustomForm;