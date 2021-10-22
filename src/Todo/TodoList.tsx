import React, { memo } from 'react';
import {
  IFilterType,
  RequestStatus,
  RequestTypes,
} from '../types/IFilterType';
import ITodo from '../types/ITodo';

interface Props {
  todoList: ITodo[];
  completeTodo: (item: ITodo) => void;
  deleteTodo: (id: number) => void;
}

const TodoList = ({
  todoList,
  completeTodo,
  deleteTodo,
  status,
}: Props) => {
  console.log('TodoList');
  return (
    <div className="list">
      {todoList.map((item: ITodo) => (
        <div className="list-item" key={item.id}>
          <input
            type="checkbox"
            name="isDone"
            id="isDone"
            checked={item.isDone}
            onChange={() => completeTodo(item)}
          />
          <span
            style={{
              textDecoration: item.isDone
                ? 'line-through'
                : 'none',
            }}
          >
            {item.text}
          </span>
          <button
            type="button"
            onClick={() => deleteTodo(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
      {status.some(
        x =>
          x.type === RequestTypes.ADD_DATA &&
          x.status === RequestStatus.REQUEST,
      ) && <h3>Loading....</h3>}
      {status.some(
        x =>
          x.type === RequestTypes.ADD_DATA &&
          x.status === RequestStatus.FAIL,
      ) && <h1>Please Try After sometime</h1>}
    </div>
  );
};

export default memo(TodoList);
