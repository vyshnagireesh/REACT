import React, { useState, useEffect } from "react";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [tooltip, setTooltip] = useState(false);

  // Load tasks from localStorage when component loads
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("todoTasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks array changes
  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");

    // Tooltip show
    setTooltip(true);
    setTimeout(() => setTooltip(false), 1200); // Tooltip auto-hide
  };

  // Toggle task checkbox
  const toggleTask = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  return (
    <div className="todo-container">
      <h2 className="title">React Todo List</h2>

      {/* ================= ADD TASK SECTION ================= */}
      <div className="add-section">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
        />
        <button onClick={addTask} className="add-btn">
          Add Task
        </button>

        {/* Tooltip when task added */}
        {tooltip && <div className="tooltip">Task Added ✔</div>}
      </div>

      {/* ================= DISPLAY ACTIVE TASKS ================= */}
      <div className="task-section">
        <h3>Active Tasks</h3>
        <ul>
          {tasks
            .filter((t) => !t.completed)
            .map((t) => (
              <li key={t.id} className="task-item">
                {/* checkbox will toggle "completed" state */}
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTask(t.id)}
                />
                <span>{t.text}</span>
              </li>
            ))}
        </ul>
      </div>

      {/* ================= DISPLAY COMPLETED TASKS ================= */}
      <div className="completed-section">
        <h3>Completed Tasks</h3>
        <ul>
          {tasks
            .filter((t) => t.completed)
            .map((t) => (
              <li key={t.id} className="task-item completed">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTask(t.id)}
                />
                <span>{t.text}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;