import React, {
  Component,
  FormEvent,
  createRef,
} from 'react';
import './styles.css';
import ITodo from '../types/ITodo';

interface IProps {}

// type FilterType = 'ALL' | 'Completed' | 'Pending';

// enum FilterType {
//   All = 'ALL',
//   Pending = 'PENDING',
//   Completed = 'COMPLETED',
// }

interface IState {
  todoList: ITodo[];
  filterType: string;
}

class Todo extends Component<IProps, IState> {
  state = {
    todoList: [],
    filterType: 'all',
  };

  todoTextRef = createRef<HTMLInputElement>();

  addTodo = (event: FormEvent): void => {
    event.preventDefault();
    // O(1)
    const todoText = this.todoTextRef.current?.value;

    if (todoText) {
      this.setState(
        ({ todoList }) => ({
          todoList: [
            ...todoList,
            {
              id: new Date().valueOf(),
              text: todoText,
              isDone: false,
            },
          ],
        }),
        () => {
          if (this.todoTextRef.current) {
            this.todoTextRef.current.value = '';
          }
        },
      );
    }
  };

  deleteTodo = (id: number) => {
    // const { todoList } = this.state;
    // const index: number = todoList.findIndex(
    //   (x: ITodo) => x.id === id,
    // );
    // const updatedTodoList: ITodo[] = [
    //   ...todoList.slice(0, index),
    //   ...todoList.slice(index + 1),
    // ];
    // this.setState({
    //   todoList: updatedTodoList,
    // });
    this.setState(({ todoList }) => ({
      todoList: todoList.filter(x => x.id !== id),
    }));
  };

  completeTodo = (item: ITodo) => {
    const { todoList } = this.state;
    const index: number = todoList.findIndex(
      (x: ITodo) => x.id === item.id,
    );
    const updatedTodoList: ITodo[] = [
      ...todoList.slice(0, index),
      {
        ...item,
        isDone: !item.isDone,
      },
      ...todoList.slice(index + 1),
    ];
    this.setState({
      todoList: updatedTodoList,
    });
    // this.setState(({ todoList }) => ({
    //   todoList: todoList.map(x =>
    //     x.id === item.id ? { ...x, isDone: !x.isDone } : x,
    //   ),
    // }));
  };

  filterTodo = (type: string) => {
    this.setState({
      filterType: type,
    });
  };

  render() {
    console.log('render');
    const { todoList, filterType } = this.state;

    return (
      <div className="container">
        <h1 className="title">Todo App</h1>
        <form onSubmit={this.addTodo}>
          <input type="text" ref={this.todoTextRef} />
          <button type="submit">Add Todo</button>
        </form>
        <div className="list">
          {todoList
            .filter((x: ITodo) => {
              switch (filterType) {
                case 'completed':
                  return x.isDone;
                case 'pending':
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
                  onChange={() => this.completeTodo(item)}
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
                  onClick={() => this.deleteTodo(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
        <div className="filter-wrapper">
          <button
            type="button"
            onClick={() => this.filterTodo('all')}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => this.filterTodo('pending')}
          >
            Pending
          </button>
          <button
            type="button"
            onClick={() => this.filterTodo('completed')}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
