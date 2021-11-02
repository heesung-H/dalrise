import React from 'react';
import { Table, Button } from 'antd';
import { History, LocationState } from 'history';

import { withRouter } from 'react-router';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description:
      'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

type Props = {
  title: string;
  children: JSX.Element;
};

const BoardList = ({ history }: { history: History }) => {
  const handler = () => {
    history.push('/add');
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => 'Header'}
        footer={() => 'Footer'}
      />

      <Button type="primary" onClick={handler}>
        문제집 등록
      </Button>
    </div>
    // <div>
    //   <h1>{title}</h1>
    //   {children}
    // </div>
  );
};

export default withRouter(BoardList);
