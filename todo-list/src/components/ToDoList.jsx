import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";
import { FILTERS } from "../redux/filtersSlice"; // 1️⃣

const TodoList = () => {
  const todos = useSelector((state) => state.todos); 
  const filter = useSelector((state) => state.filters); // 2️⃣
  const dispatch = useDispatch();
  const [removingId, setRemovingId] = useState(null);

  const handleDelete = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      dispatch(deleteTodo(id));
      setRemovingId(null);
    }, 300);
  };

  // 3️⃣
  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTERS.ACTIVE) return !todo.completed;
    if (filter === FILTERS.COMPLETED) return todo.completed;
    return true; // ALL
  });

  return (
    <ul>
      {filteredTodos.map((todo) => ( // 4️⃣ Just update this line!
        <li
          key={todo.id}
          className={`${todo.completed ? "completed" : ""} ${removingId === todo.id ? "removed" : ""}`}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleComplete(todo.id))}
          />
          {todo.text}
          <button onClick={() => handleDelete(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;