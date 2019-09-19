import React from 'react';
import NewWindow from 'react-new-window';


class Popup extends React.Component {

	closeWindow() {
		this.props.closePopup();
	}

	render() {
		const { selectedRow } = this.props;
		return (
			<NewWindow>
				<button
					onClick={() => this.closeWindow()}
				>
					Click to close
				</button>
				{selectedRow.row.date}


			</NewWindow>
		);
	}
}

export default Popup;