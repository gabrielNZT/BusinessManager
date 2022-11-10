import { Table } from 'antd';
import React from 'react';

const justHaveActionColum = (columns) => columns.length > 1 ? false : true

function TableUser(props) {
  return (
    <Table
      pagination={props.tableParams.pagination}
      onChange={props.handleTableChange}
      style={{ marginTop: '5vh' }}
      columns={!justHaveActionColum(props.columns) ? props.columns : []}
      dataSource={props.data}
      scroll={{
        x: 1000,
        y: '33vh',
      }}
    />
  )
}

export default TableUser;