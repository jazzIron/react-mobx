import { observable } from 'mobx';
import { Todo } from './Todo_types';

export const todo = observable<Todo>({
  todoData: [],
  currentId: 0,
  addTodo(content) {
    this.todoData.push({ id: this.currentId, content, checked: false });
    this.currentId++;
  },

  checkTodoToggle(id) {
    this.todoData = this.todoData.map((v) => {
      return v.id === id ? { ...v, checked: true } : v;
    });
  },
  removeTodo(id) {
    const index = this.todoData.findIndex((v) => v.id === id);
    if (id !== -1) this.todoData.splice(index, 1);
  },
});
