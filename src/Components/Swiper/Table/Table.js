/* eslint-disable no-unused-vars */
import React from 'react';
import ReactTable from 'react-table';
import Loader from 'react-loader';

import { getData } from '../../../connection.js';

import Popup from './Popup';

import './Table.css';

const rawData = [
	{ 'name': 'Some money', 'amount': 21, 'date': '2017-12-01' },
	{ 'name': 'Yep I spend too much', 'amount': 3, 'date': '2017-12-02' },
	{ 'name': 'Another useless spending', 'amount': 2, 'date': '2011-12-21' }];


const LOADER_STYLE = {
	color: '#ffffff',
};



const columns = [{
	Header: 'Name',
	accessor: 'name'
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
		showPopup: null,
		selectedRow: null,
		isTableLoaded: false
	}



	closePopup = () => {
		this.setState({ showPopup: false });
	}


	renderPopup = () => {
		const { selectedRow } = this.state

		getData()

		return (
			<Popup
				closePopup={this.closePopup}
				selectedRow={selectedRow}
			/>
		)
	}
	render() {
		const { data, isTableLoaded } = this.state
		return (
			<div>
				<div style={isTableLoaded ? { height: "auto" } : { height: "1px" }}>
					<Loader loaded={isTableLoaded} options={LOADER_STYLE} >

						<ReactTable
							data={data}
							columns={columns}

							showPagination={false}
							className="-striped -highlight"

							getTrProps={(state, rowInfo, column, instance) => {
								return {
									onClick: (e, handleOriginal) => {
										console.log(rowInfo.row);
										this.setState({ showPopup: true, selectedRow: rowInfo })
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
					</Loader>
				</div >
			</ div >
		);
	}
}

export default Table;
