'use client';

import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React basics", completed: true },
    { id: 2, text: "Build a todo app", completed: false },
    { id: 3, text: "Practice TypeScript", completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 max-w-md mx-auto">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Todo List Manager</h3>
        <p className="text-gray-600 text-sm">Dynamic content manipulation</p>
      </div>
      
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo..."
          className="flex-1 px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          onClick={addTodo}
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Add
        </button>
      </div>
      
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {todos.map(todo => (
          <div
            key={todo.id}
            className={`flex items-center space-x-3 p-3 rounded-lg border ${
              todo.completed 
                ? 'bg-pink-50 border-pink-200' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-4 h-4 text-pink-600 rounded"
            />
            <span
              className={`flex-1 text-sm ${
                todo.completed 
                  ? 'text-gray-500 line-through' 
                  : 'text-gray-800'
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="text-red-500 hover:text-red-700 font-medium text-sm px-2 py-1 rounded transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
