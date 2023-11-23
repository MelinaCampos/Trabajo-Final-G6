import React from 'react'


const TaskItem = ({ nombre, completada, onToggleCompletar, onEliminar }) => {
    return (
        //div que tiene como propiedad tachar la tarea una vez completada
      <div className='boxTarea' style={{ textDecoration: completada ? 'line-through' : 'none' }}> 
        <span>{nombre}</span>
        <input   // agrega un checkbox que cuando cambie ejecute la funcion que permite que cambie el estado de completada de la tarea
          type="checkbox"
          checked={completada}
          onChange={onToggleCompletar}
        />
        <button onClick={onEliminar}>Eliminar</button> 
      </div> //ejecuta la funcion que elimina la tarea una vez se clickea el boton
    );
  };
  
  export default TaskItem;
