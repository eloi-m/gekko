import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import GoogleSpreadsheet from 'google-spreadsheet';
import async from 'async';
import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';



//import { getData } from '../../../connection.js';

const products = [
	{
		id: 0, name: "test", price: "12"
	},
];



const cellEditProp = {
	mode: 'click'
};


const doc = new GoogleSpreadsheet('1r7wShmfQVb8SNAOu_GrMIuEP2ixhxFWS8zaXXbQ0wLI');

const spreadsheet = 1;

let sheet;



class Table2 extends React.Component {
	state = { data: [], loaded: false }

	getLastTenRowsCallback = (error, rows) => {
		const { loaded } = this.state
		const data = rows.map((row) => {
			return { name: row.name, amount: row.amount, date: row.date }
		});
		this.setState({ data: data.reverse() })
		this.setState({ loaded: !loaded })
	};

	getData = () => {
		const callback = this.getLastTenRowsCallback
		async.series([
			function setAuth(step) {
				// see notes below for authentication instructions!
				var creds = require('../../../credentials.json');

				doc.useServiceAccountAuth(creds, step);
				console.log('logged in');

			},
			function getLastTenRows(step) {
				doc.getRows(spreadsheet, { limit: 10 }, callback);
				step();
			}
		], function (err) {
			if (err) {
				console.log('Error: ' + err);
			}
		});
	};

	componentDidMount() {
		this.getData()
	}
	render() {
		const { data } = this.state
		return (
			<BootstrapTable data={data} cellEdit={cellEditProp} headerStyle = {{ fontSize: '16px' }} bodyStyle={{ fontSize: '16px' }} >
				<TableHeaderColumn dataField='name' isKey >Name</TableHeaderColumn>
				<TableHeaderColumn dataField='amount'> Amount </TableHeaderColumn>
				<TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
			</BootstrapTable>
		);
	}
}

export default Table2;
