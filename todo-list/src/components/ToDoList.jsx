import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";
import { FILTERS } from "../redux/filtersSlice"; 
import { SORTING } from "../redux/sortingSlice"; // 1️⃣

const TodoList = () => {
  const todos = useSelector((state) => state.todos); 
  const filter = useSelector((state) => state.filters);
  const sorting = useSelector((state) => state.sorting); // 2️⃣
  const dispatch = useDispatch();
  const [removingId, setRemovingId] = useState(null);

  const handleDelete = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      dispatch(deleteTodo(id));
      setRemovingId(null);
    }, 300);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTERS.ACTIVE) return !todo.completed;
    if (filter === FILTERS.COMPLETED) return todo.completed;
    return true;
  });

  // 3️⃣
  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sorting === SORTING.NEWEST_FIRST) return b.id - a.id;
    if (sorting === SORTING.OLDEST_FIRST) return a.id - b.id;
    if (sorting === SORTING.COMPLETED_FIRST) return b.completed - a.completed;
    return 0;
  });

  return (
    <ul>
      {sortedTodos.map((todo) => ( // 4️⃣ Just update this line!
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