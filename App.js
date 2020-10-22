import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";

function App() {
  if (!(this instanceof App)) {
    throw new Error("error: App must be called with new!");
  }

  this.todos = [];

  const onAdd = (todo) => {
    const originTodos = this.todos;
    const newTodos = [...originTodos, { content: todo, isCompleted: false }];
    this.setState(newTodos);
  };

  const onToggle = (idx) => {
    const originTodos = this.todos;
    const newTodos = originTodos.map((todo, index) => {
      if (index === parseInt(idx)) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    this.setState(newTodos);
  };

  this.setState = (newData) => {
    this.todos = newData;
    this.render();
  };

  this.render = () => {
    this.todoList.setState(this.todos);
  };

  this.init = () => {
    this.$input = document.getElementById("new-todo-title");
    this.$list = document.getElementById("todo-list");
    try {
      this.todoInput = new TodoInput(this.$input, { onAction: { add: onAdd } });
      this.todoList = new TodoList(this.$list, this.todos, {
        onAction: { toggle: onToggle },
      });
    } catch (e) {
      console.log(error);
    }
  };

  this.init();
}

new App();
