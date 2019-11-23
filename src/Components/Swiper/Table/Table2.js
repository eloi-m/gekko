import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const cellEditProp = {
	mode: 'click'
};



class Table2 extends React.Component {


	render() {
		const { data } = this.props;
		return (
			<BootstrapTable data={data} 
				cellEdit={cellEditProp} 
				headerStyle={{ fontSize: '16p'}}
				bodyStyle={{ fontSize: '16px'}}
			>
				<TableHeaderColumn dataField='name' isKey >Name</TableHeaderColumn>
				<TableHeaderColumn dataField='amount'> Amount </TableHeaderColumn>
				<TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
			</BootstrapTable>
		);
	}
}

export default Table2;
