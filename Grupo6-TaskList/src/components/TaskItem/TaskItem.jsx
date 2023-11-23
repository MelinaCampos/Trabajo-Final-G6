import React from 'react'


const TaskItem = ({ nombre, completada, onToggleCompletar, onEliminar }) => {
    return (
      <div className='boxTarea' style={{ textDecoration: completada ? 'line-through' : 'none' }}>
        <span>{nombre}</span>
        <input   // agrega un checkbox que cuando cambie ejecute la funcion que permite que se tache una tarea cuando esta completada
          type="checkbox"
          checked={completada}
          onChange={onToggleCompletar}
        />
        <button onClick={onEliminar}>Eliminar</button> //ejecuta la funcion que elimina la tarea una vez se clickea el boton
      </div>
    );
  };
  
  export default TaskItem;
