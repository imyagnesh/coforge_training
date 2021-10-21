import React, { FormEvent, memo } from 'react';

interface Props {
  addTodo: (event: FormEvent) => void;
  todoTextRef: React.MutableRefObject<
    HTMLInputElement | undefined
  >;
}

const TodoForm = ({ addTodo, todoTextRef }: Props) => {
  console.log('TodoForm');
  return (
    <form onSubmit={addTodo}>
      <input type="text" ref={todoTextRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default memo(TodoForm);
