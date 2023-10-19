import React, { useState, useEffect } from 'react';

export default function TaskInput() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    // Retrieve tasks and completed tasks from local storage when the component mounts
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const storedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setTasks(storedTasks);
    setCompletedTasks(storedCompletedTasks);
  }, []);

  // Update local storage whenever the tasks or completedTasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  const handleTaskInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  const handleTaskCompletion = (taskIndex) => {
    const completedTask = tasks[taskIndex];
    setCompletedTasks([...completedTasks, completedTask]);
    tasks.splice(taskIndex, 1);
    setTasks([...tasks]);
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={taskText}
        onChange={handleTaskInputChange}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <div>
        <h2>Current Task</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <label>
                <input type="radio" onChange={() => handleTaskCompletion(index)} />
                {task}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Completed Task</h2>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index}>
                <label>
                    <input type='radio' onChange={() => handleAddTask(index)} />{task}
                </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}