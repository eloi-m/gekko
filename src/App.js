import React from 'react';

// eslint-disable-next-line no-unused-vars
import CustomInput from './Components/CustomInput';
import Header from './Components/Header';

const HEADER_STYLE = {
};

const BODY_STYLE = {
	margin:'10px',
};

const INPUT_STYLE = {
	display: 'flex',
	justifyContent: 'center',
	margin: '20px'
};

class App extends React.Component {
	state = {
		title: '',
		amount: 0,
		date: ''
	}

	render() {
		console.log(this.state.title, this.state.amount, this.state.date)
		return (
			<div> 
				<div id='Header' style = {HEADER_STYLE}> 
					<Header/>
				</div>
				<div id='Body' style = {BODY_STYLE}>
					<div style = {INPUT_STYLE}>		
						<CustomInput
							type='text'
							placeholder='Enter title'
							onChange = {newSelection => this.setState({title: newSelection})}
						/>
					</div>
					<div style = {INPUT_STYLE}>		
						<CustomInput
							type='number'
							placeholder='Enter amount'
							onChange = {newSelection => this.setState({amount: newSelection})}
						/>
					</div>
					<div style = {INPUT_STYLE}>		
						<CustomInput
							type='date'
							placeholder='Enter date'
							onChange = {newSelection => this.setState({date: newSelection})}
						/>
					</div>

				</div>
			</div>			
		);
	}
}

export default App;
