import { useObserver } from 'mobx-react-lite';
import TodoItem from './TodoItem';
import { todo } from './TodoStore';

const TodoList = () => {
  return useObserver(() => (
    <section>
      {todo.todoData.map((v) => (
        <TodoItem data={v} key={`todoData_${v.id}`} />
      ))}
    </section>
  ));
};

export default TodoList;
