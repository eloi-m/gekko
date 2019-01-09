import React from 'react';
import Table from 'react-table';

import './Graphs.css';
const data = [{ 'title': 'Some money', 'amount': 21, 'date': '2017-12-01' },
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

class Graphs extends React.Component {
	render() {
		return (
			<div>
				<Table
					data={data}
					columns={columns}

					showPagination={false}
					className="-striped -highlight"
				/>
			</div>
		);
	}
}

export default Graphs;
