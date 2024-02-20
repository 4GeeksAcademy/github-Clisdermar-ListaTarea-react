import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';


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

  return (

   
      <div className="container">
        <div> <h1>Todos</h1></div>
      <div class="card">
        <div class="card-body">
      <ul class="list-group" onSubmit={handleSubmit}>
      <form >
        <input
          type="text"
          placeholder="What need to be done?"
          value={task}
          onChange={handleChange} 
          style={{ border: 'none', outline: 'none'}} 
        />
         </form>
        
        {tasksList.map((task, index) => (
          <li class="list-group-item" key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}>
            {task}

            {hoveredIndex === index && (
              <button className="delete-button" onClick={() => handleDelete(index)}>
            <FontAwesomeIcon icon={faXmark} style={{color: "#f03405",}} />
            </button>
            )}
          </li>
        ))}
      </ul>
      
    </div>
    </div>
    </div>
    
  );
};

export default TodoLista;