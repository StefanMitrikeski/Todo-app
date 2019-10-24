import React, { useState } from "react";

export default function Todo({ todo, index, completeTodo, removeTodo}) {
  return (
    <div
      style={{textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo">
      {todo.text}
      <div>
        <button
          onClick={() =>completeTodo(index)}>Completed</button>
        <button
          onClick={() =>removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
}