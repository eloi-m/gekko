/* eslint-disable no-unused-vars */
import React from 'react';


const SELECTED_STYLE = {
	color: '#1da1f2',
	fontSize: '36px'
};
const NOT_SELECTED_STYLE = {};

class Icon extends React.Component {
	render() {
		const { Icon, isSelected } = this.props;

		const STYLE = isSelected ? SELECTED_STYLE : NOT_SELECTED_STYLE;

		return (
			<div
				style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
			>
				<Icon
					style={STYLE}
				/>
			</div>
		);
	}
}


export default Icon;