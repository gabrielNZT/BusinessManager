import { Table } from 'antd';
import React from 'react';


const data = [];

function TableUser(props) {
  return (
    <Table
      style={{ marginTop: '5vh' }}
      columns={props.columns}
      dataSource={data}
      scroll={{
        x: 800,
        y: 300,
      }}
    />
  )
}

export default TableUser;