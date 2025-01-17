// client/src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, onToggleComplete }) => {
    return (
        <ul>
          {tasks.map((task) => (
            <li key={task._id} style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggleComplete(task._id, !task.completed)}
                />
                {task.description}
            </li>
          ))}
        </ul>
      );
};

export default TaskList;