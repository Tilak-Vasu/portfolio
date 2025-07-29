import React, { useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import type { Todo } from '../context/TodoContext';
import TodoItem from '../components/ToDoItem';
import './TodoPage.css'; 

const TodoPage: React.FC = () => {
  const { todos, addTodo } = useTodos();
  const [newTodoText, setNewTodoText] = useState('');
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      const shouldStartCompleted = filter === 'completed';
      addTodo(newTodoText, shouldStartCompleted);
      setNewTodoText('');
    }
  };

  const pendingTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  const renderTodoList = (list: Todo[], title: string) => (
    <section>
      <h3 className="todo-list-title">{title} ({list.length})</h3>
      {list.length > 0 ? (
        <ul className="todo-list">
          {list.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
      ) : (
        <p className="empty-list-message">No tasks in this category.</p>
      )}
    </section>
  );

  return (
    <div className="todo-page card">
      <h2>Todo Management</h2>
      <p>A simple to-do list with filters, editing, and local storage persistence.</p>
      
      <form onSubmit={handleAddTodo} className="add-form">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit" className="primary">Add Task</button>
      </form>

      <div className="filters">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>Pending</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
      </div>

      <div className="todo-lists-container">
        {filter === 'all' && (
          <>
            {renderTodoList(pendingTodos, "Pending Tasks")}
            {renderTodoList(completedTodos, "Completed Tasks")}
          </>
        )}
        {filter === 'pending' && renderTodoList(pendingTodos, "Pending Tasks")}
        {filter === 'completed' && renderTodoList(completedTodos, "Completed Tasks")}
      </div>
    </div>
  );
};

export default TodoPage;
