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
import client from '../utils/axiosInstance';

interface Props {}

const Todo = (params: Props) => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [filterType, setFilterType] = useState<IFilterType>(
    IFilterType.ALL,
  );
  const todoTextRef = useRef<HTMLInputElement>();

  const loadData = useCallback(
    async (type: IFilterType) => {
      try {
        let params = {};
        if (
          type === IFilterType.Completed ||
          type === IFilterType.Pending
        ) {
          params = {
            isDone: type === IFilterType.Completed,
          };
        }
        const res = await client.get<ITodo[]>('todoList', {
          params,
        });
        setTodoList(res.data);
      } catch (error: Error) {
        console.log(error.message);
      }
    },
    [],
  );

  useEffect(() => {
    loadData(IFilterType.ALL);
  }, [loadData]);

  const addTodo = useCallback(
    async (event: FormEvent): void => {
      event.preventDefault();
      // O(1)
      const todoText = todoTextRef.current?.value;

      if (todoText) {
        const res = await client.post<ITodo>('todoList', {
          text: todoText,
          isDone: false,
        });
        setTodoList(x => [...x, res.data]);
        if (todoTextRef.current) {
          todoTextRef.current.value = '';
        }
      }
    },
    [],
  );

  const deleteTodo = useCallback(async (id: number) => {
    await client.delete(`todoList/${id}`);
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

  const completeTodo = useCallback(async (item: ITodo) => {
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
    const res = await client.put<ITodo>(
      `todoList/${item.id}`,
      {
        ...item,
        isDone: !item.isDone,
      },
    );

    setTodoList(list =>
      list.map(x => (x.id === item.id ? res.data : x)),
    );
  }, []);

  // const filterTodo = useCallback((type: IFilterType) => {
  //   setFilterType(type);
  // }, []);

  return (
    <div className="container">
      <h1 className="title">Todo App</h1>
      <TodoForm
        addTodo={addTodo}
        todoTextRef={todoTextRef}
      />
      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
      <TodoFilter filterTodo={loadData} />
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
