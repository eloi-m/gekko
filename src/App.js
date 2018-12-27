import React from 'react';

// eslint-disable-next-line no-unused-vars
import CustomInput from './Components/CustomInput';
import Header from './Components/Header';

const HEADER_STYLE = {
};

const BODY_STYLE = {
	margin:'10px',
	display: 'flex',
	justifyContent: 'center'
};

const INPUT_STYLE = {
	width:'50%'
};

class App extends React.Component {
	state = {
		title: ''
	}

	render() {
		//console.log(this.state.title)
		return (
			<div> 
				<div id='Header' style = {HEADER_STYLE}> 
					<Header/>
				</div>
				<div id='Body' style = {BODY_STYLE}>
					<div style = {INPUT_STYLE}>		
						<CustomInput
							type='text'
							placeholder='Title'
							onChange = {newSelection => this.setState({title: newSelection})}
						/>
					</div>	
				</div>
			</div>			
		);
	}
}

export default App;
