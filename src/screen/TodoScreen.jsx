import React from 'react';
import { useTodoList } from './todoLogic';

function TodoApp() {
  // Retrieve state variables and functions from the custom hook
  const {
    taskTitle,
    setTaskTitle,
    todos,
    currentListIndex,
    handleAddTask,
    handleToggleTask,
    handleDeleteTask,
  } = useTodoList();

  return (
    <div style={{ margin: '20px' }}>
      {/* Render todo lists */}
      {todos.map((todo, index) => (
        <div key={todo.id} style={{ marginBottom: '20px' }}>
          {/* Todo list title */}
          <h2>{todo.title}</h2>
          {/* Render tasks for each todo list */}
          <ul>
            {todo.tasks.map((task) => (
              <li key={task.id} style={{ marginBottom: '8px' }}>
                {/* Checkbox to toggle task completion */}
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTask(task.id)}
                />
                {/* Task title with strike-through if completed */}
                <span style={{ marginLeft: '8px', textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.title}
                </span>
                {/* Button to delete task */}
                <button style={{ marginLeft: '8px' }} onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
          {/* Input field to add new task */}
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            style={{ marginBottom: '8px' }}
            placeholder="Add a task"
          />
          {/* Button to add new task */}
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      ))}
    </div>
  );
}

export default TodoApp;
