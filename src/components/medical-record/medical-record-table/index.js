import React, { Component } from 'react';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';

const records = [
  { date: '111', complaint: 'aaaa', status: 'new' },
  { date: '222', complaint: 'bbbb', status: 'in_progress' },
  { date: '333', complaint: 'cccc', status: 'done' }
];

class MedicalRecordTable extends Component {
  render() {
    return (
      <Table
        rowHeight={50}
        width={500}
        height={300}
        rowGetter={this.rowGetter}
        rowCount={records.length}>
        <Column label="Дата" width={80} dataKey="date" />
        <Column label="Жалобы" width={320} dataKey="complaint" />
        <Column label="Статус" width={100} dataKey="status" />
      </Table>
    );
  }

  rowGetter = ({ index }) => records[index];
}

export default MedicalRecordTable;
