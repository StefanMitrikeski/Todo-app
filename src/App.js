import React, { useState } from "react";
import "./App.css";
import Todo from './components/todo.js'
import TodoForm from './components/todoForm'


function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn React",
      isCompleted: false
    },
    {
      text: "Learn React medium",
      completed: false
    },
    {
      text: "Learn React like a Pro",
      isCompleted: false
    }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1)
    setTodos(newTodos);
  };


  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
