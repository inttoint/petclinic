import React, { Component } from 'react';
import { TableWrapper } from './medical-record-table.styled';
import {
  CellMeasurerCache,
  CellMeasurer,
  Column,
  Table
} from 'react-virtualized';
import 'react-virtualized/styles.css';

const records = [
  {
    date: '22.05.2019',
    complaint:
      'Для выяснения жалоб больному задают вопрос: что Вас бес­покоит?, на что Вы жалуетесь? И дают больному возможность свободно рассказать о своих ощущениях, переживаниях. ',
    status: 'Новая'
  },

  { date: '14.02.2020', complaint: 'bbbb', status: 'В работе' },
  { date: '14.02.2020', complaint: 'bbbb', status: 'В работе' },
  {
    date: '22.05.2019',
    complaint:
      'Для выяснения жалоб больному задают вопрос: что Вас бес­покоит?, на что Вы жалуетесь? И дают больному возможность свободно рассказать о своих ощущениях, переживаниях. ',
    status: 'Новая'
  },
  { date: '14.02.2020', complaint: 'bbbb', status: 'В работе' },
  {
    date: '22.05.2019',
    complaint:
      'Для выяснения жалоб больному задают вопрос: что Вас бес­покоит?, на что Вы жалуетесь? И дают больному возможность свободно рассказать о своих ощущениях, переживаниях. ',
    status: 'Новая'
  },
  { date: '14.02.2020', complaint: 'bbbb', status: 'В работе' },
  {
    date: '22.05.2019',
    complaint:
      'Для выяснения жалоб больному задают вопрос: что Вас бес­покоит?, на что Вы жалуетесь? И дают больному возможность свободно рассказать о своих ощущениях, переживаниях. ',
    status: 'Новая'
  }
];

const _cache = new CellMeasurerCache({
  rowHeight: 50,
  minHeight: 50
});

class MedicalRecordTable extends Component {
  render() {
    return (
      <TableWrapper>
        <Table
          rowHeight={_cache.rowHeight}
          headerHeight={40}
          width={600}
          height={500}
          rowGetter={this.rowGetter}
          rowCount={records.length}>
          <Column
            label="Дата обращения"
            width={120}
            dataKey="date"
            style={{ color: 'black' }}
          />
          <Column label="Статус записи" width={120} dataKey="status" />
          <Column
            label="Жалобы"
            cellRenderer={this.complaintColumnRenderer}
            width={300}
            dataKey="complaint"
          />
        </Table>
      </TableWrapper>
    );
  }

  rowGetter = ({ index }) => records[index];

  complaintColumnRenderer = ({ dataKey, parent, rowIndex, style }) => (
    <CellMeasurer
      cache={_cache}
      columnIndex={0}
      key={dataKey}
      parent={parent}
      rowIndex={rowIndex}>
      <div
        style={{
          ...style,
          whiteSpace: 'normal'
        }}>
        {records[rowIndex].complaint}
      </div>
    </CellMeasurer>
  );
}
export default MedicalRecordTable;
