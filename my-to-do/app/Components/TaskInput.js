import React, { useState, useEffect } from "react";

export default function TaskInput() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const storedCompletedTasks =
      JSON.parse(localStorage.getItem("completedTasks")) || [];
    setTasks(storedTasks);
    setCompletedTasks(storedCompletedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  const handleTaskInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
      setTaskText("");
    }
  };

  const handleTaskCompletion = (taskIndex) => {
    const taskToComplete = tasks[taskIndex];
    setCompletedTasks([...completedTasks, taskToComplete]);
    tasks.splice(taskIndex, 1);
    setTasks([...tasks]);
  };

  const handleReturnToPending = (taskIndex) => {
    const taskToReturn = completedTasks[taskIndex];
    setTasks([...tasks, taskToReturn]);
    completedTasks.splice(taskIndex, 1);
    setCompletedTasks([...completedTasks]);
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
      <button onClick={handleAddTask}>Enter your task!</button>

      <div>
        <h2>Current Task</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  onChange={() => handleTaskCompletion(index)}
                />
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
                <input
                  type="radio"
                  onChange={() => handleReturnToPending(index)}
                />
                {task}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
