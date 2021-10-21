import React, { memo } from 'react';
import { IFilterType } from '../types/IFilterType';

interface Props {
  filterTodo: (type: IFilterType) => void;
}

const TodoFilter = ({ filterTodo }: Props) => {
  console.log('TodoFilter');
  return (
    <div className="filter-wrapper">
      <button
        type="button"
        onClick={() => filterTodo(IFilterType.ALL)}
      >
        All
      </button>
      <button
        type="button"
        onClick={() => filterTodo(IFilterType.Pending)}
      >
        Pending
      </button>
      <button
        type="button"
        onClick={() => filterTodo(IFilterType.Completed)}
      >
        Completed
      </button>
    </div>
  );
};

export default memo(TodoFilter);
