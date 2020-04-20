import React, { Component } from 'react';
import { STableWrapper } from './medical-record-table.styled';
import {
  CellMeasurerCache,
  CellMeasurer,
  Column,
  Table
} from 'react-virtualized';
import 'react-virtualized/styles.css';
import s from './status';

const records = [
  {
    id: 1,
    date: '22.05.2019',
    complaint:
      'Для выяснения жалоб больному задают вопрос: что Вас бес­покоит?, на что Вы жалуетесь? И дают больному возможность свободно рассказать о своих ощущениях, переживаниях. ',
    status: 'new'
  },

  {
    id: 2,
    date: '14.02.2020',
    complaint: 'bbbb',
    status: 'in_progress'
  },
  {
    id: 3,
    date: '14.02.2020',
    complaint: 'bbbb',
    status: 'rejected'
  },
  {
    id: 4,
    date: '22.05.2019',
    complaint:
      'Для выяснения жалоб больному задают вопрос: что Вас бес­покоит?, на что Вы жалуетесь? И дают больному возможность свободно рассказать о своих ощущениях, переживаниях. ',
    status: 'new'
  },
  {
    id: 5,
    date: '14.02.2020',
    complaint: 'bbbb',
    status: 'in_progress'
  },
  {
    id: 6,
    date: '22.05.2019',
    complaint:
      'Для выяснения жалоб больному задают вопрос: что Вас бес­покоит?, на что Вы жалуетесь? И дают больному возможность свободно рассказать о своих ощущениях, переживаниях. ',
    status: 'new'
  },
  {
    id: 7,
    date: '14.02.2020',
    complaint: 'bbbb',
    status: 'done'
  },
  {
    id: 8,
    date: '22.05.2019',
    complaint:
      'Для выяснения жалоб больному задают вопрос: что Вас бес­покоит?, на что Вы жалуетесь? И дают больному возможность свободно рассказать о своих ощущениях, переживаниях. ',
    status: 'new'
  }
];

const _cache = new CellMeasurerCache({
  defaultHeight: 50,
  fixedWidth: true,
  rowHeight: 50,
  minHeight: 50
});

class MedicalRecordTable extends Component {
  render() {
    return (
      <STableWrapper>
        <Table
          rowHeight={_cache.rowHeight}
          headerHeight={40}
          width={600}
          height={500}
          rowGetter={this.rowGetter}
          rowCount={records.length}
          onRowClick={this.onRowClick}>
          <Column
            label="Дата обращения"
            width={120}
            dataKey="date"
            style={{ color: 'rgb(18, 18, 18)' }}
          />
          <Column
            label="Статус записи"
            cellRenderer={this.statusColumnRenderer}
            width={120}
            dataKey="status"
          />
          <Column
            label="Жалобы"
            cellRenderer={this.complaintColumnRenderer}
            width={300}
            dataKey="complaint"
          />
        </Table>
      </STableWrapper>
    );
  }

  rowGetter = ({ index }) => records[index];

  statusColumnRenderer = ({ dataKey, rowIndex, style }) => {
    const status = records[rowIndex][dataKey];
    const { name, textColor } = s[status];

    return <div style={{ ...style, color: textColor }}>{name}</div>;
  };

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

  onRowClick = ({ index }) => {
    const recordId = records[index].id;
    this.props.history.push(`/medical-records/${recordId}`);
    console.log(this.props);
  };
}
export default MedicalRecordTable;
