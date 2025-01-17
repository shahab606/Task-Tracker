// client/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
          const result = await axios.get('http://127.0.0.1:5000/tasks');
          setTasks(result.data);
        };
         fetchTasks();
    }, []);

    const addTask = async (description) => {
        const result = await axios.post('http://127.0.0.1:5000/tasks', {description});
         setTasks([...tasks, result.data]);
    };

    const toggleComplete = async (id, completed) => {
        const result = await axios.patch(`http://127.0.0.1:5000/tasks/${id}`, { completed });
        const updatedTasks = tasks.map(task => task._id === id ? result.data : task);
        setTasks(updatedTasks);
      };

    return (
        <div className="App">
            <h1>Task Tracker</h1>
            <TaskForm onAddTask={addTask} />
            <TaskList tasks={tasks} onToggleComplete={toggleComplete} />
        </div>
    );
}

export default App;