import React, { useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import type { Todo } from '../context/TodoContext';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editText.trim()) {
      editTodo(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  return (
    <li className={`todo-item-li ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <button type="submit" className="save-btn">Save</button>
        </form>
      ) : (
        <>
          {/* The text is now just for display, no longer clickable */}
          <span className="todo-text">{todo.text}</span>
          
          <div className="todo-actions">
            {/* --- THIS IS THE NEW LOGIC --- */}
            {/* If the task is completed, show an "Undo" button */}
            {todo.completed ? (
              <button onClick={() => toggleTodo(todo.id)} className="undo-btn">Undo</button>
            ) : (
              // Otherwise, show a "Complete" button
              <button onClick={() => toggleTodo(todo.id)} className="complete-btn">Complete</button>
            )}
            
            <button onClick={() => setIsEditing(true)} className="icon-btn" aria-label="Edit task">✏️</button>
            <button onClick={() => deleteTodo(todo.id)} className="icon-btn" aria-label="Delete task">🗑️</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;