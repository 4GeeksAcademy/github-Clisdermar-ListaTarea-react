import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const TodoLista = () => {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      setTasksList([...tasksList, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasksList];
    updatedTasks.splice(index, 1);
    setTasksList(updatedTasks);
  };

  const remainingTasks = tasksList.length;

  return (
    <div className="container">
      <div>
        <h1>Todos</h1>
      </div>
      <div className="card">
        <div className="card-body">
          <ul className="list-group" onSubmit={handleSubmit}>
            <form>
              <input
                type="text"
                placeholder="What needs to be done?"
                value={task}
                onChange={handleChange}
                style={{ border: 'none', outline: 'none', marginBottom: '10px' }}
              />
            </form>

            {tasksList.map((task, index) => (
              <li
                className="list-group-item"
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {task}
                {hoveredIndex === index && (
                  <button className="delete-button" onClick={() => handleDelete(index)}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#f03405' }} />
                  </button>
                )}
              </li>
            ))}

            {remainingTasks > 0 && (
              <li className="list-group-item">
                <strong>{remainingTasks} item left</strong> 
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoLista;