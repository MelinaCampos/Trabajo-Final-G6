import React from 'react'


const TaskItem = ({ nombre, completada, onToggleCompletar, onEliminar }) => {
    return (
      <div className='boxTarea' style={{ textDecoration: completada ? 'line-through' : 'none' }}>
        <span>{nombre}</span>
        <input
          type="checkbox"
          checked={completada}
          onChange={onToggleCompletar}
        />
        <button onClick={onEliminar}>Eliminar</button>
      </div>
    );
  };
  
  export default TaskItem;