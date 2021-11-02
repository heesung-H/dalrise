import './board.module.css';
import { useState } from 'react';

// import 'antd/dist/antd.css';

import { Rate } from 'antd';

import BoardList from './BoardList';
import { RegistrationForm } from './BoardAdd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

/* eslint-disable-next-line */
export interface BoardProps {}

export function Board(props: BoardProps) {
  const [count, setCount] = useState(3);

  const handleChange = (value: number) => {
    setCount(value);
  };

  return (
    <div>
      <Rate tooltips={desc} onChange={handleChange} value={count} />
    </div>
  );
}

Board.BoardList = BoardList;
Board.BoardRegistrationForm = RegistrationForm;
export default Board;
