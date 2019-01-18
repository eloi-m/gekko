import React from 'react';
import NewWindow from 'react-new-window';


class Popup extends React.Component {

	closeWindow() {
		this.props.closePopup();
	}

	render() {
		return (
			<NewWindow>
				<button
					onClick={() => this.closeWindow()}
				>
					Click to close
				</button>
				
			</NewWindow>
		);
	}
}

export default Popup;