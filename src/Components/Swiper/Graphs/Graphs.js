import React from 'react';
import sheetrock from 'sheetrock';




class Graphs extends React.Component {
	state = {
		data: 'test'
	}

	myCallback = (error, options, response) => {
		if (!error) {
			this.setState({data:response})
			return(response)
		}
	};

	componentWillMount() {
		sheetrock({
			url: 'https://docs.google.com/spreadsheets/d/1r7wShmfQVb8SNAOu_GrMIuEP2ixhxFWS8zaXXbQ0wLI/',
			query: 'select A',
			callback: this.myCallback
		});
	}

	render() {
		return (
			<div>
				{this.state.data}
			</div>
		);
	}
}

export default Graphs;
