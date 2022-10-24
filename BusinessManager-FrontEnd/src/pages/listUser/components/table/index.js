import { Table } from 'antd';
import React from 'react';
import ButtonsActions from '../buttonsActions';
const columns = [
  {
    title: 'Nome',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Nome de Usuário',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Email',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Telefone',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'CPF',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Data de Nascimento',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Ativo',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Permissão',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Data de Contrato',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: 'Ações',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <ButtonsActions/>,
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
const TableUser = () => (
  <Table
  style={{marginTop: '5vh'}}
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 300,
    }}
  />
);
export default TableUser;