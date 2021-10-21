import React, {
  useState,
  useEffect,
  useRef,
  FormEvent,
  useCallback,
} from 'react';
import './styles.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import ITodo from '../types/ITodo';
import { IFilterType } from '../types/IFilterType';

interface Props {}

const Todo = (params: Props) => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [filterType, setFilterType] = useState<IFilterType>(
    IFilterType.ALL,
  );
  const todoTextRef = useRef<HTMLInputElement>();

  const loadData = useCallback(async () => {
    try {
      const res = await fetch(
        'http://localhost:3000/todoList',
      );
      const list = await res.json();
      setTodoList(list);
    } catch (error) {}
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const addTodo = useCallback(
    async (event: FormEvent): void => {
      event.preventDefault();
      // O(1)
      const todoText = todoTextRef.current?.value;

      if (todoText) {
        const res = await fetch(
          'http://localhost:3000/todoList',
          {
            method: 'POST',
            body: JSON.stringify({
              text: todoText,
              isDone: false,
            }),
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          },
        );

        const newTodo = await res.json();

        setTodoList(x => [...x, newTodo]);
        if (todoTextRef.current) {
          todoTextRef.current.value = '';
        }
      }
    },
    [],
  );

  const deleteTodo = useCallback((id: number) => {
    // const index: number = todoList.findIndex(
    //   (x: ITodo) => x.id === id,
    // );
    // const updatedTodoList: ITodo[] = [
    //   ...todoList.slice(0, index),
    //   ...todoList.slice(index + 1),
    // ];
    // setTodoList(updatedTodoList);
    setTodoList(list => list.filter(x => x.id !== id));
  }, []);

  const completeTodo = useCallback((item: ITodo) => {
    // const index: number = todoList.findIndex(
    //   (x: ITodo) => x.id === item.id,
    // );
    // const updatedTodoList: ITodo[] = [
    //   ...todoList.slice(0, index),
    //   {
    //     ...item,
    //     isDone: !item.isDone,
    //   },
    //   ...todoList.slice(index + 1),
    // ];
    // setTodoList(updatedTodoList);
    setTodoList(list =>
      list.map(x =>
        x.id === item.id ? { ...x, isDone: !x.isDone } : x,
      ),
    );
  }, []);

  const filterTodo = useCallback((type: IFilterType) => {
    setFilterType(type);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Todo App</h1>
      <TodoForm
        addTodo={addTodo}
        todoTextRef={todoTextRef}
      />
      <TodoList
        todoList={todoList}
        filterType={filterType}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
      <TodoFilter filterTodo={filterTodo} />
    </div>
  );
};

// class Todo extends Component<IProps, IState> {
//   state = {
//     todoList: [],
//     filterType: IFilterType.ALL,
//   };

//   todoTextRef = createRef<HTMLInputElement>();

//   deleteTodo = (id: number) => {
//     // const { todoList } = this.state;
//     // const index: number = todoList.findIndex(
//     //   (x: ITodo) => x.id === id,
//     // );
//     // const updatedTodoList: ITodo[] = [
//     //   ...todoList.slice(0, index),
//     //   ...todoList.slice(index + 1),
//     // ];
//     // this.setState({
//     //   todoList: updatedTodoList,
//     // });
//     this.setState(({ todoList }) => ({
//       todoList: todoList.filter(x => x.id !== id),
//     }));
//   };

//   completeTodo = (item: ITodo) => {
//     const { todoList } = this.state;
//     const index: number = todoList.findIndex(
//       (x: ITodo) => x.id === item.id,
//     );
//     const updatedTodoList: ITodo[] = [
//       ...todoList.slice(0, index),
//       {
//         ...item,
//         isDone: !item.isDone,
//       },
//       ...todoList.slice(index + 1),
//     ];
//     this.setState({
//       todoList: updatedTodoList,
//     });
//     // this.setState(({ todoList }) => ({
//     //   todoList: todoList.map(x =>
//     //     x.id === item.id ? { ...x, isDone: !x.isDone } : x,
//     //   ),
//     // }));
//   };

//   filterTodo = (type: IFilterType) => {
//     this.setState({
//       filterType: type,
//     });
//   };

//   render() {
//     console.log('Todo Render');
//     const { todoList, filterType } = this.state;

//     return (
//       <div className="container">
//         <h1 className="title">Todo App</h1>
//         <TodoForm
//           addTodo={this.addTodo}
//           todoTextRef={this.todoTextRef}
//         />
//         <TodoList
//           todoList={todoList}
//           filterType={filterType}
//           deleteTodo={this.deleteTodo}
//           completeTodo={this.completeTodo}
//         />
//         <TodoFilter filterTodo={this.filterTodo} />
//       </div>
//     );
//   }
// }

export default Todo;
