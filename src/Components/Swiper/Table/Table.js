/* eslint-disable no-unused-vars */
import React from 'react';
import ReactTable from 'react-table';

import Popup from './Popup';

import './Table.css';

const rawData = [
	{ 'title': 'Some money', 'amount': 21, 'date': '2017-12-01' },
	{ 'title': 'Yep I spend too much', 'amount': 3, 'date': '2017-12-02' },
	{ 'title': 'Another useless spending', 'amount': 2, 'date': '2011-12-21' }];

const columns = [{
	Header: 'Title',
	accessor: 'title'
},
{
	Header: 'Amount',
	accessor: 'amount',
},
{
	Header: 'Date',
	accessor: 'date'
}];



class Table extends React.Component {
	state = {
		data: rawData,
		showPopup: null
	}

	closePopup = () => {
		this.setState({ showPopup: false });
	}


	renderPopup = () => {
		return (
			<Popup
				closePopup={this.closePopup}
			/>
		)
	}
	render() {
		const { data } = this.state
		return (
			<div>
				<ReactTable
					data={data}
					columns={columns}

					showPagination={false}
					className="-striped -highlight"

					getTrProps={(state, rowInfo, column, instance) => {
						return {
							onClick: (e, handleOriginal) => {
								console.log(rowInfo.row);
								this.setState({ showPopup: true })
								// IMPORTANT! React-Table uses onClick internally to trigger
								// events like expanding SubComponents and pivots.
								// By default a custom 'onClick' handler will override this functionality.
								// If you want to fire the original onClick handler, call the
								// 'handleOriginal' function.
								if (handleOriginal) {
									handleOriginal();
								}
							}
						};
					}}
				/>
				{this.state.showPopup && this.renderPopup()}
			</div>
		);
	}
}

export default Table;
