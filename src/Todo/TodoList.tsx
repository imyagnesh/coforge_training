import React, { memo } from 'react';
import { IFilterType } from '../types/IFilterType';
import ITodo from '../types/ITodo';

interface Props {
  todoList: ITodo[];
  filterType: IFilterType;
  completeTodo: (item: ITodo) => void;
  deleteTodo: (id: number) => void;
}

const TodoList = ({
  todoList,
  filterType,
  completeTodo,
  deleteTodo,
}: Props) => {
  console.log('TodoList');
  return (
    <div className="list">
      {todoList
        .filter((x: ITodo) => {
          switch (filterType) {
            case IFilterType.Completed:
              return x.isDone;
            case IFilterType.Pending:
              return !x.isDone;
            default:
              return true;
          }
        })
        .map((item: ITodo) => (
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
    </div>
  );
};

export default memo(TodoList);
