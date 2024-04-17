import { useState } from 'react';

// Custom hook to manage todo list functionality
export function useTodoList() {
  // State variables for task title, todos, and current list index
  const [taskTitle, setTaskTitle] = useState(''); // State for the title of a new task
  const [todos, setTodos] = useState([ // State for the list of todo lists
    {
      id: '01',
      title: 'Todo List 1',
      tasks: [ // List of tasks within each todo list
        { id: '1', title: 'App Created', completed: false },
        { id: '2', title: 'CRUD Operation Used', completed: false },
        { id: '3', title: 'React Native Used', completed: false },
        { id: '4', title: 'Comments Done', completed: false },
        { id: '5', title: 'App Completed', completed: false },
      ],
    },
  ]);
  const [currentListIndex, setCurrentListIndex] = useState(0); // Index of the currently selected todo list

  // Function to add a new task to the current todo list
  const handleAddTask = () => {
    // Check if the task title is not empty
    if (taskTitle.trim() === '') return;
    // Create a new task object with a random ID, the provided title, and default completion status
    const newTask = {
      id: Math.random().toString(),
      title: taskTitle,
      completed: false,
    };
    // Copy the current todos array
    const updatedTodos = [...todos];
    // Push the new task to the tasks array of the currently selected todo list
    updatedTodos[currentListIndex].tasks.push(newTask);
    // Update the todos state with the new array
    setTodos(updatedTodos);
    // Clear the task title for the next task
    setTaskTitle('');
  };

  // Function to toggle the completion status of a task
  const handleToggleTask = (taskId) => {
    // Copy the current todos array
    const updatedTodos = [...todos];
    // Find the index of the task with the provided ID in the tasks array of the currently selected todo list
    const currentTasks = updatedTodos[currentListIndex].tasks;
    const taskIndex = currentTasks.findIndex((task) => task.id === taskId);
    // Toggle the completion status of the task
    currentTasks[taskIndex].completed = !currentTasks[taskIndex].completed;
    // Update the todos state with the modified array
    setTodos(updatedTodos);
  };

  // Function to delete a task from the current todo list
  const handleDeleteTask = (taskId) => {
    // Copy the current todos array
    const updatedTodos = [...todos];
    // Filter out the task with the provided ID from the tasks array of the currently selected todo list
    const currentTasks = updatedTodos[currentListIndex].tasks;
    const filteredTasks = currentTasks.filter((task) => task.id !== taskId);
    // Update the tasks array of the currently selected todo list with the filtered array
    updatedTodos[currentListIndex].tasks = filteredTasks;
    // Update the todos state with the modified array
    setTodos(updatedTodos);
  };

  // Return state variables and functions for external use
  return {
    taskTitle,
    setTaskTitle,
    todos,
    setTodos,
    currentListIndex,
    setCurrentListIndex,
    handleAddTask,
    handleToggleTask,
    handleDeleteTask,
  };
}
