import { todo } from './TodoStore';
import { TodoData } from './Todo_types';
import { toJS } from 'mobx';
import { useObserver } from 'mobx-react-lite';

interface Props {
  data: TodoData;
}

const TodoItem = ({ data }: Props) => {
  const removeItem = () => {
    return todo.removeTodo(data.id);
  };

  const handleChange = () => {
    return todo.checkTodoToggle(data.id);
  };

  console.log(toJS(todo));

  return useObserver(() => (
    <div>
      <input type="checkbox" onChange={handleChange} />
      <span>{data.content}</span>
      <span onClick={removeItem}>❌</span>
    </div>
  ));
};

export default TodoItem;
